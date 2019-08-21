import { post } from "./config";
import { Mock } from "../data/index";

export const requestList = (url, params)  => {
    //接口请求地址是axios.defaults.baseURL+下面的url
    console.log(url)
    return post(url, params).then(res => res);
};
