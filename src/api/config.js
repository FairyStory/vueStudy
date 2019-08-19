import axios from 'axios';
import ElementUI from 'element-ui';
import router from '../router'



// axios.defaults.baseURL = "";//
axios.defaults.withCredentials = true

//环境改变请求域名
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/data';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://api.123dailu.com/';
}

//请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


//响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            let data = res.data;
            let error = data.error
            if (error) {
                if (error.code == "-32001") {
                    ElementUI.Message({ message: "无权限", type: "warning" });
                } else if (error.code == "50001" || error.code == "-50001") {
                    sessionStorage.removeItem("user");
                    router.push('./login')
                } else {
                    reject(data)
                }
            } else {
                resolve(data);
            }

        }).catch(res => {
            reject(res)

        })
    })
}
