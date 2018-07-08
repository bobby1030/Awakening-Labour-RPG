<template>
	<sui-list relaxed class="ordered">
		<sui-list-item v-for="item in getRules">{{ item.content }}</sui-list-item>
	</sui-list>
</template>

<script>
	export default {
		data() {
			return {
				rules: [
					{
						visibility: 'employer',
						content: '每天必須排班共16小時始可營業，粉底為尖峰日，必須營業並且至少排班共26小時'
					},
					{
						visibility: 'employer',
						content: '勞ㄐ法規定國定假日必須放假，但若營業，收益為1.5倍'
					},
					{
						visibility: 'employer',
						content: '若週營業未滿五天，總公司將前來視察'
					},
					{
						visibility: 'employer',
						content: '若有員工意圖發起罷工但失敗（投票未過），公司收益-25%，且可能收到0~3則客訴，若累積5則以上，總公司將前來視察'
					},
					{
						visibility: 'public',
						content: '總公司體諒剌剌族同仁多有扶養家庭之經濟壓力，故提供多元的加薪及升遷機會給所有剌剌族族人，鼓勵各位多多爭取機會'
					}
				]
			}
		},
		computed: {
			getRules() {
				return this.rules.filter((element) => {return element.visibility === this.$store.state.role || element.visibility === 'public'})
			}
		}
	}
</script>