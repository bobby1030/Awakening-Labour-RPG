<template>
	<sui-menu attached="top" color="blue">
		<sui-menu-item>
			蝦堡王
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'CompanyRule'" 
			link 
			@click="$router.push({name: 'CompanyRule'})" 
			icon="info circle">
			公司規定
		</sui-menu-item>
		<sui-dropdown item icon="calendar alternate outline">
			班表
			<sui-dropdown-menu>
				<sui-dropdown-item @click="$router.push({name: 'Schedule', params: {displayMonth: 'Jan'}})">
					一月份
				</sui-dropdown-item>
				<sui-dropdown-item @click="$router.push({name: 'Schedule', params: {displayMonth: 'Feb'}})">
					二月份
				</sui-dropdown-item>
			</sui-dropdown-menu>
		</sui-dropdown>
		<sui-menu-item 
			:active="$route.name === 'Lottery'" 
			v-if="getRoleGroup(role) === 'employee'" 
			link 
			@click="$router.push({name: 'Lottery'})" 
			icon="rocket">
			疲勞抽籤
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'GameInstructions'" 
			link 
			@click="$router.push({name: 'GameInstructions'})" 
			icon="paragraph">
			遊戲說明
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'LabourStandardsAct'" 
			link 
			@click="$router.push({name: 'LabourStandardsAct'})" 
			icon="paragraph">
			勞ㄐ法
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'StrikeFlow'"
			v-if="['employee', 'GM'].indexOf(getRoleGroup(role)) != -1" 
			link 
			@click="$router.push({name: 'StrikeFlow'})" 
			icon="paragraph">
			罷工流程
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'WorkersInfo'"
			v-if="['employer', 'GM'].indexOf(getRoleGroup(role)) != -1" 
			link 
			@click="$router.push({name: 'WorkersInfo'})" 
			icon="paragraph">
			員工資訊
		</sui-menu-item>
		<sui-menu-item position="right">
			數據同步
			<Label :color="connectionStatus.color">{{connectionStatus.text}}</Label>
		</sui-menu-item>
	</sui-menu>
</template>
<script>
import Label from './Label.vue';
export default {
	components: {
		Label
	},
	computed: {
		role() {
			return this.$store.state.route.query.role
		},
		connectionStatus() {
			return {
				text: this.$store.state.socketConnected ? 'OK' : 'Error',
				color: this.$store.state.socketConnected ? 'green' : 'red',
			}
		}
	},
	methods: {
		getRoleGroup(role) {
			return this.$store.getters.roleGroup(role);
		},
	}
}
</script>
