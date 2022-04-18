import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';

new Vue({
    router : router,
    render: (h) => h(App),
    el: '#app'
})