import Mock from "mockjs";
import data_hightcharts from "./data_hightcharts"

Mock.mock("/data/user", "post", data_hightcharts.user)

export default Mock