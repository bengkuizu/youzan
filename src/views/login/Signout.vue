<template>
    <div class="quit" @mouseenter="flag=!flag" @mouseleave="flag=!flag">
        <ul v-if="flag">
            <li>切换店铺</li>
            <li>有赞首页</li>
            <li>18598026798</li>
            <li @click='quitLogin'>退出登录</li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            flag:false
        }
    },
    methods:{
        quitLogin:function(){
            localStorage.setItem("isLogin","flase")
            this.$router.push('/login')
        },
        // home:function(){
        //     if(!(this.$router.currentRoute.path == '/home')){
        //         this.$router.push('/home')
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
    .quit{
        z-index: 9999999;
        width: 200px;
        height: 50px;
        border-radius:0;
        position: fixed;
        ul{
            background:#fff;
            color: #000;
            z-index: 9999999;
            position: fixed;
            top: 50px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            border-radius: 2px;
            li{
                width: 200px;
                box-sizing: border-box;
                padding: 13px 16px;
                font-size: 14px;
                line-height: 20px;
                cursor: pointer;
                &:hover{
                    background:#155BD4;
                    color: #fff;
                }
            }
        }
    }
</style>