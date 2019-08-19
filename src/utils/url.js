import axios from 'axios'

const post = function (url, params) {
    return new Promise(function(resolve,reject) {
        axios.post(url,params).then(data=>{
            resolve(data)
        }).catch(data=>{
            reject(data)
        })
    })
}


const base ="192.168.1.12"

export const reqUser = params => {
  return post(`${base}/user`, params).then(res => res);
};