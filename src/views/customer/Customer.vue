<template>
    <div class="all">
    
    <NavBar></NavBar>
	<MainCenter></MainCenter>
    <MainRight></MainRight>
    <Add></Add>
    <MessAge></MessAge>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
import MainCenter from './MainCenter.vue'
import MainRight from './MainRight.vue'
import MessAge from './MessAge.vue'

export default {
    components:{
        NavBar,
        MainCenter,
        MainRight,
        Add,
		MessAge
    }
}
</script>
<style lang="scss" scoped>
.all{
	background: #f7f8fa;
}
</style>