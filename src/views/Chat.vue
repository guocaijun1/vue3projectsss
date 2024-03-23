<template>
    <div class="common-layout">
        <el-container>
            <el-header></el-header>
            <el-main>
                <p></p>

                <div class="media" v-for="(item,index) in frommsgs" :key="index">
                    <div class="media-body text-right">
                        <h4 class="media-heading">me</h4>
                        {{item.content}}
                    </div>
                    <div class="media-right">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xOGUzNjgzODJlNiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE4ZTM2ODM4MmU2Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzUyMTg1ODIxNTMzMiIgeT0iMzYuNTU5OTk5OTQyNzc5NTQiPjY0eDY0PC90ZXh0PjwvZz48L2c+PC9zdmc+"
                                data-holder-rendered="true" style="width: 64px; height: 64px;">
                        </a>
                    </div>
                </div>
                <p></p>
                <div class="media" v-for="(item,index) in tomsgs" :key="index">
                    <div class="media-left">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xOGUzNjgzMzUxNCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE4ZTM2ODMzNTE0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzUyMTg1ODIxNTMzMiIgeT0iMzYuNTU5OTk5OTQyNzc5NTQiPjY0eDY0PC90ZXh0PjwvZz48L2c+PC9zdmc+"
                                data-holder-rendered="true" style="width: 64px; height: 64px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">小度</h4>
                        {{item.content}}
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
    <el-input v-model="message" style="width: 600px" placeholder="请输入消息" />
    <el-button @click="sendmsg">发送消息</el-button>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
let message = ref('')
//发的消息
let frommsgs = reactive([])
//接受得消息
let tomsgs = reactive([])
//连接socket
const sendmsg = () => {
    let o = { name: '小宏', content: message.value }
    //向服务端发送消息
    socket.emit('msg', o)
    frommsgs.push(o)
    //接受服务端发送的消息
    message.value=""

}

onMounted(() => {
    socket.on('news', (data) => {
        // console.log(data,'server send msg')
        tomsgs.push(data)
    })
})

</script>
<style scoped>
.common-layout {
    width: 800px;
    height: 600px;
    background-color: #ccc;
    /* text-align: center; */
}

.right {
    float: right;
}</style>
  