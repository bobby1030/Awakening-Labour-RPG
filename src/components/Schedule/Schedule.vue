<template>
	<div>
		<h2 is="sui-header">{{getMonthText}}</h2>
		<ProgressWeekSelector v-if="getRoleGroup === 'GM'"/>
		<Label 
			:detail="monthlyProfit"
			v-if="['employer', 'GM'].indexOf(getRoleGroup) != -1">
			月淨利
		</Label>
		
		<div class="week" v-for="weekNum in getWeeks" v-bind:key="displayMonth+weekNum">
			<ScheduleWeek :weekNum="weekNum" />
		</div>
	</div>
</template>

<script>
	import ScheduleWeek from './ScheduleWeek.vue';
	import ProgressWeekSelector from './ProgressWeekSelector.vue';
	import Label from '../Label.vue';
	import {mapState} from 'vuex';

	export default {
		components: {
			ScheduleWeek, ProgressWeekSelector, Label
		},
		props: {
			displayMonthText: String,
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth,
				role: state => state.route.query.role
			}),
			getWeeks() {
				if (this.displayMonth == 'Jan') {
					return ['6']
				} else {
					return ['1','2','3','4', '5', '6']
				}
			},
			getMonthText() {
				switch (this.displayMonth) {
					case 'Jan':
						return '一月 January'
						break;
					case 'Feb':
						return '二月 Febuary'
						break;
					case 'Mar':
						return '三月 March'
						break;
				}
			},
			monthlyProfit() {
				return this.$store.getters.monthlyProfit(this.displayMonth)
			},
			getRoleGroup() {
				return this.$store.getters.roleGroup(this.role)
			}
		},
	};
</script>

<style>
	.week{
		margin-top: 4em;
	}
</style>