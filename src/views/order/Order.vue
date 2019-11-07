<template>
    <div>
        <el-container>
         <el-aside width="92px">
           <NavBar></NavBar>
         </el-aside>
          <el-main>
            <span>订单查询</span>
            <OrderSeacher></OrderSeacher>
            <OrderList></OrderList>
          </el-main>
          <el-aside width="92px">Aside</el-aside>
        </el-container>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import OrderSeacher from "./OrderSeacher.vue";
import OrderList from "./OrderList.vue";
export default {
  components:{
    NavBar,
    OrderSeacher,
    OrderList
  }
};
</script>
<style lang="scss" scoped>
.el-container{
.el-main {
  color: #333;
  width: 975px;
  background-color: #f7f8fa;
  span{
    font-size: 14px;
    line-height:56px;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    margin: 0 8px;
  }
}

.el-aside {
  background-color:#000;
  color: #333;
  text-align: center;
  line-height: 200px;
}
}
</style>