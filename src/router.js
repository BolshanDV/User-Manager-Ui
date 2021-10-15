import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name:'Analytics',
            meta: {
                title: 'Analytics'
            },
            component: () => import('./components/AnalyticsPart/Analytics')
        },
        {
            path:'/license',
            name:'LicenseManagement',
            meta : {
                layout:'layout',
                title : 'License Management'
            },
            component: () => import('./components/LicenseManagementPart/LicenseManagement')
        },
        {
            path:'/managing',
            name:'ManagingDrops',
            meta : {
                layout:'layout',
                title: 'Managing Drops'
            },
            component: () => import('./components/ManagingDropsPart/ManagingDrops.vue')
        },
        {
            path:'/user',
            name:'UserManagementPart',
            meta : {
                layout : 'layout',
                title: 'User Management'
            },
            component: () => import('./components/UserManagementPart/UserManagement.vue')
        }
    ]
})

router.beforeEach(((to, from, next) => {
    document.title = to.meta.title;
    next();
}))

export default router;