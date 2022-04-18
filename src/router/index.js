import Vue from  'vue';
import {createRouter, createWebHistory} from 'vue-router';
//import Home from '../views/Home';
const Home = () => import('../views/Home')
Vue.use(createRouter);

const routes = [
    {
        path: '/',
        component : Home
    }
];

const router = createRouter({
    history: createWebHistory,
    routes
});

export default router;