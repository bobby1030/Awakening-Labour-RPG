import Vue from 'vue';
import Vuex from 'vuex';
import SemanticUIVue from 'semantic-ui-vue';
import '../semantic/dist/semantic.min.css';

import {sync} from 'vuex-router-sync';
import VueNativeSock from 'vue-native-websocket';
import store from './store/index.js';
import router from './router.js';

import App from './components/App.vue';

Vue.use(Vuex);
Vue.use(SemanticUIVue);

sync(store, router);
Vue.use(VueNativeSock, `ws://${location.hostname}:${location.port}/api`, {
	store: store,
	format: 'json',
	reconnection: true,
	reconnectionDelay: 1000,
});
store.$socket = Vue.prototype.$socket;

var app = new Vue({
	el: '#app',
	components: {App},
	router,
	store,
	render: (h) => h(App)
});