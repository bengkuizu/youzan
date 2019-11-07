<template>
  <div class="overview">
    <!-- 导航栏 -->
    <NavBar></NavBar>
    <el-container>
      <el-header>
        <!-- 头部 -->
        <Header></Header>
      </el-header>
      <el-container>
        <el-main>
          <!-- 实时概况 -->
          <InTime></InTime>
          <!-- 智能助手 -->
          <Helper></Helper>          
        </el-main>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Header from "./Header.vue";
import InTime from "./InTime.vue";
import Helper from "./Helper";
import Aside from "./Aside"

export default {
  components: {
    NavBar, //导航栏
    Header, //实时概况
    InTime, //实时概况
    Helper,//智能助手
    Aside
  }
}
</script>
<style lang="scss" scoped>
.overview {
  margin-left: 92px;
  .el-header,
  .el-footer {
    color: #333;
    text-align: center;
  }
  .el-aside {
    color: #333;
    text-align: center;
    overflow: hidden;
  }

  .el-main {
    overflow: hidden;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>