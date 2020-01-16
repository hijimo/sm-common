import Uploader from '../../utils/Uploader';

// 去掉了filename，不支持这个属性，因为没有什么用。
const CustomRequest = ({
  // action,
  data,
  file,
  filename,
  headers,
  onError,
  onProgress,
  onSuccess,
  withCredentials,
}) => {
  // 格式化返回格式为antd组件格式
  const onUploadProgress = ({ total, loaded }) => {
    onProgress({ percent: parseFloat(Math.round((loaded / total) * 100).toFixed(2)) }, file);
  };
  const onUploadSuccess = xhr => {
    onSuccess(
      {
        success: true,
        data: {
          fileUrl: xhr.fileUrl,
        },
      },
      xhr,
    );
  };
  const onUploadFail = e => {
    onError(e, file);
  };

  const uploader = new Uploader({
    file,
    data,
    headers,
    withCredentials,
    onError: onUploadFail,
    onProgress: onUploadProgress,
    onSuccess: onUploadSuccess,
  });

  uploader.upload();

  return {
    abort() {
      console.log('upload progress is aborted.');
    },
  };
};

export default CustomRequest;
