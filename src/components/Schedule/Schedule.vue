<template>
	<div>
		<h2 is="sui-header">{{getMonthText}}</h2>
		<Label :detail="monthlyProfit">月淨利</Label>
		
		<div class="week" v-for="weekNum in getWeeks" v-bind:key="displayMonth+weekNum">
			<ScheduleWeek :weekNum="weekNum" />
		</div>
	</div>
</template>

<script>
	import ScheduleWeek from './ScheduleWeek.vue';
	import Label from '../Label.vue';
	import {mapState} from 'vuex';

	export default {
		components: {
			ScheduleWeek, Label
		},
		props: {
			displayMonthText: String,
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth
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
			}
		},
	};
</script>

<style>
	.week{
		margin-top: 4em;
	}
</style>