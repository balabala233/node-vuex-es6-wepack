import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import testRoot from '@/components/testRooter';
import multipleRoot from '@/components/multipleRoot';
import home from '@/components/subPage/home';
import detail from '@/components/subPage/detail';
import car from '@/components/subPage/car';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/testRoot', // 普通跳转
            name: 'testRoot',
            component: testRoot
        },
        {
            path: '/testRoot/:id', // 带参数跳转
            name: 'testRoot',
            component: testRoot
        },
        {
            path: '/multipleRoot', // 多层路由嵌套
            component: multipleRoot,
            children: [{
                path: '/home',
                component: home
            }, {
                path: '/detail/:id',
                component: detail
            }, {
                path: '/car',
                component: car,
                parmas: {
                    userId: 612423
                }
            }]
        }
    ]
});
