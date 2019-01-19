
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import routes from './routes';
import usersStore from './store/usersStore';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    // mode: 'history',
});
window.events = new Vue();


new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store: usersStore,
});
