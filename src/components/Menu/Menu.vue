<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">展开</el-radio-button>
      <el-radio-button :value="true">折叠</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <el-menu-item index="1" v-for="(item,index) in rbacs" :key="index">
        <el-icon><document /></el-icon>
        <template #title><router-link :to="item.path">{{item.name}}</router-link></template>
      </el-menu-item>
      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title><router-link to="/users">用户管理</router-link></template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title><router-link to="/chats">用户聊天</router-link></template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item> -->
    </el-menu>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  let rbacs=JSON.parse(localStorage.getItem('rabc'))
// console.log(rbacs,'rbacs')
  const isCollapse = ref(true)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>