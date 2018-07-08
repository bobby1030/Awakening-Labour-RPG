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
		dataSet: Array
	},
	computed: {
		salary() {
			let temp = JSON.parse(JSON.stringify(this.dataSet))
			let salaryPerHour = temp.shift().value
			let sum = 0
			temp.forEach((ele) => {sum += (ele.value * salaryPerHour)})
			return sum;
		},
		fatigue() {
			let temp = JSON.parse(JSON.stringify(this.dataSet))
			temp.shift()
			let fatigueSum = 0;
			let weekDaysSum = 0;
			let weekHoursSum = 0;
			temp.forEach((ele) => {
				if(ele.value > 8) {
					fatigueSum++
				}
				if (ele.value) {
					weekDaysSum++
				}
				weekHoursSum += ele.value
			})

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
