<template>
	<sui-table-cell>
		<sui-checkbox v-if="columnName !== 'salary'" v-model="checked"/>
	</sui-table-cell>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		props:{
			weekNum: String,
			columnIndex: Number,
			columnName: String
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
			checked: {
				get() {
					return this.$store.state.dataSet[this.displayMonth][this.weekNum].columns[this.columnIndex].strike;
				},
				set(val) {
					this.updateStrike(val)
				}
			}
		},
		methods: {
			updateStrike(val) {
				this.$store.commit('updateStrike', {
					month: this.displayMonth,
					week: this.weekNum,
					index: this.columnIndex,
					value: val,
				})
			}
		}
	}
</script>
