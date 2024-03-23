<template>
  <el-button type="primary" @click="dialogVisible = true">新增用户</el-button>
  <el-dialog v-model="dialogVisible" title="增加用户" width="500" :before-close="handleClose">
    <el-form :model="form" label-width="auto" style="max-width: 600px" border="1px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" type="text" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" type="text" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.isdel" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onsubmit">
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="序号" width="100" />
    <el-table-column prop="name" label="名字" width="180" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="des" label="状态"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button v-if="scope.row.isdel === 0" @click="disable(scope.row)">停用</el-button>
        <el-button v-else>启用</el-button>

        <el-button type="primary" size="small" @click.prevent="deleteRow(scope.row)" v-if="scope.row.isdel === 1" disabled>
          删除
        </el-button>
        <el-button type="primary" size="small" @click.prevent="deleteRow(scope.row)" v-else>
          删除
        </el-button>

      </template>
      <!-- <el-button @click="del">删除</el-button> -->
    </el-table-column>

  </el-table>
</template>

<script lang="ts" setup>
//调用接口
import { getusers, deluser, userdisable,addusers } from '../api/user/user'
import { onMounted, reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// import { on } from 'events';
let tableData = ref('')
onMounted(() => {
  getallusers()

})
//获取列表数据
async function getallusers() {
  let res = await getusers()
  console.log(res)
  tableData.value = res
  console.log(tableData, 'tableData')
}
const deleteRow = async (row: any) => {
  // console.log(row)
  // tableData.value.splice(index, 1)
  var id = row.id
  let res = await deluser({ id: id })
  if (res.msg === "ok") {
    ElMessage({
      message: '删除成功',
      type: 'success',
    })
    getallusers()
  }
}
//停用
const disable = async (row: any) => {
  // console.log(row)
  // tableData.value.splice(index, 1)
  var id = row.id
  let res = await userdisable({ id: id })
  if (res.msg === "ok") {
    ElMessage({
      message: '停用成功',
      type: 'success',
    })
    getallusers()
  }
}
//增加
const dialogVisible = ref(false)
const form=reactive({
  name:'',
  phone:'',
  isdel:false
})
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('你确定退出吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
//执行添加
async function onsubmit(){
  // console.log(form.name,form.phone,form.isdel)
  let name=form.name;
  let phone=form.phone
  let isdel:any=form.isdel
  if(isdel){
    isdel=1
    var des="停用"
  }else{
    isdel=0
    var des="可用"
  }
  console.log(name,phone,isdel,des)
  let res=await addusers({name:name,phone:phone,isdel:isdel,des:des})
  if(res.msg==="ok"){
    ElMessage({
      message: '添加成功',
      type: 'success',
    })
    getallusers()
    dialogVisible.value=false
  }


}
</script>
<style scoped>
::v-deep .el-input__wrapper {
  box-shadow: 0 0 0 0
}
</style>
