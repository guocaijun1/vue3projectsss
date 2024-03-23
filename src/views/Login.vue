<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="用户名">
        <el-input type="text" v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pass" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive } from 'vue'
  import {useRouter} from 'vue-router'
  import { ElMessage } from 'element-plus'
  //导入登录接口
  import {login} from '../api/login/login'
  import {getrbac} from '../api/user/user'

  let router=useRouter()
  // do not use same name with ref
  const form = reactive({
    name: '',
    pass:''
  })
  
  const onSubmit = async() => {
    // console.log('submit!')
    //获取用户名和密码
    console.log(form.name,form.pass)
    let res=await login({name:form.name,pass:form.pass})
    // console.log(res,'resss')
    if(res.msg=="ok"){
        //把登录的名字及token存放在本地
        localStorage.setItem('token',res.token)
        localStorage.setItem('name',form.name)
        //调用接口获取登录用户的权限信息
        let ress=await getrbac({id:res.id})
        // console.log(ress,'ress')
        //存入本地
        localStorage.setItem('rabc',JSON.stringify(ress))

        router.push('/')
    }else{
        ElMessage.error('用户名和密码有误，请重新登录')
    }
  }
  </script>
  