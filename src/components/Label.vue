<template>
	<sui-label v-if="hasSlot" :color="color">
		<slot />
		<sui-label-detail v-if="detail || detail == 0">{{detail}}</sui-label-detail>
	</sui-label>
</template>

<script>
export default {
	props: {
		detail: [String, Number],
		color: String
	},
	computed: {
		hasSlot() {
			return this.$slots.default[0].text != '\n\t\t\t\t\t\t\n\t\t\t\t\t';
		}
	}
}
</script>
