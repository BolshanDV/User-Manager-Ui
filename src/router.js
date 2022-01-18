import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,

    routes: [
        {
            path: '/analytics',
            name: 'Analytics',
            meta: {
                title: 'Analytics',
                layout:'main'
            },
            component: () => import('./components/analyticsPart/Analytics'),
        },
        {
            path: '/license',
            name: 'LicenseManagement',
            meta: {
                layout: 'main',
                title : 'License Management'
            },
            component: () => import('./components/licenseManagementPart/LicenseManagement')
        },
        {
            path: '/managing',
            name: 'ManagingDrops',
            meta: {
                layout: 'main',
                title: 'Managing Drops'
            },
            component: () => import('./components/managingDropsPart/ManagingDrops.vue')
        },
        {
            path: '/user',
            name:'userManagementPart',
            meta : {
                layout : 'main',
                title: 'User Management'
            },
            component: () => import('./components/userManagementPart/UserManagement.vue')
        },
        {
            path: '/',
            name:'login',
            meta : {
                layout : 'empty',
                title: 'login'
            },
            component: () => import('./components/login')
        },
        {
            path: '*',
            name:'notFound',
            meta : {
                layout : 'empty',
                title: 'notFound'
            },
            component: () => import('./components/error')
        },
    ]
})

router.beforeEach(((to, from, next) => {
    document.title = to.meta.title;
    next();
}))

export default router;
