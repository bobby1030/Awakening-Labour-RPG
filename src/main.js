import Vue from 'vue';
import Router from 'vue-router';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App.vue';
import Schedule from './components/Schedule/Schedule.vue';
import Dashboard from './components/Dashboard.vue';
import Intro from './components/Intro.vue';

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
		component: Dashboard
	}]
})

var app = new Vue({
	el: '#app',
	components: {App},
	router: router,
	template: `
		<App></App>
	`
});