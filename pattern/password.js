export const regPassword = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;

// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

export default {
  regPassword,
};
