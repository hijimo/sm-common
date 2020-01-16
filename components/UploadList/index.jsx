// api 同 antd api,
// 优化了某些奇异的行为，如 beforeUpload返回false却显示在fileList列表中
// 添加特性，设置 accpet,可直接在beforeUpload中生效过滤
// 添加 maxSize,单位kB。限制最大文件大小
// 添加 maxLength,限制文件上传个数
// 添加了 onFileUploaded,每当文件上传成功
// 关闭了onChange 接口，改为爆露onOriginChange以保持对源api的兼容
// 重写了onChange的返回值，以对Form更友好
import React, { useState, useEffect, useMemo } from 'react';
import { Upload, message, Icon } from 'antd';
import _isObject from 'lodash/isObject';
import _map from 'lodash/map';
import classNames from 'classnames';
import { formatMessage } from 'umi-plugin-react/locale';
import { isImage, isVideo, getFileIcon, getFileMIME } from '../../utils/file';
import { UploadUrl } from '../../services/common';
import CustomRequest from './customRequest';
import styles from './index.less';

const StatusENUM = {
  uploading: 'uploading',
  done: 'done',
  error: 'error',
  removed: 'removed',
};

const getMaxSize = (file, maxSize) => (_isObject(maxSize) ? maxSize[file.type] : maxSize);

const checkIsSizeOut = (file, maxSize) => {
  const max = getMaxSize(file, maxSize);
  return file.size / 1024 > max;
};
const removeFile = (file, fileList) => {
  const idx = fileList.indexOf(file);
  if (idx > -1) {
    fileList.splice(idx, 1);
  }
};

const inAccpetList = (type, accpet) => {
  if (!accpet || !type) return true;

  const accpetList = accpet.split(',').filter(it => it === type || getFileMIME(it) === type);
  return accpetList && accpetList.length > 0;
};

const UploadList = React.forwardRef((props, ref) => {
  const {
    className,
    maxSize = 10240,
    children,
    maxLength = 20,
    onChange,
    onOriginChange,
    onFileUploaded,
    onError,
    value = [],
    ...otherProps
  } = props;

  const getThumUrl = file => {
    const { name, url } = file;
    // 2019.12.12添加url判断冗余。
    // 因为发现很多好久数据中可能只有 {id:xx, url:xxx}
    // 但这只是一个修补，无法解决数据结构不正确的问题
    // 因为 url 可能不会包括文件信息
    let thumbUrl = '';

    const filename = name || url;
    if (isImage(filename)) {
      thumbUrl = `${url}?x-oss-process=image/resize,m_mfit,h_100,w_100`;
    } else if (isVideo(filename)) {
      thumbUrl = `${url}?x-oss-process=video/snapshot,t_0,f_jpg,w_100,h_100,m_fast`;
    } else {
      thumbUrl = getFileIcon(name);
    }
    return thumbUrl;
  };
  const setThumUrl = file => {
    file.thumbUrl = getThumUrl(file);
  };
  const valueMemo = useMemo(
    () =>
      _map(value, it => ({
        ...it,
        thumbUrl: getThumUrl(it),
      })),
    [value],
  );
  const uploadButton = (
    <div>
      <Icon type='plus' />
      <div className='ant-upload-text'>
        {formatMessage({ id: 'component.uploadlist.butotn.upload' })}
      </div>
    </div>
  );

  const handlePreview = file => {
    window.open(file.url || file.originFileObj.thumbUrl || file.thumbUrl);
  };
  const handleBeforeUpload = (file, fileList) => {
    const { accpet, maxLength, maxSize } = props;

    // 文件格式非法
    const isAllowFile = inAccpetList(file.type, accpet);
    if (!isAllowFile) {
      message.error(
        `${formatMessage({
          id: 'component.uploadlist.error.format',
        })} ${accpet}!`,
      );
    }
    // 文件数量超出
    const isLenOut = value.length + fileList.length > maxLength;
    if (isLenOut) {
      message.error(
        `${formatMessage({
          id: 'component.uploadlist.error.fileLenth',
        })} ${maxLength + 1}`,
      );
      fileList = fileList.slice(0, maxLength);
    }
    // 文件大小溢出
    const isSizeOut = checkIsSizeOut(file, maxSize);
    if (isSizeOut) {
      message.error(
        `${formatMessage({
          id: 'component.uploadlist.error.fileSize',
        })} ${getMaxSize(file, maxSize)}KB!`,
      );
    }

    if (!isAllowFile || isSizeOut) {
      removeFile(file, fileList);

      return false;
    }
    return true;
  };
  const handleChange = ({ file, fileList, event }) => {
    const { response } = file;
    if (response) {
      if (!response.success) {
        removeFile(file, fileList);
      } else {
        const { fileUrl } = response.data;
        const index = fileList.findIndex(item => item.uid === file.uid);
        // file 与fileList里的项不共享内存
        const setField = f => {
          if (f.originFileObj) {
            f.originFileObj.thumbUrl = fileUrl;
            f.url = fileUrl;
          }
          f.url = fileUrl;
          setThumUrl(f);
        };
        if (index > -1) {
          const fileInList = fileList[index];
          setField(fileInList);
        }
        setField(file);

        if (onFileUploaded) {
          onFileUploaded(file, fileList);
        }
      }
    }
    // 改写 onChange事件，以对 Form更友好
    if (onChange) {
      onChange(fileList);
    }

    // 爆露一个onOriginChange以保持对源api的兼容
    if (onOriginChange) {
      onOriginChange({
        file,
        fileList,
        event,
      });
    }
  };
  const handleError = (e, file) => {
    message.error(formatMessage({ id: 'component.uploadlist.error.public' }));
    removeFile(file, value);

    onChange(value);
    if (onError) {
      onError(e);
    }
  };

  return (
    <Upload
      className={classNames(className, styles.uploadList)}
      ref={ref}
      action={UploadUrl}
      beforeUpload={handleBeforeUpload}
      onPreview={handlePreview}
      onChange={handleChange}
      onError={handleError}
      customRequest={CustomRequest}
      fileList={valueMemo}
      {...otherProps}
    >
      {children ? children : valueMemo.length < maxLength ? uploadButton : null}
    </Upload>
  );
});

export default UploadList;
