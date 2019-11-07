import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 使用VUex
Vue.use(Vuex)

function fetch(api, callback) {
    axios({
        method: "GET",
        url: 'http://localhost:8082' + api
    }).then(res => {
        let data = null
        if (res.data.err === 0) {
            data = res.data.data
        }
        callback && callback(data)
    }).catch(err => {
        console.log('接口请求异常', err)
    }).then(() => {})

}
// 创建一个store仓库
const store = new Vuex.Store({
    state: {
        //我的
        intimeList: [],
        orderList: [],
        srollList: [],
        ramList: [],
        userInfo: {
            name: 'wodetian',
            pw: '123456'
        },
        //黄振祥
        CutListArr: [], //所有数据
        cutListArr1: [], //渲染的数据
        cutListArr2: [], //已售
        cutListArr3: [], //仓库
        hzxapply: [],
        //何展成
        list: [],
        //王文清
        orderArr: [], //所有
        orderArr2: [] //用于表格中

    },

    mutations: {
        // 我的
        updateIntimeList(state, payload) {
            state.intimeList = payload
        },
        updatetOrderList(state, payload) {
            state.orderList = payload
        },
        updateScrollList(state, payload) {
            state.srollList = payload
        },
        updateRamList(state, payload) {
            state.ramList = payload
        },

        // 黄振祥
        //发布商品
        updateAdd(state, payload) {
            state.cutListArr1.unshift(payload)
            state.cutListArr1.pop()
        },
        //商品数据
        updateCutListArr(state, payload) {
            console.log(payload)
            if (payload.list) {
                state.CutListArr = payload.list
            }
            let page = payload.page || 1
            let list = state.CutListArr
            // console.log(list)
            let arr = []
            let arr1 = []
            let arr2 = []
            list.map((ele) => {
                if (ele.state == 1) {
                    arr.push(ele)
                }
                if (ele.state == 2) {
                    arr1.push(ele)
                }
                if (ele.state == 3) {
                    arr2.push(ele)
                }
            })
            

            if(payload.index==0){
                state.hzxapply =arr.slice((page-1)*5,5*page)
            }else if(payload.index==1){
                state.hzxapply = arr1.slice((page-1)*5,5*page)
            }else if(payload.index==2){
                state.hzxapply = arr2.slice((page-1)*5,5*page)
            }

            // if(payload.index==0){
            //     state.hzxapply = state.cutListArr1
            // }else if(payload.index==1){
            //     state.hzxapply = state.cutListArr2
            // }else if(payload.index==2){
            //     state.hzxapply = state.cutListArr3
            // }

            //     state.cutListArr1 = list.slice((page-1)*5,5*page)
        },

        //删除商品
        updateCutDel(state,payload){
            console.log('_______',state)
            console.log('_______',payload)
            let cutArr1 = state.hzxapply
            let cutArr2 = payload
            for (let i = 0; i < cutArr1.length; i++) {
                for (let j = 0; j < cutArr2.length; j++) {
                    if (cutArr1[i].id === cutArr2[j].id) {
                        cutArr1.splice(i, 1)
                        console.log(1)
                    }
                }
            }
            state.hzxapply =  cutArr1
        },
        //筛选
        updateScreen(state, payload) {
            console.log(state.CutListArr)
            console.log(payload)

            let arr = []
            state.CutListArr.map((ele) => {
                if (ele.id == payload.id) {
                    arr.push(ele)
                }

            })
            state.cutListArr1 = arr
        },
        //何展成
        updataList(state, payload) {
            state.list = payload
            console.log(state.list)

        },
        updataListArr(state, payload) {
            switch (payload.type) {
                case 'insert':
                    state.list.push(payload.item)
                    console.log(payload.item)
                    //    console.log(state.list)
                    break;
            }
        },
        //王文清
        //分页
        updateOrderArr(state, payload) {
            if (payload.list) {
                state.orderArr = payload.list
            }
            let page = payload.page || 1
            let list = state.orderArr
            //    console.log('=======',page, list)
            state.orderArr2 = list.slice((page - 1) * 5, page * 5)
            // console.log('0000000000000',list.slice((page-1)*5,5))
        },
        toPayFor(state, payload) {
            let arr = []
            state.orderArr.map((ele) => {
                if (ele.statesNum == payload.statesNum) {
                    arr.push(ele)
                }
            })
            arr = state.orderArr2
            return arr
        },
        //上部筛选
        updateSelectt(state, payload) {
            let arr = []
            state.orderArr.map((ele) => {
                if (ele.id == payload.id) {
                    arr.push(ele)
                }
            })
            state.orderArr2 = arr
        },
        //下部筛选
        updateHandleClick(state, payload) {
            let arr = []
            state.orderArr.map((ele) => {
                if (ele.order_status == payload.order_status) {
                    arr.push(ele)
                }
            })
            state.orderArr2 = arr
        }


    },


    actions: {
        // 我的
        //获取概况页面的实时概况
        getIntimeList(store) {
            fetch('/db/pay.json', (data) => {
                console.log(data)
                store.commit('updateIntimeList', data)
            })

        },
        //全部事项头部数据
        getOrderList(store) {
            fetch('/db/send.json', (data) => {
                console.log(data)
                store.commit('updatetOrderList', data)
            })
        },
        //全部事项滚动部分数据
        getScrollList(store) {
            fetch('/db/srcoll.json', (data) => {
                console.log("滚动", data)
                store.commit('updateScrollList', data)
            })
        },
        //获取概况页面产品动态
        getRam(store) {
            fetch('/db/date.json', (data) => {
                console.log("滚动", data)
                store.commit('updateRamList', data)
            })
        },

        //hzx
        //商品数据  调用fetch接口，在自定义方法和数据提交给mutations
        getCutList(store) {
            fetch('/db/goods.json', data => {
                let payload = {
                    page: 1,
                    list: data,
                    index: '',
                }
                store.commit('updateCutListArr', payload)
            })
        },
        //何展成
        getList(store) {
            fetch('/db/list.json', (data) => {
                console.log('------------------', data)
                store.commit('updataList', data)
            })
        },
        //王文清
        getOrders() { //调取假接口
            fetch("/db/youzan.json", data => {
                console.log(data)
                let payload = {
                    page: 1,
                    list: data,
                    id: '',
                    order_status: ''
                }
                store.commit('updateOrderArr', payload)
            })
        }
    }


})



export default store