import  instance from '../../utils/request'
export const getusers=()=>instance({
    url:'/api/users',
    method:'get'

})
export const userdisable=(params:any)=>instance({
    url:'/api/usersdisable',
    method:'get',
    params:params

})
export const deluser=(params:any)=>instance({
    url:'/api/usersdel',
    method:'get',
    params:params

})
export const addusers=(data:any)=>instance({
    url:'/api/adduser',
    method:'post',
    data:data

})

//获取登录用户的所有权限信息
export const getrbac=(params:any)=>instance({
    url:'/api/getuserrbac',
    method:'get',
    params:params

})