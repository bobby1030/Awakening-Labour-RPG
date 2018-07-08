<template>
	<sui-list relaxed class="ordered">
		<sui-list-item v-for="item in rules">{{ item }}</sui-list-item>
	</sui-list>
</template>

<script>
	export default {
		data() {
			return {
				rules: ['每天必須排班共16小時始可營業，粉底為尖峰日，必須營業並且至少排班共 26 小時。',
					'勞ㄐ法規定國定假日必須放假，但若營業，收益為 1.5 倍。',
					'若週營業未滿五天，總公司將前來視察。',
					'若有員工意圖發起罷工但失敗（投票未過），公司收益 -25%，且可能收到 0~3 則客訴，若累積 5 則以上，總公司將前來視察。',
					'員工疲累標準：單日上班超過 8 小時、週工作日超過 5 天、週工時超過 40 小時。',
					'總公司體諒剌剌族同仁多有扶養家庭之經濟壓力，故提供多元的加薪及升遷機會給所有剌剌族族人，鼓勵各位多多爭取機會。'
				]
			}
		}
	}
</script>