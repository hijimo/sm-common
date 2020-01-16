import InputLengthRange from './InputLengthRange';

const config = {
  local: {},
  dev: {
    mallHost: 'https://www.dev.yeeorder.com.cn',
    supplierHost: 'https://supplier.dev.yeeorder.com.cn',
    purchaserHost: 'https://purchaser.dev.yeeorder.com.cn',
    adminHost: 'https://admin.dev.yeeorder.com.cn',
  },
  development: {
    mallHost: 'https://www.test.yeeorder.com.cn',
    supplierHost: 'https://supplier.test.yeeorder.com.cn',
    purchaserHost: 'https://purchaser.test.yeeorder.com.cn',
    adminHost: 'https://admin.test.yeeorder.com.cn',
  },
  pre: {
    mallHost: 'https://www.yeeorder.com.cn',
    supplierHost: 'https://supplier.yeeorder.com.cn',
    purchaserHost: 'https://purchaser.yeeorder.com.cn',
    adminHost: 'https://admin.yeeorder.com.cn',
  },
  production: {
    mallHost: 'https://www.yeeorder.com',
    supplierHost: 'https://supplier.yeeorder.com',
    purchaserHost: 'https://purchaser.yeeorder.com',
    adminHost: 'https://admin.yeeorder.com',
  },
};

export default {
  InputLengthRange,
  ...config[PUBLISH_ENV || 'production'],
};
