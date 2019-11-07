<template>
  <div class="intime">
    <div class="top">
      <span>实时概况</span>
      <span>更新时间：2019-11-05 19:46:25</span>
      <span class="el-icon-refresh"></span>
      <span class="el-icon-view"></span>
      <span>编辑</span>
    </div>
    <div class="all">
      <div class="rigth" v-if='intimeList && intimeList[0]'>
        <ul v-for="(item,index) in intimeList[0].list1" :key='index'>
          <li v-text="item.title"></li>
          <li v-text="item.num"></li>
          <li v-text="item.yesterday"></li>
        </ul>       
      </div>
       <div class="left" v-if='intimeList && intimeList[0]'> 
        <ul v-for="(item,index) in intimeList[0].list2" :key="index">
          <li v-text="item.title"></li>
          <li v-text="item.num"></li> 
                         
        </ul>       
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
   computed:{
     ...mapState(['intimeList'])
   },
   mounted(){
     this.getIntimeList()
   },
   methods:{
     ...mapActions(['getIntimeList'])
   }
}
</script>
<style lang="scss" scoped>
.intime {
  width: 100%;
  height: 282px;
  background: white;
  .top {
    width: 996px;
    height: 22px;
    margin-left: 20px;
    padding: 20px;
    > span:nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
    > span:nth-child(2) {
      font-size: 14px;
      color: #969799;
      margin-left: 7px;
      font-weight: 400;
    }
    > span:nth-child(3),
    span:nth-child(4) {
      padding-left: 5px;
      color: #969799;
    }
    > span:nth-child(5) {
      display: inline-block;
      margin-left: 600px;
      font-size: 14px;
      color: rgba(21, 91, 212, 1);
    }
  }
  .all {
    width: 956px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    .rigth {
      width: 438px;
      height: 100%;
      border-right: 1px solid #cccccc;
      margin-left: 20px;
      ul {
        width: 50%;
        height: 50%;
        display: inline-block;
        li {
          margin-left: 20px;
          margin-top: 10px;
          &:nth-child(1) {
            font-size: 14px;
            color: #969799;
          }
          &:nth-child(2) {
            color: #333;
            font-size: 24px;
            font-weight: bolder;
          }
          &:nth-child(3) {
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
    .left {
      width: 438px;
      height: 200px;
      ul {
        width: 50%;
        height: 50%;
        display: inline-block;
        li {
          margin-top: 10px;
          &:nth-child(1) {
            font-size: 14px;
            color: #969799;
          }
           &:nth-child(2) {
            color: #333;
            font-size: 24px;
            font-weight: bolder;
          }
        }
      }
    }
  }
}
</style>>

