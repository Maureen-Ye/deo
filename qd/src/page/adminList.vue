<template>
  <div>
    <el-button type="primary">
      <router-link to="./addAdmin">添加管理员</router-link>
    </el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="phone" label="手机"/>
      <el-table-column prop="user" label="用户名"/>
      <el-table-column prop="password" label="密码"/>
      <el-table-column prop="role" label="管理员角色"/>
      <el-table-column prop="state" label="状态"/>
      <el-table-column label="管理" width="170px">
        <template v-slot="btt">
          <el-button type="primary" @click="xiu_gai(btt.row.id)" icon="el-icon-edit"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="shan_chu(btt.row.id)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import router from "../router";

  export default {
    name: "adminList",
    data() {
      return {
        tableData: [],
      }
    },
    mounted() {
      this.getAdminList()
    },
    methods: {
      getAdminList() {
        axios.get("http://localhost:3000/guan_li_yuan_lie_biao").then(res => {
          // this.tableData = res.data
          this.$set(this, "tableData", res.data);
        })
      },
      shan_chu(id) {
        axios.get(`http://localhost:3000/shan_chu_lie_biao/${id}`).then(res => {
          if (res.statusText === 'OK') {
            this.$message.success('删除成功')
            this.getAdminList()
          }
        })
        console.log(id)
      },
      xiu_gai(id) {
        console.log(id)

        this.dialogFormVisible = true

        router.push(`./updateList/${id}`)
      }
    }

  }
</script>

<style scoped>

</style>