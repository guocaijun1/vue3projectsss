import ajax from './ajax'
// let url="https://api.github.com/search/repositories?q=v&sort=stars"
// export const btn1=()=>ajax(url,'get')
//登录接口
const URL="/api"
export const login=(name:any,pass:any)=>ajax(`${URL}/login`,{name,pass},'POST')
//获取用户接口
export const users=()=>ajax(`${URL}/user`)
//获取用户详情接口
export const usersinfo=(name:any)=>ajax(`${URL}/userinfo`,{name},'GET')


