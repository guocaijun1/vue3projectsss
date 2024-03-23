<template>
  <h1>这是About路由组件 参数为:{{id}}</h1>
  <button @click="back">回退</button>
</template>
<script lang="ts" setup>
import {useRoute,useRouter} from 'vue-router'
let route=useRoute()
let router=useRouter()
let id=route.params.id
function back(){
router.back()
}
</script>
<style scoped>

</style>
