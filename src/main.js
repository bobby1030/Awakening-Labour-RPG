import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App.vue';
import Schedule from './components/Schedule/Schedule.vue';
import Scoreboard from './components/Scoreboard.vue';
import Intro from './components/Intro.vue';

Vue.use(Vuex);
Vue.use(Router);
Vue.use(SemanticUIVue);

const router = new Router({
	base: '/',
	routes: [{
		path: '/',
		redirect: '/intro'
	},{
		path: '/month/:displayMonth',
		component: Schedule,
		props: true
	},{
		path: '/intro',
		component: Intro,
	},{
		path: '/scoreboard',
		component: Scoreboard
	}]
})

const store = new Vuex.Store({
	state: {
		count: 1,
	}
});

var app = new Vue({
	el: '#app',
	components: {App},
	router: router,
	store,
	template: `
		<App></App>
	`
});