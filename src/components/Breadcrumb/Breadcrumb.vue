<template>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </template>
  
  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import {useRoute} from 'vue-router'
let route=useRoute()
console.log(route,'route')
  </script>
  