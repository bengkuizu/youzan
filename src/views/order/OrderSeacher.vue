<template>
  <div class="wrap">
    <div class="seacher_list">
      <div class="search">
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <div>订单搜索：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value" placeholder="订单搜索">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="7">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="3 ">
            <div>下单时间：</div>
          </el-col>
          <el-col :span="10">
            <div class="block">
              <el-date-picker
                v-model="value_time"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']"
              ></el-date-picker>
            </div>
          </el-col>

          <el-col :span="2">
            <el-button>今</el-button>
          </el-col>
          <el-col :span="2">
            <el-button>昨</el-button>
          </el-col>
          <el-col :span="2">
            <el-button>近7天</el-button>
          </el-col>
          <el-col :span="2">
            <el-button class="sanshi">近30天</el-button>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :span="3">
            <div>商品名称：</div>
          </el-col>
          <el-col :span="7">
            <el-input v-model="input_good" placeholder="全部"></el-input>
          </el-col>
          <el-col :span="3">
            <div>订单类型：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_ding" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <div>维权状态：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_oil" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :span="3">
            <div>订单状态：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_state" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <div>配送方式：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_get" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <div>付款方式：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_pay" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :span="3">
            <div>订单来源：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_come" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <div>是否加星：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_zan" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <div>假的：</div>
          </el-col>
          <el-col :span="7">
            <el-select v-model="value_fool" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-button @click="selectt">筛选</el-button>
        <el-button>导出</el-button>
        <el-link type="primary">查看已导出列表</el-link>
        <el-link type="primary">重置筛选条件</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "外部单号"
        },
        {
          value: "选项2",
          label: "收货人姓名"
        },
        {
          value: "选项3",
          label: "收货人手机号"
        },
        {
          value: "选项4",
          label: "收货人手机后四位"
        }
      ],
      value: "",
      value_good: "",
      value_time: "",
      input: "",
      input_good: "",
      value_state: "",
      value_ding: "",
      value_oil: "",
      value_get: "",
      value_pay: "",
      value_come: "",
      value_zan: "",
      value_fool: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: ""
    };
  },
  methods: {
    ...mapMutations(["updateSelectt"]),
    selectt() {
      this.updateSelectt({ id: this.input });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #ffffff;
  .seacher_list {
    height: 400px;
    background: #f7f8fa;
    box-sizing: border-box;
    border: 20px solid #ffffff;
    .search {
      float: left;
      padding: 6px 25px 6px 12px;
    }
    .el-link {
      margin-left: 10px;
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .el-col {
        border-radius: 4px;
      }
    }
  }
}
</style>
