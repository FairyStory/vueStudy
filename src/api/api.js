import { post } from "./config";
import { Mock } from "../data/index";

export const requestFansList = params => {
    //接口请求地址是axios.defaults.baseURL+下面的url
    return post(`/user`, params).then(res => res);
};