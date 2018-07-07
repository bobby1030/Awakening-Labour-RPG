<template>
	<sui-container fluid>
		<Menu></Menu>
		<sui-container >
		<sui-segment id="main">
			<keep-alive>
				<router-view :workersInfo="workersInfo" />
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
	},
	data() {
		return {
			workersInfo: [
				{
					id: 'empA',
					color: 'blue',
					name: '魷魚哥'
				},
				{
					id: 'empB',
					color: 'teal',
					name: '派星星'
				},
				{
					id: 'empC',
					color: 'green',
					name: '泡芙阿阿'
				},
				{
					id: 'empD',
					color: 'olive',
					name: '海綿寶貝'
				}
			]
		}
	},
	methods: {
	}
};
</script>

<style>
	#main {
		margin-top: 2em;
	}
</style>
