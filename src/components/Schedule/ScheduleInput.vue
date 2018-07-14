<template>
	<sui-table-cell>
		<sui-input type="tel" :placeholder="placeholder" :value="value" @input="updateInputData" v-bind:readonly="isReadonly" />
	</sui-table-cell>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		props: {
			name: String,
			worker: Object,
			weekNum: String,
			placeholder: String,
		},
		computed: {
			...mapState({
				displayMonth: state => state.route.params.displayMonth, 
				role: state => state.route.query.role,
			}),
			value: {
				get() {
					return this.$store.state.dataSet[this.displayMonth][this.weekNum].data[this.worker.id][this.name]
				},
				set(val) {
					this.updateInputData(val)
				}
			},
			isReadonly() {
				if (['employer', 'GM'].indexOf(this.role) == -1) {
					return true
				} else {
					return false
				}
			},
		},
		methods: {
			updateInputData(val) {
				this.$store.commit('updateInputData', {
					month: this.displayMonth,
					week: this.weekNum,
					worker: this.worker,
					name: this.name,
					value: parseInt(val) || 0,
				})
			}
		}
	}
</script>
<style>
	.input {
		max-width: 4em;
	}
	
	.ui.input > input[type="tel"] {
		font-size: 16px;
		padding: 0.5em;
	}
</style>