import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Commodity from '@/views/commodity/Commodity.vue'
import Customer from '@/views/customer/MainCenter.vue'
import Order from '@/views/order/Order.vue'
import Overview from '@/views/overview/Overview.vue'
import Login from '@/views/login/Login.vue'


const router = new VueRouter({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/over'
        },

        {
            path: '/over',
            component: Overview
        },
  
        {
            path: '/cmd',
            component: Commodity
        },
    
        {
            path: '/cut',
            component: Customer
        },
        
        {
            path: '/order',
            component: Order
        },     
     
     
        {
            path: '/login',
            component: Login
        }

    ]
})
//路由守卫
router.beforeEach((to,from,next) =>{
    if(to.path=='/login'){
        console.log('请先登录')
        next()
    }else{
        if(localStorage.getItem('isLogin') == 'true'){
            next()
        }else{
            next('/login')
        }
    }
})
export default router