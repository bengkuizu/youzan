<template>
  <div class="cut_choose">
    <div class="cut_choose_main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售中" name="first" ></el-tab-pane>
        <el-tab-pane label="已售罄" name="second" ></el-tab-pane>
        <el-tab-pane label="仓库中" name="third" ></el-tab-pane>
      </el-tabs>
    </div>
    <el-button type="primary" @click="cutaddClick">发布商品</el-button>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="140px">
      <el-row type="flex">
        <el-col :span="8">
          <el-form-item label="商品名称或编码:">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="商品分组:">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="商品类型:">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex"   >
        <el-col :span="8">
          <el-form-item label="总销量: ">
            <el-col :span="11" style="width:100px">
              <el-input v-model="formInline.cccccc"></el-input>
            </el-col>
            <el-col :span="2" style="width:10px">
              <span>-</span>
            </el-col>
            <el-col :span="11" style="width:100px">
              <el-input v-model="formInline.cccccc"></el-input>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="价格: ">
            <el-col :span="11" style="width:100px">
              <el-input v-model="formInline.dddddd"></el-input>
            </el-col>
            <el-col :span="2" style="width:10px">
              <span>-</span>
            </el-col>
            <el-col :span="11" style="width:100px">
              <el-input v-model="formInline.dddddd"></el-input>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="库存扣减方式:">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>


    </el-form>

    <div class="cut_choose_screen">
        <el-button type="primary" @click="btnScreen">筛选</el-button>
        <el-button plain>导出报表</el-button>
        <el-link type="primary" class='examine'>查看已生成报表</el-link>
        <el-link type="primary" class='examine'>清空筛选条件</el-link>
    </div>

  </div>
</template>
<script>

import {mapMutations} from 'vuex'
// import bus from '@/assets/Bus.js' //引入bus总线
export default {
  data() {
    return {
      activeName: "first",
      formInline: {
        user: "",
        region: "",
        cccccc:"",
        dddddd:""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      input: ""
    };
  },

  methods: {
    ...mapMutations(['updateAdd','updateScreen','updateCutListArr']),
    handleClick(tab, event) {
      console.log(tab, event);
      this.updateCutListArr({index:tab.index})
      // bus.$emit('getindex',tab.index)
      // console.log(this.$bus)
      // console.log({index:tab.index})
    },
    // ccccc(){
    //   bus.$emit('getindex','tab.index')
    // },
    onSubmit() {
      console.log("submit!");
    },
    cutaddClick(){
      console.log(1)
      let sss = {
                "img": "https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png?imageView2/2/w/120/h/120/q/75/format/webp",
                "commodity": "衣服",
                "price":120,
                "Visits":100,
                "Views":80,
                "inventory":79,
                "gross_sales":343,
                "data":"2019-11-04 19:38:07",
                "id":0,
                "state":1
      }
      this.updateAdd(sss)
    },
    // 筛选
    btnScreen(){
      // console.log(this.formInline.user)
      this.updateScreen({id:this.formInline.user})
    },
    mounted(){
      console.log(1)
      console.log('=====', this.$bus)
      this.btnScreen()
      
    }
    
  }
};
</script>
<style lang="scss" scoped>
.cut_choose {
  .cut_choose_main {
    height: 50px;
    // border: red 1px solid;
    overflow: hidden;
  }
  .cut_choose_screen{
    margin-left:140px; 
      .examine{
        margin-left:10px; 
      }
  }
}
</style>
