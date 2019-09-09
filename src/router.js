import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const route = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: '首页',
            component: () =>
                import ( /* webpackChunkName: "Home" */ './views/Home.vue')
        },
        {
            path: '/lottery',
            name: '抽奖页',
            component: () =>
                import ( /* webpackChunkName: "Home" */ './views/Lottery.vue')
        },
        {
            path: '/photoShow',
            name: '照片墙',
            component: () =>
                import ( /* webpackChunkName: "PhotoShow" */ './views/PhotoShow.vue')
        },
        {
            path: '/shipinOne',
            name: '视频一',
            component: () =>
                import ( /* webpackChunkName: "PhotoShow" */ './views/ShipinOne.vue')
        },
        {
            path: '/shipinTwo',
            name: '视频二',
            component: () =>
                import ( /* webpackChunkName: "PhotoShow" */ './views/ShipinTwo.vue')
        },
        {
            path: '/address',
            name: '地址',
            component: () =>
                import ( /* webpackChunkName: "PhotoShow" */ './views/Address.vue')
        },
    ]
})



export default route