<template>
  <div class="dynamic">
    <el-tabs type="border-card" stretch='	false'>
      <el-tab-pane label="全部事项">
        <div class="oder">
          <div class="oder_top">
           <div v-for="(item,index) in orderList" :key="index">
              <span v-text="item.title"></span>
              <i v-text="item.num"></i>                     
          </div> 
          </div>       
        </div>
        <div class="bootom"> 
          <div v-for="(item,index) in srollList" :key="index">      
              <span class="el-icon-mic"></span>
              <span v-text="item.title"></span>
              <span v-text="item.content"></span>
              <span  v-text="item.creation"></span>
         </div> 
        </div>
      </el-tab-pane>
      <el-tab-pane label="店铺基础">
        <div class="bootom"> 
          <div v-for="(item,index) in srollList" :key="index">      
              <span class="el-icon-mic"></span>
              <span v-text="item.title"></span>
              <span v-text="item.content"></span>
              <span  v-text="item.creation"></span>
         </div> 
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品体验">
        <div class="experience">
          <span class="el-icon-mic"></span>
          <span>分销市场补充货源</span>
          <span>丰富商品品类可更好的拓展获客渠道</span>
          <span>立即创建</span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="物流体验">
        <div class="all">
          <div class="top">
            <span class="el-icon-orange">你已完成物流体验的所有任务</span>
            <p>看推荐资讯，助力店铺经营</p>
          </div>
          <div class="down">
            <div class="dowm_left">
                <p>少林弟子弃武从商：借40万创业</p>
                <p>立即查看 <span class="el-icon-tableware"></span></p>
              
            </div>
             <div class="dowm_left">
                <p>少林弟子弃武从商：借40万创业</p>
                <p>立即查看 <span class="el-icon-tableware"></span></p>
              
            </div>
             <div class="dowm_left">
                <p>少林弟子弃武从商：借40万创业</p>
                <p>立即查看 <span class="el-icon-tableware"></span></p>
              
            </div>
              <div class="dowm_right">
                  <p>更多内容</p>
                  <span>...</span>
              </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="售后体验">售后体验</el-tab-pane>
      <el-tab-pane label="服务体验">服务体验</el-tab-pane>
      <el-tab-pane label="流量体验">流量体验</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['orderList','srollList'])
  },
  mounted(){
    this.getOrderList()
    this.getScrollList()
  },
  methods:{
    ...mapActions(['getOrderList','getScrollList'])
  }
}
</script>
<style lang="scss" scoped>
.dynamic {
  width: 760px;
  height: 300px;
  .el-tabs {
    width: 720px;
    height: 100%;
    overflow:auto;
    .oder {
      width: 710px;
      height: 88px;
      background: rgba(247, 248, 250, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow: hidden;
      .oder_top{
         width: 700px;
         height: 150px;
        >div{ 
        padding: 15px 50px;
        float: left;
          > i {
            padding-left: 10px;
            font-weight: bolder;
            color: red;
          }
        }      
      }
    }
    .bootom {
      width: 700px;
      height: 140px;
      margin-top: 10px; 
     >div{
       display: flex;
       justify-content:flex-start ;
       font-size: 13px;
         >span:nth-child(1){
         font-size: 18px;
       }
       >span:nth-child(2){
          padding:0 10px;
       }
       >span:nth-child(3){
         color: #CCCC;
        padding:0 20px;
       }
       >span:nth-child(4){
         color:rgba(33,160,255,1);
         padding:0 20px;
       }
     }
    }
    .experience {
      width: 700px;
      height: 100px;
      margin-left: -30px;
      > span:nth-child(2) {
        display: inline-block;
        margin-left: 10px;
      }
      > span:nth-child(3) {
        display: inline-block;
        margin-left: 50px;
        color: #969799;
      }
      > span:nth-child(4) {
        display: inline-block;
        margin-left: 70px;
        color:rgba(33,160,255,1);
      }
    }
    .all {
      width: 700px;
      height: 230px;
      .top {
        width: 100%;
        height: 100px;
        > span {
          display: inline-block;
          margin-top: 20px;
        }
        > p {
          margin-top: 10px;
        }
      }
      .down {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .dowm_left {
          width: 194px;
          height: 116px;
            border: 1px solid #CCCC;
          >p:nth-child(1){
               width: 150px;
               margin: 10px 0 0 10px;
            }
            >p:nth-child(2){
                margin:20px 0 0 10px;
                color: rgba(171,233,255,1);
                >span{
                    display: inline-block;
                    margin-left: 20px;
                    font-size: 40px;
                    color: #cccccc;
                }
            }
            
        }
        .dowm_right{
            width: 90px;
            height: 118px;
            border: 1px solid #CCCC;
           p{
               margin-top: 30px;
           }
        }
      }
    }
  }
}
</style>