<template>
    <div>
        <NavBar>
            <template v-slot:xxx>
                <!--  <template #header> 具名插槽可缩写形式 -->
                <div class="left">这是导航栏左边</div>
            </template>
            <template v-slot:yyy>
                <!--  <template #header> 具名插槽可缩写形式 -->
                <div class="right">这是导航栏的右边</div>
            </template>
        </NavBar>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <router-link class="list-group-item" to="/home">home</router-link>
                    <router-link class="list-group-item" to="/about/10">about</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <router-view></router-view>
            </div>
        </div>


    </div>
</template>
<script lang="ts" setup>
//导入NavBar
import NavBar from './components/NavBar/NavBar.vue';
</script>
<style scoped>
.left{
    float: left;
}
.right{
    float: right;
}
</style>
    