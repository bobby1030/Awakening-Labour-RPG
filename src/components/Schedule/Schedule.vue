<template>
	<div>
		<h2 is="sui-header">{{getMonthText}}</h2>
		<sui-label>
			月利潤
			<sui-label-detail>{{monthlyProfitSum}}</sui-label-detail>
		</sui-label>

		<div class="week" v-for="weekNum in getWeeks" v-bind:key="displayMonth+weekNum">
			<ScheduleWeek
				:weekNum="weekNum"
				v-bind:dataSet="monthlyDataSet[displayMonth][weekNum]"
				v-bind:monthStr="displayMonth"
				@updateMonthlyDataSet="updateMonthlyDataSet"
				@updateMonthlyProfit="updateMonthlyProfit" />
		</div>
	</div>
</template>

<script>
	import ScheduleWeek from './ScheduleWeek.vue';

	export default {
		components: {
			ScheduleWeek
		},
		data() {
			return {
				monthlyDataSet: {Jan: [], Feb: [], Mar: []},
				monthlyProfit: {Jan: [], Feb: [], Mar: []}
			}
		},
		props: {
			displayMonth: String,
			displayMonthText: String,
		},
		computed: {
			getWeeks() {
				if (this.displayMonth == 'Jan') {
					return ['4']
				} else {
					return ['1','2','3','4']
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
			monthlyProfitSum() {
				let sum = this.monthlyProfit[this.displayMonth].reduce(function(accumulator, currentValue) {return accumulator + currentValue}, 0)
				return sum;
			}
			
		},
		methods: {
			updateMonthlyDataSet(month, weekNum, weeklyDataSet) {
				this.monthlyDataSet[month][weekNum] = weeklyDataSet;
			},
			updateMonthlyProfit(value, week) {
				this.$set(this.monthlyProfit[this.displayMonth], week, value);
			},
			
		},
	};
</script>

<style>
	.week{
		margin-top: 4em;
	}
</style>