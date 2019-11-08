<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="待付款" name="second"></el-tab-pane>
      <el-tab-pane label="待发货" name="third"></el-tab-pane>
      <el-tab-pane label="已发货" name="fourth"></el-tab-pane>
      <el-tab-pane label="已完成" name="fifth"></el-tab-pane>
      <el-tab-pane label="已关闭" name="sixth"></el-tab-pane>
      <el-tab-pane label="退款中" name="seventh"></el-tab-pane>
      <el-table :data="orderArr2" style="width: 100%">
        <el-table-column prop="name" label="商品" width="180"></el-table-column>
        <el-table-column prop="price" prop2="number" label="单价(元)/数量" width="180"></el-table-column>
        <el-table-column prop="address" label="售后"></el-table-column>
        <el-table-column prop="buyer" label="买家/收货人"></el-table-column>
        <el-table-column prop="way" label="配送方式"></el-table-column>
        <el-table-column prop="money" label="实收金额（元）"></el-table-column>
        <el-table-column prop="order_status" label="订单状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, orderArr2)"
              type="text"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>

    <div class="block_page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      currentPage4: 0,
      activeName: "first",
      label: ""
    };
  },
  computed: {
    ...mapState(["orderArr2"])
  },
  methods: {
    ...mapActions(["getOrders"]),
    ...mapMutations(["updateOrderArr", "toPay", "updateHandleClick"]),
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleClick(tab, event) {
      console.log("-------------", tab, event);
      this.updateHandleClick({ order_status: tab.label });
      if (tab.label == "全部") {
        this.getOrders();
      }
      // this.updateHandleClick({order_status:this.label})
    },

    // },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.updateOrderArr({ page: val });
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style lang="scss" scoped>
.block_page {
  float: right;
}
</style>