<template>
	<sui-list relaxed class="ordered">
		<sui-list-item v-for="item in getRules(role)" :key="getRules(role).indexOf(item)">
			{{ item }}
		</sui-list-item>
	</sui-list>
</template>

<script>
	export default {
		data() {
			return {
				rules: {
					employer: [
						'每天必須排班共 16 小時始可營業，粉底為尖峰日，必須營業並且至少排班共 26 小時。',
						'灰底為法定假日，勞ㄐ法規定法定假日必須放假，但若營業，收益為 1.5 倍。',
						'若週營業未滿五天，總公司將前來視察並視情況懲罰。',
						'若有員工意圖發起罷工且成功，該日收益歸零；若失敗（投票未過），公司收益-25%。',
						'每位員工每日值班時數不得超過 15 小時，每週總值班時數不得超過 56 小時，若違反，總公司將前來視察並強迫調整班表。',
						'總公司體諒剌剌族同仁多有扶養家庭之經濟壓力，故提供多元的加薪及升遷機會給所有剌剌族族人，鼓勵各位多多爭取機會。'
					],
					employee: [
						'資方每週排定班表，員工可單方面提出調整意見，但資方無進行討論或接受要求之義務。',
						'資方每週調整每位員工各自的時薪（基本時薪 10 貝殼幣），若進行降薪需取得勞工檢查機構核准或取得員工個人同意。',
						'每位員工每週皆必須有兩日休假，否則為違法。',
						'若員工表現不稱職，資方可進行解雇。',
						'事業單位違反勞動基準法，經申訴後，勞檢機構得處以罰鍰或強迫事業單位為全體員工加薪。',
						'其餘勞動相關規範，請參見〈勞動ㄐ準法〉。',
						'總公司體諒剌剌族同仁多有扶養家庭之經濟壓力，故提供多元的加薪及升遷機會給所有剌剌族族人，鼓勵各位多多爭取機會。'
					]
				}
			}
		},
		computed: {
			role() {
				return this.$store.state.route.query.role;
			}
		},
		methods: {
			getRoleGroup(role) {
				return this.$store.getters.roleGroup(role);
			},
			getRules(role) {
				if (this.getRoleGroup(role) === 'employee') {
					return this.rules.employee;
				} else if (this.getRoleGroup(role) === 'employer') {
					return this.rules.employer;
				} else if (this.getRoleGroup(role) === 'GM') {
					return this.rules.employee.concat(this.rules.employer)
				}
			}
		}
	}
</script>