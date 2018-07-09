<template>
	<sui-menu attached="top" color="blue">
		<sui-menu-item>
			蝦堡王
		</sui-menu-item>
		<sui-menu-item 
			:active="$route.name === 'Intro'" 
			link 
			@click="$router.push({name: 'Intro'})" 
			icon="info circle">
			規則
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
				<sui-dropdown-item @click="$router.push({name: 'Schedule', params: {displayMonth: 'Mar'}})">
					三月份
				</sui-dropdown-item>
			</sui-dropdown-menu>
		</sui-dropdown>
	</sui-menu>
</template>