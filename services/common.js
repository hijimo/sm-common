import request from '../utils/request';

// 获取阿里云OSS的上传token
export async function getOssSign() {
  return request('/api/anton/common/oss_token/query');
}

// 获取用户的菜单
export async function getUserRoleMenu(params) {
  return request('/api/hera/resource/role_menu/query', {
    params,
  });
}
