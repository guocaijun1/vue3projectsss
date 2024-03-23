<template>
<div class="row">
  <div class="col-xs-12"><PageHeader v-if="!route.meta.nodemenu"/></div>
</div>
<div class="row">
  <div class="col-xs-2"></div>
  <div class="col-xs-6"><Breadcrumb v-if="!route.meta.nodemenu"/></div>
</div>
<div class="row">
  <div class="col-xs-2"><Menu v-if="!route.meta.nodemenu"/></div>
  <div class="col-xs-offset-1 col-xs-6">
    <router-view></router-view>
  </div>
</div>

<hr>



</template>
<script setup lang="ts">
import Menu from './components/Menu/Menu.vue'
import PageHeader from './components/PageHeader/PageHeader.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
let route=useRoute()
// console.log(route,'route')
onMounted(()=>{
  console.log(route)
})
</script>
<style scoped>
</style>