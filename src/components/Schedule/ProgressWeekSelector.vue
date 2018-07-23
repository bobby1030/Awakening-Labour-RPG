<template>
	<sui-button-group id="ProgressWeekSelector">
		<sui-button compact>進度週數選擇</sui-button>
		<sui-button v-for="week in weekNums" :positive="week === progressWeek" :value="week" @click="updateProgressWeek">{{week}}</sui-button>
	</sui-button-group>
</template>

<script>
export default {
	computed: {
		displayMonth() {
			return this.$store.state.route.params.displayMonth;
		},
		progressWeek() {
			return this.$store.state.progressWeek[this.displayMonth];
		},
		weekNums() {
			if (this.displayMonth == 'Jan') {
				return [6];
			} else {
				return [1, 2, 3, 4, 5, 6];
			}
		}
	},
	methods: {
		updateProgressWeek(event) {
			this.$store.commit('updateProgressWeek', {
				month: this.displayMonth,
				value: parseInt(event.target.value),
			})
		}
	}
}
</script>
