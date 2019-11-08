<template>
  <div class="main">
    <NavBar></NavBar>
    <MainRight></MainRight>
    <div class="header">
      <span>客户查询</span>
      <p>帮助和服务</p>
    </div>
    <!-- <Add></Add> -->
    <div class="nav">
      <div class="top">
        <Add></Add>
      </div>

      <!--日期-->
      <div class="date">
        <el-tabs type="border-card" id="zong">
          <el-tab-pane label="全部客户">
            <div class="block">
              <span class="demonstration">上次消费时间</span>
              <el-date-picker v-model="value1" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">成为客户时间</span>
              <el-date-picker v-model="value3" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value4"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为会员时间</span>
              <el-date-picker v-model="value5" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value6"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
            <!-- 关键-->
          </el-tab-pane>

          <!-- 新增客户-->
          <!--  中间日期-->
          <el-tab-pane label="新增客户">
            <div class="block">
              <span class="demonstration">上次消费时间</span>
              <el-date-picker v-model="value7" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value8"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为客户时间</span>
              <el-date-picker v-model="value9" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value10"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为会员时间</span>
              <el-date-picker v-model="value11" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value12"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-tab-pane>
          <!--    兴趣人群-->
          <el-tab-pane label="兴趣人群">
            <div class="block">
              <span class="demonstration">上次消费时间</span>
              <el-date-picker v-model="value13" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value14"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为客户时间</span>
              <el-date-picker v-model="value15" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value16"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为会员时间</span>
              <el-date-picker v-model="value17" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value18"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-tab-pane>

          <!--  微信互动粉色-->
          <el-tab-pane label="微信互动粉丝">
            <div class="block">
              <span class="demonstration">上次消费时间</span>
              <el-date-picker v-model="value19" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value20"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为客户时间</span>
              <el-date-picker v-model="value21" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value22"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">成为会员时间</span>
              <el-date-picker v-model="value23" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value24"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">公众关注时间</span>
              <el-date-picker v-model="value25" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value26"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>

            <div class="block">
              <span class="demonstration">最近互动时间</span>
              <el-date-picker v-model="value27" type="date" placeholder="开始日期"></el-date-picker>
            </div>
            <div class="block">
              <span class="demonstration">至</span>
              <el-date-picker
                v-model="value28"
                align="right"
                type="date"
                placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </el-tab-pane>

          <el-row type="flex" class="row-bg">
            <el-col :span="4">关键词:</el-col>
            <el-col :span="6">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row>

          <!--...............点击的......................-->
          <div class="father">
            <div class="choose">筛选</div>
            <div class="tiaojian">重置筛选条件</div>
            <div>
              <el-button @click="show = !show" class="open">点击</el-button>

              <div>
                <transition name="el-fade-in-linear">
                  <div v-show="show" class="transition-box"></div>
                </transition>
                <transition name="el-fade-in">
                  <div v-show="show" class="transition-box">
                    <!--////////-->
                    <!--...........................................................................-->
                    <el-row type="flex" class="row-bg">
                      <el-col :span="3">客户身份:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_a" placeholder="请选择">
                          <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>

                      <el-col :span="3">权益卡:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_b" placeholder="请选择">
                          <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row-bg">
                      <el-col :span="3">性别:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_c" placeholder="请选择">
                          <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>

                      <el-col :span="3">来源渠道:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_d" placeholder="请选择">
                          <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row-bg">
                      <el-col :span="3">来源方式:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_e" placeholder="请选择">
                          <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>

                      <el-col :span="3">微信地域:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_f" placeholder="请选择">
                          <el-option
                            v-for="item in options6"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row-bg">
                      <el-col :span="3">标签:</el-col>
                      <el-col :span="6">
                        <el-select v-model="value_g" placeholder="请选择">
                          <el-option
                            v-for="item in options7"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </el-col>
                    </el-row>

                    <!--///// -->
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <!--................................-->

          <!--  点击-->
        </el-tabs>
      </div>
      <!--  中间日期-->

      <div class="end">
        <MessAge></MessAge>
      </div>
      <!--底部		-->
      <div class="footer">
        <!--<h4>有赞</h4>-->
      </div>
    </div>
  </div>
  <!--.......................-->
