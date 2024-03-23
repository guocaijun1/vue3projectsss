<template>
    <div aria-label="A complete example of page header">
        <el-page-header>
            <template #content>
                <div class="flex items-center">
                    <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                        后台管理
                    </span>
                </div>
            </template>
            <template #extra>
                <div class="flex items-center">
                    <el-button>欢迎{{name}}</el-button>
                    <el-button type="primary" class="ml-2" @click="logout">退出</el-button>
                </div>
            </template>
        </el-page-header>
    </div>
</template>
  
<script setup lang="ts">
import {useRouter} from 'vue-router'
import { ElNotification as notify } from 'element-plus'
let router=useRouter()
const onBack = () => {
    notify('Back')
}
//获取登录名字
let name=localStorage.getItem('name')
function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    router.push("/login")
}
</script>
  