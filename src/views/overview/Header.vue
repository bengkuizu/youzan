<template>
  <div class="header">
    <div class="header_left">
      <span>我的天</span>
      <span class="on">试用期</span>
      <span>SVIP</span>
      <span>有赞担保</span>
    </div>
    <div class="header_right">
      <span class="el-icon-wind-power"></span>
      <span class="el-icon-s-custom"></span>
      <span>18598026798</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  width:100%;
  height: 56px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_left {
 
     cursor: pointer;
    margin-left: 20px;
    > span:nth-child(1) {
      color: #323232;
      font-size: 20px;
      font-weight: 700;
    }
    >span:nth-child(2),
    span:nth-child(3),
    span:nth-child(4) {
      display: inline-block;
      height: 20px;
      border: 1px solid #cccccc;
      font-size: 12px;
      line-height: 20px;
      margin-left: 10px;
      padding: 0 3px;
      border-radius: 3px;
    }
    span.on {
      color: #155bd4;
      border: 1px solid #155bd4;
    }
  }
  .header_right {
    width: 200px;
    height: 30px;
    >span:nth-child(1){
      font-size:24px;
    }
     >span:nth-child(2){
      font-size:18px;
      display: inline-block;
      padding-left: 50px;
    }
    >span:nth-child(3){
      font-size: 14px;padding-left: 10px;
    }
  }
}
</style>