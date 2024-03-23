// 注册路由 吧路由组件映射为路由
import {
    createRouter,//创建路由对象
    createWebHashHistory,//路由模式 地址栏里有#
} from 'vue-router'
//导入路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//把路由组件映射为路由
const routes:any=[
    //把Home组件映射为/home
    {
        path:'/home',
        component:Home,
        meta:{
            isAuth:true,
            title:'Home'
        }
    },
    //把About组件映射为/about
    {
        path:'/about/:id',
        component:About,
        meta:{
            isAuth:false,
            title:'about'
        }
    },
    //重定向
    {
        path:'/',
        redirect:'/about'
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})
//路由守卫
//全局前置路由守卫
//next =》放行
router.beforeEach((to:any,from:any,next:any)=>{
    if(to.meta.isAuth){
        //需要保护
        // console.log("不行不能过")
        if(localStorage.getItem('islogin')==="junge"){
            next()
        }else{
            alert("请去登录")
        }
    }else{
        //不需要
        next()
    }
})
//全局后置路由守卫
router.afterEach((to:any,from:any)=>{
    // console.log(to)
    document.title=to.meta.title
})
export default router