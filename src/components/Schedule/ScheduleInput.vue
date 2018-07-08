<template>
	<sui-table-cell>
		<sui-input type="tel" :placeholder="placeholder" v-model.number="localValue" v-bind:readonly="isReadonly" />
	</sui-table-cell>
</template>

<script>
export default {
	props: {
		placeholder: String,
		value: Number,
		index: Number,
		onChange: Function
	},
	data() {
		return {
			localValue: this.value
		}
	},
	computed: {
		isReadonly() {
			if (this.$store.state.role === 'employee') {
				return true
			} else {
				return false
			}
		}
	},
	watch: {
		value(val) {
			this.localValue = val;
		},
		localValue(val) {
			this.$emit('updateDataSet', this.index, val || null)
		}
	}
}
</script>
<style scoped>
	.input {
		max-width: 4em;
	}
	
	.ui.input > input[type="tel"] {
		font-size: 16px;
		padding: 0.5em;
	}
</style>