import httpUtil from "../utils/httpUtil";

/**
 * 登录
 */
export function fetchLogin(params) {
  return httpUtil.post("api/login/do_login", params);
}
