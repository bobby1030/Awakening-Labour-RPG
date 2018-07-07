<template>
	<sui-table-row>
		<ScheduleHeader :worker="worker" v-bind:dataSet="rowDataSet"/>
		<ScheduleInput 
			v-for="(input, index) in rowDataSet" 
			v-bind:index="index"
			v-bind:placeholder="input.unit" 
			v-bind:value="input.value" 
			@updateDataSet="updateDataSet" />
	</sui-table-row>
</template>

<script>
	import ScheduleHeader from './ScheduleHeader.vue';
	import ScheduleInput from './ScheduleInput.vue';

	export default {
		components: {
			ScheduleHeader, ScheduleInput
		},
		props: {
			worker: Object,
			rowDataSet: Array,
			updateWeeklyDataSet: Function
		},
		data() {
			return {
				
			}
		},
		methods: {
			updateDataSet(index, value) {
				this.$emit('updateWeeklyDataSet', this.worker, index, value);
			}
		}
	}
</script>