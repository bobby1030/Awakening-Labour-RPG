<template>
	<sui-grid centered>
		<sui-grid-row>
			<sui-grid-column computer="four" textAlign="center">
				<LotteryCard :count="fineCount" :img="fineIcon" :checked="this.checked === 'fine'">
					沒事兒
				</LotteryCard>
		   	</sui-grid-column>
			<sui-grid-column computer="four" textAlign="center">
				<LotteryCard :count="fatiguedCount" :img="fatiguedIcon" :checked="this.checked === 'fatigued'">
					好累
				</LotteryCard>
		   	</sui-grid-column>
		</sui-grid-row>
		<sui-grid-row>
			<sui-grid-column computer="eight" textAlign="center">
				<sui-button fluid size="huge" color="blue" v-bind:loading="loading" @click="onClick()">抽籤</sui-button>
			</sui-grid-column>
		</sui-grid-row>
	</sui-grid>
</template>
<script>
import fineIcon from '../../../static/icons/fine.svg';
import fatiguedIcon from '../../../static/icons/fatigue.svg';

import LotteryCard from './LotteryCard';

export default {
	components: {
		LotteryCard
	},
	data() {
		return {
			fatiguedIcon,
			fineIcon,
			loading: false,
			checked: null,
		}
	},
	computed: {
		role() {
			return this.$store.state.route.query.role;
		},
		fineCount() {
			return 6;
		},
		fatiguedCount() {
			return this.$store.getters.febFatigueSum(this.role)
		},
	},
	methods: {
		lotteryDraw() {
			let lotteryPool = {
				fine: this.fineCount,
				fatigued: this.fatiguedCount,
			}
			let tempPool = [];
			for (let key in lotteryPool) {
				for (let i = 1; i <= lotteryPool[key]; i++) {
					tempPool.push(key);
				};
			};
			return tempPool[Math.floor(Math.random() * tempPool.length)];
		},
		onClick() {
			this.loading = true;
			this.checked = null;
			setTimeout(()=> {
				this.checked = this.lotteryDraw();
				this.loading = false;
			}, 700);
		}
	}
}
</script>
