<template>
  <div>
    <el-container>
      <el-aside width="92px">
        <NavBar></NavBar>
      </el-aside>
      <el-main>
        <span>订单查询</span>
        <!-- 框框一堆 -->
        <OrderSeacher></OrderSeacher>
        <!-- 表格一个 -->
        <OrderList></OrderList>
      </el-main>
      <!-- 右侧边 -->
      <el-aside width="92px">帮助</el-aside>
    </el-container>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import OrderSeacher from "./OrderSeacher.vue";
import OrderList from "./OrderList.vue";
export default {
  components: {
    NavBar,
    OrderSeacher,
    OrderList
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  .el-main {
    color: #333;
    width: 975px;
    min-height: 900px;
    background-color: #f7f8fa;
    span {
      font-size: 14px;
      line-height: 56px;
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
      margin: 0 8px;
    }
  }

  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>