import Vue from 'vue';
import Router from 'vue-router';

import CompanyRule from './components/CompanyRule.vue';
import LabourStandardsAct from './components/LabourStandardsAct.vue';
import GameInstructions from './components/GameInstructions.vue';
import WorkersInfo from './components/WorkersInfo.vue';
import Schedule from './components/Schedule/Schedule.vue';
import Lottery from './components/Lottery/Lottery.vue';

Vue.use(Router);

const router = new Router({
	base: '/',
	routes: [
		{
			path: '/',
			redirect: {name: 'CompanyRule'}
		}, 
		{
			name: 'CompanyRule',
			path: '/CompanyRule',
			component: CompanyRule,
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
		{
			name: 'GameInstructions',
			path: '/GameInstructions',
			component: GameInstructions,
		},
		{
			name: 'LabourStandardsAct',
			path: '/LabourStandardsAct',
			component: LabourStandardsAct,
		},
		{
			name: 'WorkersInfo',
			path: '/WorkersInfo',
			component: WorkersInfo,
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