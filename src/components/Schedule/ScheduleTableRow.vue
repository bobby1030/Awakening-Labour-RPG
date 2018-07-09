<template>
	<sui-table-row>
		<ScheduleHeader :worker="worker" v-bind:rowDataSet="rowDataSet"/>
		<ScheduleInput 
			v-for="col in columns" 
			:key="displayMonth+weekNum+worker.name+col.name"
			:name="col.name"
			:worker="worker"
			:weekNum="weekNum"
			:placeholder="col.unit" 
			:value="rowDataSet[col.name]" />
	</sui-table-row>
</template>

<script>
	import ScheduleHeader from './ScheduleHeader.vue';
	import ScheduleInput from './ScheduleInput.vue';
	import { mapState } from 'vuex';

	export default {
		components: {
			ScheduleHeader, ScheduleInput
		},
		props: {
			worker: Object,
			weekNum: String,
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
			columns() {
				return this.$store.state.dataSet[this.displayMonth][this.weekNum].columns
			},
			rowDataSet() {
				return this.$store.state.dataSet[this.displayMonth][this.weekNum].data[this.worker.id]
			}
		}
	}
</script>