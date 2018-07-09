import Vue from 'vue';
import Vuex from 'vuex';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import {sync} from 'vuex-router-sync';
import store from './store/index.js';
import router from './router.js';

import App from './components/App.vue';

Vue.use(Vuex);
Vue.use(SemanticUIVue);

sync(store, router);

var app = new Vue({
	el: '#app',
	components: {App},
	router,
	store,
	template: `
		<App></App>
	`
});