// 使用于阿里云oss直传的自定义 ckEditor UploadAdapter
// 同时兼容antd 的customRequest

// import { message } from 'antd';
import { getOssSign } from '../services/common';
import { getUploadSign, setUploadSign } from '../utils/ls';
import { genUniqueFileName } from '../utils/file';

const genKey = (dir, filename) => {
  const dt = new Date();
  return `${dir}/${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}/${genUniqueFileName(
    filename,
  )}`;
};
const genFileUrl = (host, key) => {
  return `${host}/${key}`;
};
const defaultHeaders = filename => ({
  'Cache-Control': 'max-age=31536000',
  'Content-Disposition': `filename="${filename}"`,
});

const assignHeaders = (xhr, headers, file) => {
  const { name: filename } = file;
  const headerOptions = Object.assign({}, headers, defaultHeaders(filename));
  Reflect.ownKeys(headerOptions).forEach(header => {
    xhr.setRequestHeader(header, encodeURIComponent(headerOptions[header]));
  });
};

// opts {
//   data,
//   file,
//   headers,
//   onError,
//   onProgress,
//   onSuccess,
//   withCredentials,
// }
class Uploader {
  constructor(opts) {
    this.opts = opts;
  }

  async getUploadSignInfo() {
    const { onError } = this.opts;
    const sign = this.sign || getUploadSign();
    // 以秒为单位
    if (sign) {
      const t = parseInt(new Date().valueOf() / 1000) + 30 * 60;
      if (sign.creator + sign.duration >= t) {
        return sign;
      }
    }

    const res = await getOssSign();

    if (res) {
      res.creator = parseInt(new Date().valueOf() / 1000);
      setUploadSign(res);
      return res;
    }
    // 如果获取证书失败，直接返回文件上传失败
    onError(retMsg || '');

    return null;
  }

  async upload() {
    this.sign = await this.getUploadSignInfo();

    if (this.sign) {
      this.initRequest();
      this.initListeners();
      this.sendRequest();
    } else {
      // message.error('file upload fail');
    }
  }

  initRequest() {
    this.xhr = new XMLHttpRequest();
    const { xhr } = this;
    const { host } = this.sign;
    const { headers, withCredentials = false, file } = this.opts;
    xhr.open('POST', host, true);
    xhr.responseType = 'json';
    xhr.withCredentials = withCredentials;
    assignHeaders(xhr, headers, file);
  }

  initListeners() {
    const { opts, xhr, loader } = this;
    const { onError, onProgress, onSuccess } = opts;

    xhr.addEventListener('error', e => {
      if (onError) {
        onError(e);
      }
    });
    xhr.addEventListener('abort', e => {
      if (onError) {
        onError(e);
      }
    });
    xhr.addEventListener('load', e => {
      if (xhr.status !== 200 && onError) {
        onError(xhr || '');
      }

      if (xhr.status === 200 && onSuccess) {
        onSuccess(xhr);
      }
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (onProgress) {
          onProgress(evt);
        }
      });
    }
  }

  sendRequest() {
    const { name = 'file', data, file } = this.opts;
    const fd = new FormData();
    const { accessKeyId: OSSAccessKeyId, dir, policy, signature, host } = this.sign;
    const key = genKey(dir, file.name);
    const oss = {
      OSSAccessKeyId,
      success_action_status: '200',
      policy,
      signature,
      key,
    };

    const otherData = Object.assign({}, data || {}, oss);

    Reflect.ownKeys(otherData).forEach(key => {
      fd.append(key, otherData[key]);
    });

    fd.append(name, file);
    this.xhr.fileUrl = genFileUrl(host, key);
    this.xhr.send(fd);
  }

  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}

export default Uploader;
