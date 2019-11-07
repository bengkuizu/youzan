<template>
  <div class="cut_List">
    <el-table
      ref="multipleTable"
      :data="hzxapply"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'price inventory', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <!-- 商品 -->
      <el-table-column label="商品" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.img" />
        </template>
      </el-table-column>

      <!-- 价格 -->
      <el-table-column label="价格" width="120" sortable prop="price">
        <template slot-scope="scope">
          <div v-text="scope.row.commodity"></div>
          <div v-text="scope.row.price"></div>
        </template>
      </el-table-column>
      <!-- 访问量 -->
      <el-table-column prop="name" label="访问量" width="120">
        <template slot-scope="scope">
          <div v-text="'访问量:'+scope.row.Visits"></div>
          <div v-text="'浏览量:'+scope.row.Views"></div>
        </template>
      </el-table-column>
      <!-- 库存 -->
      <el-table-column label="库存" width="120" sortable prop="inventory">
        <template slot-scope="scope">{{ scope.row.inventory }}</template>
      </el-table-column>
      <!-- 总销量 -->
      <el-table-column prop="name" label="总销量" width="120">
        <template slot-scope="scope">{{ scope.row.gross_sales }}</template>
      </el-table-column>
      <!-- 创建时间 -->
      <el-table-column prop="name" label="创建时间" width="120" sortable>
        <template slot-scope="scope">{{ scope.row.data }}</template>
      </el-table-column>
      <!-- 序号 -->
      <el-table-column prop="name" label="序号" width="120" sortable>
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px" class="bottom">
      <div>
        <span @click="toggleSelection([tableData[1], tableData[2]])">当面全选</span>
        <el-button plain>改分组</el-button>
        <el-button plain>下架</el-button>
        <el-button plain @click="delClick">删除</el-button>
        <el-button plain>批量设置</el-button>
      </div>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="10"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions,mapMutations } from "vuex";
// import bus from '@/assets/Bus.js' 
export default {
  data() {
    return {
      multipleSelection: [],
      num: 1,
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      cccc:''
    };
  },
  computed: {
    ...mapState(["hzxapply"])
  },
  mounted() {
    this.getCutList();
 
  },
  // created(){
  //   // let that = this
  //   bus.$on('getindex',function(index){//监听
  //     // that.cccc = index
  //     console.log(index)
  //   })
  // },
  methods: {
    ...mapActions(["getCutList"]),
    ...mapMutations(["updateCutListArr","updateCutDel"]),
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
      // this.updateCutDel(this.multipleSelection)
    },
    delClick(){
      this.updateCutDel(this.multipleSelection)
    },
    handleClick(row) {
      console.log(row);
    },
    handleChange(value) {
      console.log(value);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      //传递页码时需要把下标传过去，否则会有bug
      this.updateCutListArr({page:val, index:0})
    },
    
    }
    
  
};
</script>
<style lang="scss" scoped>
.cut_List {
  margin-top: 30px;
  img {
    width: 60px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .bottom_kb {
      display: inline-block;
      width: 50px;
    }
  }
}
</style>