<template>
	<div id="flowChart">
		<img :src="strikeFlowChart">
	</div>
</template>
<script>
import strikeFlowChart from '../../static/plots/strikeFlowChart.svg';

export default {
	data() {
		return {
			strikeFlowChart,
		}
	}
}
</script>
<style>
#flowChart {
	display: flex;
	justify-content: center;
}
</style>

