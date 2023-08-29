/**
 * @description 验证是否是手机号码
 * @param {String} tel 输入参数
 * @returns {Boolean} 返回结果。true-是，false-否
 */
function validTel(tel) {
  const reg = /^1[3456789]\d{9}/g;
  return reg.test(tel);
}

export default {
  validTel
};
