<template>
  <div id="dd">
    <div id="dd1">1</div>
    <div id="dd2">
      <li v-for="(item,index) in datas" :key="index">姓名:{{item.name}},年龄:{{item.age}}</li>
    </div>
    <div id="dd3">
      <Card>
      <template v-slot:card>
        <div id="dd31">
        卡片1
      </div>
      </template>
    </Card>
      <!-- <div id="dd32">
            卡片2
        </div>
        <div id="dd33">
            卡片3
        </div>
        <div id="dd34">
            卡片4
        </div> -->
    </div>
    <div id="dd4">4</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import Card from '../components/Card/Card.vue'
let datas = reactive([])
//创建虚拟数据
onMounted(() => {
  //创建模拟数据
  // 虚拟列表是对长列表的一种优化方案。在前端开发中，会碰到一些不能使用分页方式来加载列表数据的业务形态，我们称这种列表叫做长列表。比如，手机端，淘宝商品展示，美团外卖等，数据量特别庞大，不适合分页，以及懒加载，这时候我们可以采用虚拟列表，只展示可视区域数据
  let data = [];
  for (let i = 0; i < 4; i++) {
    data.push({ name: `小明${i}`, age: 10 })
  }
  datas = [...data];
})
</script>
<style scoped>
#dd {
  width: 100%;
  height: 600px;
}

#dd1 {
  width: 50%;
  height: 50%;
  background-color: #f00;
  float: left;
}

#dd2 {
  width: 50%;
  height: 50%;
  background-color: blue;
  float: left;
}

#dd3 {
  width: 50%;
  height: 50%;
  background-color: green;
  float: left;
}

#dd3 #dd31 {
  width: 50%;
  height: 50%;
  background-color: orange;
  float: left;
}

#dd3 #dd32 {
  width: 50%;
  height: 50%;
  background-color: yellow;
  float: left;
}

#dd3 #dd33 {
  width: 50%;
  height: 50%;
  background-color: gray;
  float: left;
}

#dd3 #dd33 {
  width: 50%;
  height: 50%;
  background-color: #ccc;
  float: left;
}

#dd4 {
  width: 50%;
  height: 50%;
  background-color: pink;
  float: left;
}</style>
