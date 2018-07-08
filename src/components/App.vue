<template>
	<sui-container fluid>
		<Menu></Menu>
		<sui-container >
		<sui-segment id="main">
			<keep-alive>
				<router-view />
			</keep-alive>
		</sui-segment>
		</sui-container>
	</sui-container>
</template>

<script>
import Menu from './Menu.vue';
import Schedule from './Schedule/Schedule.vue';


export default {
	components: {
		Menu, Schedule
	}
};
</script>

<style>
	#main {
		margin-top: 2em;
	}
</style>
