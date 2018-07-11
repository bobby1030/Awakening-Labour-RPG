<template>
	<sui-table-cell>
		<sui-input v-if="columnName !== 'salary'" type="tel" v-model.number="localValue" />
	</sui-table-cell>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		props:{
			weekNum: String,
			columnIndex: Number,
			columnName: String,
			bonus: Number
		},
		data() {
			return {
				localValue: this.bonus,
			}
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
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
		watch: {
			localValue(val) {
				this.updateBonus(parseInt(val))
			}
		}
	}
</script>
