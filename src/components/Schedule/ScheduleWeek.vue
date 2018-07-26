<template>
	<div>
		<h3 is="sui-header">第 {{weekNum}} 週</h3>

		<sui-table basic text-align="center">
			<sui-table-header>
				<sui-table-row>
					<sui-table-header-cell></sui-table-header-cell>
					<sui-table-header-cell v-for="col in weeklyDataSet.columns" :key="'col-'+col.name" class="top aligned">
						{{ col.text }}
						<br/>
						<Label :color="col.tag.color">
							{{col.tag.text}}
						</Label>
					</sui-table-header-cell>
				</sui-table-row>
			</sui-table-header>

			<sui-table-body>
				<sui-table-row v-if="role === 'GM'">
					<sui-table-cell text-align="right">罷工失敗</sui-table-cell>
					<StrikeCheck 
						v-for="(col, index) in weeklyDataSet.columns" :key="'strike'+'col-'+col.name"
						:weekNum="weekNum"
						:columnIndex="index"
						:columnName="col.name" />
				</sui-table-row>
				<sui-table-row v-if="role === 'GM'">
					<sui-table-cell text-align="right">手動增減額</sui-table-cell>
					<Bonus
						v-for="(col, index) in weeklyDataSet.columns" :key="'bonus'+'col-'+col.name" 
						:weekNum="weekNum"
						:columnIndex="index"
						:columnName="col.name"
						:bonus="col.bonus" />
				</sui-table-row>
				<ScheduleTableRow
					v-for="worker in workersInfo" 
					:key="displayMonth+weekNum+worker.name" 
					:worker="worker" 
					:weekNum="weekNum" />
			</sui-table-body>
		</sui-table>

		<div v-if="['employer', 'GM'].indexOf(getRoleGroup) != -1">
			<Label color="blue" :detail="weeklyIncome">週營業額</Label>
			<Label color="blue" :detail="weeklyProfit">週淨利</Label>
		</div>
	</div>
</template>

<script>
	import ScheduleTableRow from './ScheduleTableRow.vue';
	import StrikeCheck from './StrikeCheck.vue';
	import Bonus from './Bonus.vue';
	import Label from '../Label.vue';
	import { mapState } from 'vuex';

	export default {
		components: {
			ScheduleTableRow, StrikeCheck, Bonus, Label
		},
		props: {
			weekNum: String,
		},
		computed:{
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
				workersInfo: state => state.workersInfo,
				role: state => state.route.query.role
			}),
			weeklyDataSet() {
				return this.$store.state.dataSet[this.displayMonth][this.weekNum]
			},
			weeklyIncome() {
				return this.$store.getters.weeklyIncome(this.displayMonth, this.weekNum)
			},
			weeklyProfit() {
				return this.$store.getters.weeklyProfit(this.displayMonth, this.weekNum)
			},
			getRoleGroup() {
				return this.$store.getters.roleGroup(this.role)
			}
		},
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
