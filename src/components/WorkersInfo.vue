<template>
	<div>
		<sui-card-group :items-per-row="2">
			<sui-card v-for="worker in workersInfo">
				<sui-card-content>
					<sui-card-header><sui-icon name="user circle outline" :color="worker.color"/>{{worker.name}}</sui-card-header>
					<sui-card-meta>{{worker.mobile}}</sui-card-meta>
					<sui-card-meta>{{worker.email}}</sui-card-meta>
					<sui-card-description>
						<p class="item"><span class="title">到職日期：</span>{{worker.employmentDate}}</p>
						<p class="item"><span class="title">生日：</span>{{worker.birthday}}</p>
						<p class="item"><span class="title">年齡：</span>{{worker.age}}</p>
						<p class="item"><span class="title">通訊地址：</span>{{worker.addr}}</p>
						<p class="item"><span class="title">備註：</span>{{worker.annotation}}</p>
					</sui-card-description>
				</sui-card-content>
				<sui-card-content extra>
					<sui-icon name="user" :color="worker.race.color"/> {{worker.race.name}}
					<span slot="right">{{worker.nationalID}}</span>
				</sui-card-content>
			</sui-card>
		</sui-card-group>
	</div>
</template>
<script>
	export default {
		computed: {
			workersInfo() {
				return this.$store.state.workersInfo;
			},
		}
	}
</script>
<style scoped>
.item {
	padding-left: 0.5em;
}

.item > .title {
	color: rgba(0, 0, 0, 0.4);
}
</style>
