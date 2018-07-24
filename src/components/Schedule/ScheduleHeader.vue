<template>
	<sui-table-cell text-align="right">
		<sui-header>
			<sui-header-content>
				<sui-icon name="user circle outline" :color="worker.color" />
				{{ worker.name }}
				<sui-header-subheader>
					<sui-label>
						工資
						<sui-label-detail>{{salary}}</sui-label-detail>
					</sui-label>
				</sui-header-subheader>
				<sui-header-subheader>
					<sui-label>
						疲勞
						<sui-label-detail>{{fatigue}}</sui-label-detail>
					</sui-label>
				</sui-header-subheader>
			</sui-header-content>
		</sui-header>
	</sui-table-cell>
</template>

<script>
export default {
	props: {
		worker: Object,
		rowDataSet: Object
	},
	computed: {
		salary() {
			let temp = JSON.parse(JSON.stringify(this.rowDataSet))
			let salaryPerHour = temp['salary']
			let sum = 0
			
			for(let key in temp) {
				if (key != 'salary') {
					sum += temp[key] * salaryPerHour
				}
			}

			return sum;
		},
		fatigue() {
			let temp = JSON.parse(JSON.stringify(this.rowDataSet))
			let fatigueSum = 0;
			let overEightHours = 0;
			let weekDaysSum = 0;
			let weekHoursSum = 0;

			for(let key in temp) {
				if (key != 'salary') {
					if (temp[key] > 8) {
						overEightHours = 1;
					}
					if (temp[key]) {
						weekDaysSum ++;
					}
					weekHoursSum += temp[key];
				}
			};
			
			fatigueSum += overEightHours;
			if(weekDaysSum > 5) {
				fatigueSum++
			}
			if(weekHoursSum > 40) {
				fatigueSum++
			}

			return fatigueSum;
		}
	}
}
</script>
<style scoped>
	.ui.label {
		margin-top: 0.3em;
	}
</style>