</template>

<script>
import Add from "./Add.vue";
import MessAge from "./MessAge.vue";
import NavBar from "@/components/NavBar.vue";
import MainRight from "./MainRight.vue";
export default {
  components: {
    Add,
    MessAge,
    NavBar,
    MainRight
  },
  data() {
    return {
      options1: [
        {
          value_a: "选项1",
          label: "全部"
        },
        {
          value_a: "选项2",
          label: "会员"
        },
        {
          value_a: "选项3",
          label: "非会员"
        },
        {
          value_a: "选项4",
          label: "禁止购买名单"
        },
        {
          value_a: "选项5",
          label: "普通会员"
        }
      ],
      options2: [{}],
      options3: [
        {
          value_a: "选项1",
          label: "全部"
        },
        {
          value_a: "选项2",
          label: "男"
        },
        {
          value_a: "选项3",
          label: "女"
        }
      ],

      options4: [{}],

      options5: [{}],

      options6: [{}],

      options7: [{}],
      value_a: "",
      value_b: "",
      value_c: "",
      value_d: "",
      value_e: "",
      value_f: "",
      value_g: "",
      show: false,
      show4: false,
      show3: true,
      input: "",
      radio: "1",
      textarea: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: "",
      value21: "",
      value22: "",
      value23: "",
      value24: "",
      value25: "",
      value26: "",
      value27: "",
      value28: "",
      value29: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 985px;
  height: 700px;

  margin-left: 92px;
  background: #f7f8fa;
}

.header {
  width: 985px;
  height: 56px;
  background: #fff;
  border: 1px solid #d8d8d8;
}
.header p {
  float: left;
  display: block;
  padding: 20px;
  font-size: 14px;
}
.header span {
  float: right;
  padding: 20px;
  font-size: 14px;
}
.nav {
  width: 953px;
  height: 714px;
  background: #f7f8fa;
  margin: 16px;
}

.nav .top {
  width: 953px;
  height: 60px;
  background: #fff;
}

.nav .block {
  float: left;
  /*padding-left: ;*/
  margin-left: 20px;
  margin-top: 25px;
}

.nav .demonstration {
  margin-right: 20px;
}

.end {
  width: 953px;
  height: 244px;
  margin-top: 15px;
  border: 1px solid #d8d8d8;
}

.end h4 {
  text-align: center;
  line-height: 244px;
}

.footer {
  height: 60px;
  width: 953px;
  margin-top: 60px;
}

.footer h4 {
  color: #bfbfc3;
  font-size: 24px;
  text-align: center;
}

.row-bg {
  text-align: center;
  line-height: 50px;
  position: relative;
  right: 15px;
  width: 900px;
  top: 10px;
  display: block;
}

.a {
  margin-left: 30px;
  margin-top: 15px;
  width: 800px;
}

.yincang {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}

#zong {
  min-height: 300px;
}

.open {
  position: relative;
  top: 25px;
  left: 20px;
}

.choose {
  width: 62px;
  height: 32px;
  background: #155bd4;
  text-align: center;
  line-height: 32px;
  float: left;
  margin-left: 50px;
  margin-top: 30px;
}

.tiaojian {
  width: 100px;
  height: 32px;

  text-align: center;
  line-height: 32px;
  padding-left: 15px;
  float: left;
  margin-top: 30px;
  color: #155bd4;
}

.father {
  margin-left: 23px;
}

.box {
  width: 450px;
  height: 590px;
  background: #fff;
  z-index: 999999;
  margin: 0 auto;
  box-shadow: 5px 5px 5px #cecece;
  border: 1px solid #959595;
  overflow: hidden;
}

.tou {
  width: 450px;
  height: 50px;
  border-bottom: 1px solid #cecece;
  padding-left: 25px;
  line-height: 50px;
}

.zhongjian {
  width: 380px;
  height: 520px;

  margin-left: 20px;
  margin-top: 10px;
}

.block-2 {
  padding-left: 40px;
  padding-top: 20px;
}

.row-bg1 {
  margin-top: 30px;
  margin-left: 40px;
  width: 600px;
}
</style>