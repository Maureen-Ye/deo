<template>


  <el-main>

    <el-form>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入姓名" v-model="name">
            <template slot="prepend">姓名</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入登录账号" v-model="user">
            <template slot="prepend">登录账号</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="password">
            <template slot="prepend">登录密码</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="please_password">
            <template slot="prepend">确认密码</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="">
        <el-col :span="10">
          <label class="el-form-label">选择角色</label>
          <el-select v-model="role" placeholder="请选择">
            <el-option label="超级管理员" value="超级管理员"></el-option>
            <el-option label="系统管理员" value="系统管理员"></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="adminName">
            <template slot="prepend">管理员姓名</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="phone">
            <template slot="prepend">手机号码</template>
          </el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="状态">
        <label class=""></label>
        <el-radio v-model="state" label="可用" style="margin-left: 25px;">可用</el-radio>
        <el-radio v-model="state" label="冻结">冻结</el-radio>
      </el-form-item>

      <el-button type="info" @click="add">保存</el-button>
    </el-form>

  </el-main>


</template>

<script>
    import axios from 'axios';
    import router from "../router";

    export default {
        name: "addAdmin",
        data() {
            return {
                name:'',
                user:'',
                password:'',
                please_password:'',
                role:'',
                adminName:'',
                phone:'',
                state:''
            }},
        methods:{
            add(){
                axios.get("http://localhost:3000/zeng_jia_lie_biao?name="+this.name+"&phone="+this.phone+"&user="+this.user+"&password="+this.password+"&role="+this.role+"&state="+this.state).then(res => {
                    // this.tableData = res.data
                    console.log(res)
                    router.push("./adminList")
                })
            }
        }

    }
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
  }
</style>