<template>
  <div class="app">
    <div class="container">
      <div class="header">
        <div class="logo">
          <span class="iconfont">&#xe61f;</span>
          <span>有赞</span>
          <span>|</span>
          <span>登录</span>
        </div>
      </div>
      <div class="content-wrap">
        <div class="inner-left">
          <!-- 登入盒子 -->
        <div class="box">
           <div class="head">
              <ul>
                <li>密码登录</li>
                <li>|</li>
                <li>验证码登录</li>
                <li>扫码登录</li>
                <li>
                  <img src="//b.yzcdn.cn/wsc-pc-account/images/qrcode@2x.png" />
                </li>
              </ul>
            </div>  
            <!-- 组件 -->
            <SignIn></SignIn>    
        </div>
          <!-- 登入盒子 -->
        </div>
        <div class="inner-right">
          <img src="//b.yzcdn.cn/public_files/1e97c2268d18bd0231fb5b0a512b8d7f.png" />
        </div>
      </div>
      <div class="footer">
        <p>© 2012 - 2019 Youzan.com</p>
      </div>
    </div>
  </div>
</template>
<script>
import SignIn from './SignIn.vue'
export default {
 components:{
   SignIn
 }
};
</script>
<style lang="scss" scoped>
.container {
  width: 900px;
  margin: 0 auto;
  .header {
    width: 100%;
    height: 96px;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    background: #fff;
    .logo {
      width: 100%;
      height: 24px;
      margin-top: 55px;

      > span:nth-child(1) {
        font-size: 30px;
      }
      > span:nth-child(2) {
        font-size: 20px;
        display: inline-block;
        padding-left: 5px;
      }
      > span:nth-child(3) {
        font-size: 20px;
        color: #e5e5e5;
        display: inline-block;
        padding: 0 8px;
      }
    }
  }
  .content-wrap {
    width: 100%;
    height: 404px;
    margin-top: 40px;
    .inner-left {
      width: 500px;
      height: 364px;
      float: left;
   
      //   登入盒子
       .box {
        width: 410px;
        height: 360px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.08);
        margin: 2px 20px;
        box-sizing: border-box;
        padding: 15px;
          .head {
          width: 380px;
          height: 60px;
          ul {
            li {
              float: left;
              margin-top: 15px;
              &:nth-child(1) {
                font-weight: bold;
                font-size: 18px;
                line-height: 35px;
              }
              &:nth-child(2) {
                font-size: 18px;
                padding: 0 10px;
                color: rgba(159, 161, 159, 1);
                line-height: 35px;
              }
              &:nth-child(3) {
                font-size: 18px;
                color: rgba(159, 161, 159, 1);
                line-height: 35px;
              }
              &:nth-child(4) {
                color: #38f;
                border: 1px solid #38f;
                font-size: 12px;
                padding: 6px 8px;
                margin-left: 80px;
                background: rgba(229, 240, 255, 1);
              }
              &:nth-child(5) {
                float: right;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
            }
          }
        }
       }
      //   登入盒子
    }
    .inner-right {
      width: 400px;
      height: 333px;
      float: left;
      img {
        width: 380px;
        height: 307px;
      }
    }
  }
  .footer {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    p {
      color: rgba(153, 153, 153, 1);
      font-size: 12px;
    }
  }
}
</style>