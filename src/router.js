import Vue from 'vue';
import Router from 'vue-router';

import Schedule from './components/Schedule/Schedule.vue';
import Intro from './components/Intro.vue';

Vue.use(Router);

const router = new Router({
	base: '/',
	routes: [
		{
			path: '/',
			redirect: {name: 'Intro'}
		}, 
		{
			name: 'Intro',
			path: '/Intro',
			component: Intro,
		},
		{
			name: 'Schedule',
			path: '/Schedule/:displayMonth',
			component: Schedule,
		}, 
	]
})

let hasQueryParams = function(route) {
	return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
	if (!hasQueryParams(to) && hasQueryParams(from)) {
		next({
			name: to.name,
			params: to.params,
			query: from.query
		});
	} else {
		next();
	}
})

export default router;