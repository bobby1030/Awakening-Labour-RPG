import Vue from 'vue';
import Router from 'vue-router';

const CompanyRule = () => import('./components/CompanyRule.vue');
const LabourStandardsAct = () => import('./components/LabourStandardsAct.vue');
const GameInstructions = () => import('./components/GameInstructions.vue');
const StrikeFlow = () => import('./components/StrikeFlow.vue');
const WorkersInfo = () => import('./components/WorkersInfo.vue');
const Schedule = () => import('./components/Schedule/Schedule.vue');
const Lottery = () => import('./components/Lottery/Lottery.vue');

Vue.use(Router);

const router = new Router({
	base: '/',
	routes: [
		{
			path: '/',
			redirect: {name: 'CompanyRule'}
		},
		{
			path: '/Intro',
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
			name: 'StrikeFlow',
			path: '/StrikeFlow',
			component: StrikeFlow,
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