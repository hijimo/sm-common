import Uploader from '../../utils/Uploader';
class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    const { loader } = this;

    return loader.file.then(
      file =>
        new Promise((resolve, reject) => {
          const onError = msg => {
            const genericErrorText = `Couldn't upload file: ${file.name}.`;
            reject(genericErrorText);
          };
          const onProgress = evt => {
            if (evt.lengthComputable) {
              loader.uploadTotal = evt.total;
              loader.uploaded = evt.loaded;
            }
          };
          const onSuccess = res => {
            resolve({
              default: res.fileUrl,
            });
          };

          this.uploader = new Uploader({
            file,
            onError,
            onProgress,
            onSuccess,
          });

          this.uploader.upload();
        }),
    );
  }

  abort() {
    if (this.uploader) {
      this.uploader.abort();
    }
  }
}

export const AliOSSUploadAdapterPlugin = editor => {
  editor.plugins.get('FileRepository').createUploadAdapter = loader => new UploadAdapter(loader);
};
