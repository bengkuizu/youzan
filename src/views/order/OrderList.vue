<template>
    <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
    <el-tab-pane label="全部" name="first"></el-tab-pane>
    <el-tab-pane label="待付款" name="second"></el-tab-pane>
    <el-tab-pane label="待发货" name="third"></el-tab-pane>
    <el-tab-pane label="已发货偿" name="fourth"></el-tab-pane>
    <el-tab-pane label="已完成" name="fifth"></el-tab-pane>
    <el-tab-pane label="已关闭" name="sixth"></el-tab-pane>
    <el-tab-pane label="退款中" name="seventh"></el-tab-pane>
    </el-tabs>
    
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>

</style>