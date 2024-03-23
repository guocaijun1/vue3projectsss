// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入vant-ui
// import Vant from 'vant';
//引入全局css
// import 'vant/lib/index.css';
//导入router
import router from './router/index'
createApp(App).use(ElementPlus).use(router).mount('#app')
