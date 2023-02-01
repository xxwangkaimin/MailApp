import request from '@ohos.request';

export function uploadFile(fileData) {
  return new Promise((resolve, reject) => {
    let uploadTask
    request.upload({
      url: "http://127.0.0.1:4000/api/file/uploadFile",
      method: "POST",
      files: [fileData],
      data: [{ name: "bucket", value: "wkm-development" }]
    }).then(data => {
      uploadTask = data
      resolve(uploadTask)
    }).catch((err) => {
      console.error('Failed to request the upload. Cause: ' + JSON.stringify(err));
      reject(err)
    })
  })
}
