<template>
	<sui-table-cell>
		<sui-input v-if="columnName !== 'salary'" type="tel" v-model.number="bonus" />
	</sui-table-cell>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		props:{
			weekNum: String,
			columnIndex: Number,
			columnName: String,
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
			bonus: {
				get() {
					return this.$store.state.dataSet[this.displayMonth][this.weekNum].columns[this.columnIndex].bonus;
				},
				set(val) {
					this.updateBonus(val)
				}
			}
		},
		methods: {
			updateBonus(val) {
				this.$store.commit('updateBonus', {
					month: this.displayMonth,
					week: this.weekNum,
					index: this.columnIndex,
					value: val,
				})
			}
		},
	}
</script>
