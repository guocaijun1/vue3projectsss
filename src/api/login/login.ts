import  instance from '../../utils/request'
export const login=(data:any)=>instance({
    url:'/api/login',
    method:'post',
    data:data

})