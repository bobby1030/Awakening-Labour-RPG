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

		<sui-label color="blue">
			週營業額
			<sui-label-detail>{{weeklyIncome}}</sui-label-detail>
		</sui-label>
		<sui-label color="blue">
			週淨利
			<sui-label-detail>{{weeklyProfit}}</sui-label-detail>
		</sui-label>
		<!-- temp for 7/9 testing-->
		<sui-label color="teal">
			GM 處罰
			<sui-label-detail><sui-input type="tel" placeholder="" v-model.number="punishment" /></sui-label-detail>
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
				weeklyDataSet: this.dataSet,
				punishment: 0,
			}
		},
		computed:{
			workersInfo() {
				return this.$store.state.workersInfo
			},
			weeklyIncome() {
				let sumIncome = 0;
				let incomePerHour = 30;
				for(var target in this.weeklyDataSet) {
					for(var i=1; i<=7; i++) {
						let current = this.weeklyDataSet[target][i]
						sumIncome += current.value * current.multiplier * incomePerHour
					};
				};
				return sumIncome;
			},
			weeklyProfit() {
				let sumIncome = 0;
				let sumSalary = 0;
				let incomePerHour = 30;
				for(var target in this.weeklyDataSet) {
					for(var i=1; i<=7; i++) {
						let current = this.weeklyDataSet[target][i]
						sumIncome += current.value * current.multiplier * incomePerHour
						sumSalary += this.weeklyDataSet[target][0].value * current.value
					};
				};
				return sumIncome - sumSalary - this.punishment;
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
	.ui.label .input {
		max-width: 4em;
		font-size: 10px;
	}
</style>
