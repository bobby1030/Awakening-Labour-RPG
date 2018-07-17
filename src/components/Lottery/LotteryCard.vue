<template>
	<sui-card class="fluid">
		<sui-image :src="img"/>
		<sui-card-content>
			<sui-card-header><slot /></sui-card-header>
			<sui-card-description>共有 {{ count}} 張</sui-card-description>
		</sui-card-content>
		<sui-card-content extra v-if="checked">
			<sui-icon name="check" />
		</sui-card-content>
   	</sui-card>
</template>
<script>
export default {
	props: {
		count: Number,
		img: String,
		checked: Boolean,
	}
}
</script>
<style>
</style>
