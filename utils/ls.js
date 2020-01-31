import _isObject from 'lodash/isObject';

export function get(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || null);
  } catch (ex) {
    return localStorage.getItem(key);
  }
}

export function set(key, value) {
  let v = _isObject(value) ? JSON.stringify(value) : value;

  return localStorage.setItem(key, v);
}
export function clear () {
  localStorage.clear()
}

// 文件上传凭证

export function getUploadSign() {
  return get('__upload_sign_object');
}
export function setUploadSign(signObject) {
  return set('__upload_sign_object', signObject);
}
