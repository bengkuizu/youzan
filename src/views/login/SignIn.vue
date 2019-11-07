<template>
  <div class="sign">
    <el-input v-model="user" placeholder="请输入用户名/手机号"></el-input>
    <input type="password" placeholder="请输入密码" v-model="pw"/>
      <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      input: "",
      user:'',
      pw:''
    };
  },
  computed:{
      ...mapState(['userInfo'])
  },
  methods:{
      login:function(){
          console.log(this.router)
          if(this.userInfo.name == this.user && this.userInfo.pw == this.pw){
              localStorage.setItem('isLogin','true')
              this.$router.push('/')
          }else{
              alert('密码错误')
          }
      }
  }
};
</script>
<style lang="scss" scoped>
.sign {
  width: 100%;
  height: 280px;
  .el-input {
    width: 90%;
    margin-top: 30px;
  }
  .el-button{
      width: 90%;
    margin-top: 30px;
  }
  input {
    display: block;
    width: 90%;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background: white;
    margin-top: 30px;
    color:rgba(220,223,230,1);
   
  }
  ::-webkit-input-placeholder{
    color:rgba(192,196,204,1);
  }
}
</style>