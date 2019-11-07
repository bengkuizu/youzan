<template>
    <div class="cut">
        <el-container>
            <el-aside width="90px">
                <NavBar></NavBar>
                <!-- 左边 -->
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 头部 -->
                    <CutHeader></CutHeader>
                </el-header>
                <el-main>
                    <!-- 内容 -->
                    <CutMain></CutMain>
                    <!-- 商品列表 -->
                    <CutList></CutList>
                </el-main>
            </el-container>
        </el-container>


    </div>
</template>
<script>
import CutMain from './CutMain.vue'
import NavBar from '@/components/NavBar.vue'
import CutHeader from './CutHeader.vue'
import CutList from './CutList.vue'
export default {
    data() {
      return {
        
      };
    },
    components:{
        CutMain,
         NavBar,
         CutHeader,
         CutList,
    },

}
</script>
<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .cut{
    min-width: 1200px;
  }
  
</style>