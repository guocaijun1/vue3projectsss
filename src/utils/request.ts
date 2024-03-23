// Set config defaults when creating the instance
import axios from 'axios'
import {useRouter} from 'vue-router'
let router=useRouter()
const instance = axios.create({
    baseURL: ''
  });
  import { ElMessage } from 'element-plus'

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
   //获取后端返回的token
   const token=localStorage.getItem('token')
   // 将token写入到请求头里,再发送给服务器
   if(token)
   // Authorization 存在请求头里授权选项，一般需要赋值为token
   config.headers.Authorization=`xxxxxx${token}`
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res=response.data;
        //如果后端token校验失败,token过期，假设token过期的响应码是505
        if(res.status===505){
          // console.log("登录过期,请重新登录")
          ElMessage.error("登录过期,请重新登录");
          router.push("/login")
        }
        // 错误码  500 服务器在维护
        //404  请求不到服务器  401 400
        if(res.status===501){
          // console.log("服务器正在维护,请稍后再试")
          ElMessage.error("服务器正在维护,请稍后再试");
          //销毁token
          window.localStorage.removeItem('token')
          router.push("/login")
    
        }
        if(res.status===404){
          // console.log("请求不到服务端页面")
          ElMessage.error("请求不到服务端页面");
           //销毁token
           window.localStorage.removeItem('token')
           router.push("/login")
          
        }
        if(res.status===400){
          // console.log("请求不到服务端页面")
          ElMessage.error("请求语法错误");
           //销毁token
           window.localStorage.removeItem('token')
           router.push("/login")
          
        }
        if(res.status===401){
          // console.log("请求不到服务端页面")
          ElMessage.error("登录过期");
           //销毁token
           window.localStorage.removeItem('token')
           router.push("/login")
          
        }
    return response.data;
    // console.log(response.data)
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance
