<template>
    <div class="aside">
        <div class="pic">
           <img src="https://img.yzcdn.cn/upload_files/2019/11/05/FsXtsnrT7NdUs9OmCWwOuDClsP2_.png" srcset="https://img.yzcdn.cn/upload_files/2019/11/05/Fi7qTB03SZ6et8qW6Cy0kMar-S4x.png 2x" alt="海景房">
        </div>
        <div class="online">
            <div class="el-icon-service"></div>
            <div>
                <span>在线客服</span>
                <span>电话：1234-5678-7890</span>
            </div>
        </div>
        <div class="online">
            <div class="el-icon-ship"></div>
            <div>
                <span>桌面在线客服</span>
                <span>即时应答客户在线咨询</span>
            </div>
        </div>
        <div class="ram">
            <h1>产品动态</h1> 
            <p>更多</p>
            <ul v-for="(item,index) in ramList " :key="index">
                <li><span v-text="item.date">10/31</span> <span v-text="item.content">个性化推荐商品功能优化</span></li>
           
            </ul>

        </div>
    </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
  computed:{
    ...mapState(['ramList'])
  },
  mounted(){

    this.getRam()
  },
  methods:{
    ...mapActions(['getRam'])
  }
}
</script>
<style lang="scss" scoped>
.aside{
    width: 200px;
    height: 100%;
    .pic{
        width: 231px;
        height: 154px;
    }
    .online{
        width: 240px;
        height: 79px;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        background: white;
        margin: 20px 0 0 0;
        >div:nth-child(1){
          overflow: hidden;
            font-size: 44px;
            margin: 20px 0 0 10px;
        }
        >div:nth-child(2){
           >span:nth-child(1),>span:nth-child(2){
               font-size: 12px;
               display: block;
               margin:15px 50px 0 0;
           }
        }
    }
    .ram{
        width: 200px;
        height: 196px;
        background: white;        
        margin: 10px 0;
        >h1{
            font-size: 14px;            
            float: left;
            padding: 10px 10px;
    
        }
        >p{
           font-size: 14px;
            padding: 10px 0 0 80px;    
        }
        ul{
            margin: 10px 0 0 0;
            overflow: hidden;
             li{
            font-size: 12px;
            padding: 5px 10px;
            display: flex;
            justify-content: flex-start;

        }
        }
    }
}
</style>