import Mock from "mockjs";
import user from "./user"

Mock.mock("/data/user","post",user.user)

export default Mock