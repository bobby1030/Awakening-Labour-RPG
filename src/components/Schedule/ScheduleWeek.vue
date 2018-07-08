<template>
	<div>
		<h3 is="sui-header">第 {{weekNum}} 週</h3>

		<sui-table basic="very" text-align="center">
			<sui-table-header>
				<sui-table-row>
					<sui-table-header-cell></sui-table-header-cell>
					<sui-table-header-cell v-for="col in weeklyDataSet.empA" class="top aligned">
						{{ col.description }}
						</br>
						<sui-label v-if="col.tag" :color="col.tagColor">
							{{ col.tag }}
						</sui-label>
					</sui-table-header-cell>
				</sui-table-row>
			</sui-table-header>

			<sui-table-body>
				<ScheduleTableRow
					v-for="worker in workersInfo"
					v-bind:key="monthStr+weekNum+worker.id"
					v-bind:worker="worker"
					v-bind:rowDataSet="weeklyDataSet[worker.id]"
					@updateWeeklyDataSet="updateWeeklyDataSet" />
			</sui-table-body>
		</sui-table>

		<sui-label>
			週利潤
			<sui-label-detail>{{weeklyProfit}}</sui-label-detail>
		</sui-label>
	</div>
</template>

<script>
	import ScheduleTableRow from './ScheduleTableRow.vue';
	import {inputDefinitions, specialCases} from '../../../configs/inputDefinitions.js';

	export default {
		components: {
			ScheduleTableRow
		},
		props: {
			weekNum: String,
			monthStr: String,
			dataSet: null,
		},
		data() {
			return {
				weeklyDataSet: this.dataSet
			}
		},
		computed:{
			workersInfo() {
				return this.$store.state.workersInfo
			},
			weeklyProfit() {
				let sumIncome = 0;
				let sumSalary = 0;
				let netProfitPerHour = 30;
				for(var target in this.weeklyDataSet) {
					for(var i=1; i<=7; i++) {
						let current = this.weeklyDataSet[target][i]
						sumIncome += current.value * current.multiplier * netProfitPerHour
						sumSalary += this.weeklyDataSet[target][0].value * current.value
					};
				};
				return sumIncome - sumSalary;
			}
		},
		methods: {
			genWeeklyDataSet() {
				let result={};
				this.workersInfo.forEach(worker => {
					result[worker.id] = JSON.parse(JSON.stringify(inputDefinitions));
				});
				return result;
			},
			updateWeeklyDataSet(worker, index, value) {
				this.weeklyDataSet[worker.id][index]['value'] = value;
				this.$emit('updateMonthlyDataSet', this.monthStr, this.weekNum, this.weeklyDataSet)
			},
			applySpecialCases() {
				specialCases.forEach(element => {
					if(element.month == this.monthStr && element.week == this.weekNum) {
						for(var target in this.weeklyDataSet) {
							for(var index = element.startIndex; index <= element.stopIndex; index++) {
								Object.assign(this.weeklyDataSet[target][index], element.content)
							}
						};
					}
				});
			}
		},
		created() {
			this.weeklyDataSet = this.weeklyDataSet || this.genWeeklyDataSet();
			this.applySpecialCases()
		},
		watch: {
			weeklyProfit() {
				this.$emit('updateMonthlyProfit', this.weeklyProfit, this.weekNum);
			}
		}
	}
</script>
<style scoped>
	th > .ui.label {
		margin-top: 5px;
	}
</style>
