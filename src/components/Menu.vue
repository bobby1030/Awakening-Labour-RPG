<template>
	<sui-menu attached="top" color="blue">
		<sui-menu-item>蝦堡王</sui-menu-item>
		<sui-menu-item :active="$route.path === '/intro'" link @click="$router.push('/intro')" icon="info circle">規則說明</sui-menu-item>
		<sui-dropdown item icon="calendar alternate outline">
			排班管理
			<sui-dropdown-menu>
				<sui-dropdown-item @click="$router.push('/month/Jan')">一月份</sui-dropdown-item>
				<sui-dropdown-item @click="$router.push('/month/Feb')">二月份</sui-dropdown-item>
				<sui-dropdown-item @click="$router.push('/month/Mar')">三月份</sui-dropdown-item>
			</sui-dropdown-menu>
		</sui-dropdown>
		<sui-menu-item :active="$route.path === '/scoreboard'" link @click="$router.push('/scoreboard')" icon="compass outline">班表總覽</sui-menu-item>
	</sui-menu>
</template>

<script>
	export default {
		
	};
</script>