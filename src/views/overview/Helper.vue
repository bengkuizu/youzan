<template>
  <div class="helper">
    <div class="helper_left">
      <h2>智能助手</h2>
      <div class="schedule">
        <el-progress type="circle" :percentage="15"></el-progress>
        <el-row style="margin-top:20px">
          <el-button type="primary">去处理</el-button>
        </el-row>
      </div>
    </div>
    <div class="helper_rigth">
     <!-- 动态组件 -->
     <Dynamic></Dynamic>
    </div>
  </div>
</template>
<script>
import Dynamic from "./Dynamic.vue"
export default {
    components:{
      Dynamic  //动态组件
    }
};
</script>
<style lang="scss" scoped>
.helper {
  width: 100%;
  height: 340px;
  margin-top: 15px;
  padding-right: 50px;
  background: white;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .helper_left {
    width: 233px;
    margin: 30px 0 0 30px;
    > h2 {
      font-size: 16px;
      font-weight: 900;
      color: #323233;
      margin-left: -120px;
    }
    .schedule {
      width: 144px;
      height: 144px;
      margin-top: 30px;
    }
  }
  .helper_rigth {
    width: 700px;
    height: 300px; 
    margin-top: 20px;
  }
}
</style>