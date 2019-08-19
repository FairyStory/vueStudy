
import Mock from "mockjs";

export default {
    user:function() {
        let data ={
            name: Mock.Random.cname(),
            image: Mock.Random.image('200x100', '#FF6600')
        };
        return data ;
    }
}