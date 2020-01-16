export const regPhone = /^1[3456789]\d{9}$/;

// 支持+86xxxxxxxxx 、 0571-xxxxxxx
export const regAllPhone = /^\+?\d+-?\d+$/;

export default {
  regPhone,
  regAllPhone,
};
