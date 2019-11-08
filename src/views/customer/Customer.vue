<template>
  <div class="all">
    <!-- <NavBar></NavBar> -->
    <MainCenter></MainCenter>
    <!-- <MainRight></MainRight> -->
    <Add></Add>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import MainCenter from "./MainCenter.vue";
import MainRight from "./MainRight.vue";
import Add from "./Add.vue";

export default {
  components: {
    NavBar,
    MainCenter,
    MainRight,
    Add
  }
};
</script>
<style lang="scss" scoped>
.all {
  background: #f7f8fa;
}
</style>