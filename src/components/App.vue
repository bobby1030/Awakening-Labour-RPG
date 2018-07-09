<template>
	<div>
		<sui-container fluid>
			<Menu></Menu>
		</sui-container>
		<sui-container>
			<sui-segment id="main">
					<router-view />
			</sui-segment>
		</sui-container>
	</div>
</template>

<script>
import Menu from './Menu.vue';

export default {
	components: {
		Menu
	},
};
</script>

<style>
	#main {
		margin-top: 2em;
	}
</style>
