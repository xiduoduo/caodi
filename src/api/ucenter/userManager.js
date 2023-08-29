import utilsRequestAdmin from "@/utils/requestAdmin";

/**
 * @description 获取列表
 * @param {Object} params 接口参数
 * @returns {Promise} 返回结果
 */
function list(params) {
  return utilsRequestAdmin({
    url: "/system/admin/group/index",
    method: "get",
    params
  });
}

export default {
  list
};
