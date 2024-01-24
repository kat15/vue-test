import {createRouter, createWebHistory} from 'vue-router';
import {useUserStore} from '@/stores/user';

const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/HomeView.vue'),
                meta: {
                    auth: true
                }
            },
            {
                path: '/login',
                name: 'Login',
                component: () => import('../views/Login/Login.vue')
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../views/Dashboard/Dashboard.vue'),
                meta: {
                    auth: true,
                    inMenu: true,
                    icon: 'fi-rr-house-chimney'
                }
            }
        ]
    });

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (!userStore.isLogged && to.name !== 'Login' && to.meta.auth) {
        next({
            name: 'Login'
        });
    } else {
        next();
    }
});

export default router
