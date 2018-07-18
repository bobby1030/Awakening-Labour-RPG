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
		rowDataSet: Object,
		columnDataSet: Array
	},
	computed: {
		salary() {
			let columnData = JSON.parse(JSON.stringify(this.columnDataSet));
			let rowData = JSON.parse(JSON.stringify(this.rowDataSet))
			let salaryPerHour = rowData['salary']
			let sum = 0
			
			for (let key in columnData) {
				let column = columnData[key];
				if (column.name != 'salary' && column.strike != 0) {
					sum += rowData[column.name] * salaryPerHour
				}
			}
			
			return sum;
		},
		fatigue() {
			let columnData = JSON.parse(JSON.stringify(this.columnDataSet));
			let rowData = JSON.parse(JSON.stringify(this.rowDataSet))
			let fatigueSum = 0;
			let overEightHours = 0;
			let weekDaysSum = 0;
			let weekHoursSum = 0;

			for (let key in columnData) {
				let column = columnData[key];
				if (column.name != 'salary' && column.strike != 0) {
					// 非薪水、非罷工成功日
					if (rowData[column.name] > 8) {
						overEightHours = 1;
					}
					if (rowData[column.name]) {
						weekDaysSum++;
					}
					weekHoursSum += rowData[column.name];
				}
			}
			
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
