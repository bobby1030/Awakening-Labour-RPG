import Vue from 'vue';
import Router from 'vue-router';

import Intro from './components/Intro.vue';
import LabourStandardsAct from './components/LabourStandardsAct.vue';
import Schedule from './components/Schedule/Schedule.vue';
import Lottery from './components/Lottery/Lottery.vue';

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
			name: 'LabourStandardsAct',
			path: '/LabourStandardsAct',
			component: LabourStandardsAct,
		},
		{
			name: 'Schedule',
			path: '/Schedule/:displayMonth',
			component: Schedule,
		}, 
		{
			name: 'Lottery',
			path: '/Lottery',
			component: Lottery,
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