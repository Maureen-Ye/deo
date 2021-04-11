<template>

<el-main>

  <el-dialog title="修改" :visible.sync="dialogFormVisible">
    <el-form >
      <el-form-item label="管理员姓名" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="管理员电话" :label-width="formLabelWidth">
        <el-input v-model="phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="管理员账号" :label-width="formLabelWidth">
        <el-input v-model="user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="管理员密码" :label-width="formLabelWidth">
        <el-input v-model="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" :label-width="formLabelWidth">
        <el-input v-model="role" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-radio label="可用" v-model="state" style="margin-left: 25px;">可用</el-radio>
        <el-radio label="冻结" v-model="state" style="margin-left: 25px;">冻结</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="ti_jiao()">确 定</el-button>
    </div>
  </el-dialog>
</el-main>
</template>

<script>
  import axios from 'axios';
   // import router from "../router";

  export default {
    name: "updateList",
    data() {
      return {
        id:'',
        formLabelWidth: '100px',
        dialogTableVisible: false,
        dialogFormVisible: false,
        name: '',
        user: '',
        phone: '',
        password: '',
        please_password: '',
        role: '',
        adminName: '',
        state: ''
      }
    },
    mounted() {
      this.id=this.$route.params.id
      console.log(this.id)
      this.xiu_gai()
    },
    methods: {
      xiu_gai() {
        this.dialogFormVisible = true;
        // axios.get("http://localhost:3000/xiu_gai_lie_biao?name=" + this.name + "&phone=" + this.phone + "&user=" + this.user + "&password=" + this.password + "&role=" + this.role + "&state=" + this.state).then(res => {
        //   this.tableData = res.data
        //   console.log(res)
        //   router.push("./adminList")
        // })
        axios.get(`http://localhost:3000/xiu_gai_lie_biao/${this.id}`).then(res => {
          console.log(res.data);
          if (res.statusText === 'OK') {
            this.name = res.data[0].name
            this.phone = res.data[0].phone
            this.user = res.data[0].user
            this.password = res.data[0].password
            this.role = res.data[0].role
            this.state = res.data[0].state
          }
        })
      },
      ti_jiao() {
        this.$confirm('此操作将修改文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
          console.log(res)
          axios.get(`http://localhost:3000/updateList/${this.id}/${this.name}/${this.phone}/${this.user}/${this.password}/${this.role}/${this.state}`)
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          this.dialogFormVisible = false
          this.$router.push('/adminList')
        }).catch(err => {
          console.log(err)
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        })
      }
    }

  }
</script>

<style scoped>

</style>