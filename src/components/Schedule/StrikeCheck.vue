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
			columnName: String,
			strikeCheck: Boolean
		},
		data() {
			return {
				checked: this.strikeCheck,
			}
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
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
		},
		watch: {
			checked(val) {
				if (val) {
					this.updateStrike(val);
				} else {
					this.updateStrike(val);
				}
			}
		}
	}
</script>
