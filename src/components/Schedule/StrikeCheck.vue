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
			success: Boolean
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
			}),
			strikeMultiplier() {
				return this.$store.state.dataSet[this.displayMonth][this.weekNum].columns[this.columnIndex].strike
			},
			checked: {
				get() {
					if (this.success === true) {
						// 罷工成功欄位
						return this.strikeMultiplier === 0;
					} else {
						// 罷工失敗欄位
						return this.strikeMultiplier === 0.75;
					}
				},
				set(val) {
					if (val === true) {
						// 勾選
						if (this.success === true) {
							// 罷工成功欄位
							this.updateStrike(0);
						} else {
							// 罷工失敗欄位
							this.updateStrike(0.75);
						}
					} else {
						// 未勾選
						this.updateStrike(1);
					}
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
