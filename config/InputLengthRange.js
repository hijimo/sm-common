// 前端输入控制
// min 最小值
// max 最大值
// maxLength 最大输入长度
export default {
  // 绝大数的数字类型，
  number: {
    min: 1,
    maxLength: 9,
  },
  phone: {
    maxLenght: 20,
  },
  // 产品名称
  product: {
    min: 4,
    maxLength: 180,
  },
  // 公司名称
  company: {
    min: 4,
    maxLength: 180,
  },
  text: {
    maxLength: 100,
  },
  textarea: {
    maxLength: 500,
  },
  expoName: {
    maxLength: 200,
  },
  specDescription: {
    maxLength: 100,
  },
  itemNo: {
    min: 1,
    maxLength: 18,
  },
};
