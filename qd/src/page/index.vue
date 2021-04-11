<template>
  <el-container>
    <el-header>
      <el-menu
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="1">新闻后台管理系统</el-menu-item>
      </el-menu>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理员设置</span>
            </template>
            <el-menu-item-group>
              <router-link to="/adminList">
                <el-menu-item index="1-1">
                  管理员列表
                </el-menu-item>
              </router-link>
                <router-link to="/roleList">
                  <el-menu-item index="1-2">
                  角色列表
                </el-menu-item>
                </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>新闻管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/newsType">
                <el-menu-item index="2-1">新闻类型</el-menu-item>
              </router-link>
              <router-link to="/newsList">
                <el-menu-item index="2-2">新闻列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>


      <el-main>

        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>


</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-aside {
    background: #545c64;
    height: 100vh;
  }

  .el-aside .el-menu {
    border-right: none;
  }
</style>