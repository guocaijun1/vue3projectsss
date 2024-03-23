// 注册路由 吧路由组件映射为路由
import {
    createRouter,//创建路由对象
    createWebHashHistory,//路由模式 地址栏里有#
    useRouter
} from 'vue-router'

//导入路由组件
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'

// var router1=useRouter()
//把路由组件映射为路由
// {
//     path: '/',
//     component: Index,
//     meta: {
//         isAuth: true,
//         title: '首页',
//         nodemenu: false
//     }
// },
const routes: any = [
    {
        path: '/',
        component: Index,
        meta: {
            isAuth: true,
            title: '首页',
            nodemenu: false
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            name:'登录页',
            isAuth: false,
            title: '登录页',
            nodemenu: true

        }
    },
    //把Home组件映射为/home
    {
        name:'用户管理',
        path: '/users',
        component: Home,
        meta: {
            isAuth: true,
            title: '用户管理',
            nodemenu: false
        }
    },
    //把Home组件映射为/home
    {
        name:'用户聊天',
        path: '/chats',
        component: Chat,
        meta: {
            isAuth: true,
            title: '聊天',
            nodemenu: false

        }
    },
    //重定向
    {
        path: '/',
        redirect: '/'
    }
]
    // const login={
    //     path: '/login',
    //     component: Login,
    //     meta: {
    //         name:'登录页',
    //         isAuth: false,
    //         title: '登录页',
    //         nodemenu: true

    //     }
    // }
//获取权限
// let rbacs:any=localStorage.getItem('rabc')
// let rr=JSON.parse(rbacs)
// console.log(rr,'router')
// const routes: any =[...rr,login] 
// console.log(routes,'rrr')
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
// console.log(router)
//路由守卫
//全局前置路由守卫
//next =》放行
router.beforeEach((to: any, from: any, next: any) => {
    if (to.meta.isAuth) {
        //需要保护
        // console.log("不行不能过")
        if (localStorage.getItem('token')) {
            next()
        } else {
            // alert("请去登录")
            router.push("/login")

        }
    } else {
        //不需要
        next()
    }
})
//全局后置路由守卫
router.afterEach((to: any, from: any) => {
    // console.log(to)
    document.title = to.meta.title
})
export default router