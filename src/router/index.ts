import LoadingBar from '@/components/loadingBar.vue';
import { createVNode, render } from 'vue';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';


declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition?: string
    }
}

const LoadingBarVNode = createVNode(LoadingBar)
render(LoadingBarVNode, document.body)

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/components/true-login.vue'),
        meta: {
            title: '登陆页面',
            transition: 'animate__fadeInLeft'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/home.vue'),
        meta: {
            title: '首页',
            transition: 'animate__bounceIn'
        },

    },
    // {
    //     path: '/userone',
    //     component: () => import('@/components/root.vue'),
    //     redirect: '/user1',
    //     children: [
    //         {
    //             path: '/user1',
    //             components: {
    //                 default: () => import('@/components/A.vue')
    //             }
    //         },
    //         {
    //             path: '/user2',
    //             components: {
    //                 bbb: () => import('../components/B.vue'),
    //                 ccc: () => import('../components/C.vue')
    //             }
    //         },
    //     ]
    // },
    // {
    //     path: '/user',
    //     component: () => import('../components/footer.vue'),
    //     children: [
    //         {
    //             path: '',
    //             name: 'Login',
    //             component: () => import('../components/login.vue')
    //         },
    //         {
    //             path: 'reg',
    //             name: 'Reg',
    //             component: () => import('../components/reg.vue')
    //         },
    //         {
    //             path: 'detail/:id',
    //             name: 'Detail',
    //             component: () => import('../components/detail.vue')
    //         },
    //     ]
    // },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to, from, savedPosition) => {
        return {
            top: 100
        }
    },
    routes
})

const whileList = ['/']

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    LoadingBarVNode.component?.exposed?.startLoading()
    if (whileList.includes(to.path) || localStorage.getItem('token')) {
        next()
    } else {
        next({
            path: '/'
        })
    }
})

router.afterEach((to, from, next) => {
    LoadingBarVNode.component?.exposed?.endLoading()
})
export default router
