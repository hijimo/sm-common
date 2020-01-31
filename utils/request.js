/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import _includes from 'lodash/includes';
import { extend } from 'umi-request';

import { getLocale, formatMessage } from 'umi-plugin-react/locale';
import { notification, message, Modal } from 'antd';

const codeMessage = {
  200: formatMessage({ id: 'common.request.error.error200' }),
  201: formatMessage({ id: 'common.request.error.error201' }),
  202: formatMessage({ id: 'common.request.error.error202' }),
  204: formatMessage({ id: 'common.request.error.error204' }),
  400: formatMessage({ id: 'common.request.error.error400' }),
  401: formatMessage({ id: 'common.request.error.error401' }),
  403: formatMessage({ id: 'common.request.error.error403' }),
  404: formatMessage({ id: 'common.request.error.error404' }),
  406: formatMessage({ id: 'common.request.error.error406' }),
  410: formatMessage({ id: 'common.request.error.error410' }),
  422: formatMessage({ id: 'common.request.error.error422' }),
  500: formatMessage({ id: 'common.request.error.error500' }),
  502: formatMessage({ id: 'common.request.error.error502' }),
  503: formatMessage({ id: 'common.request.error.error503' }),
  504: formatMessage({ id: 'common.request.error.error504' }),
};

const notNotifiRetCodeList = [
  '0001007', // 未登录
  '6018', // 商品已下架
  '3025', // 账号冻结
  '3036', // 角色冻结
  '3038', // 公司冻结
  '151', // 购物车已满
  '207', // 提交订单时，商品已失效
  '7057', // 供应商商户showroom未装修
];

/**
 * 异常处理程序
 */

const errorHandler = error => {
  const { response } = error;

  if (response && response.status) {
    const { status, url } = response;
    if (status === 401 ) {
      window.location = '/user/login'
    } else if (status === 403) {
      window.location = '/403'
    }
    const errorText = codeMessage[response.status] || response.statusText;
    
    notification.error({
      message: `${formatMessage({ id: 'common.request.label.requetError' })} ${status}: ${url}`,
      description: errorText,
    });
  } 
  

  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  return {
    options: {
      ...options,
      headers: {
        'Accept-Language': getLocale(),
      },
    },
  };
});

let errorModal = null;

const showError = (title, okText) => {
  if (errorModal) {
    errorModal.update({ title, okText });
  } else {
    errorModal = Modal.error({ title, okText });
  }
};
request.interceptors.response.use(async response => {
  // const data = await response.clone().json();

  // const { code, message, success } = data || {};

  // if (data && !success && !_includes(notNotifiRetCodeList, retCode)) {
  //   // notification.error({
  //   //   message: `network error`,
  //   //   description: data.retMsg,
  //   // });
  //   message.error(message);
  // }
  return response;
});
export default request;
