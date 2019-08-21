import Mock from "mockjs";
import data_hightcharts from "./data_hightcharts"
Mock.mock("/data/user", "post", data_hightcharts.user)
Mock.mock("/data/line", "post", data_hightcharts.line)


export default Mock


// Mock.mock(template)
// Mock.mock(rurl, template)
// Mock.mock(rurl, function (options) )
// Mock.mock(rurl, rtype, template)
// Mock.mock(rurl, rtype, function (options) )
// rurl 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
// rtype 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
// template 表示数据模板，可以是对象或字符串
// function(options) 表示用于生成响应数据的函数。
// options 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性，参见 XMLHttpRequest 规范。