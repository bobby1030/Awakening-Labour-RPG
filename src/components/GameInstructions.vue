<template>
	<div>
		<h2 is="sui-header">遊戲說明</h2>
		<sui-grid celled="internally">
			<sui-grid-row>
				<sui-grid-column width="four">
					<h3 is="sui-header">目錄</h3>
					<div id="instructionsMenu">
						<sui-menu secondary vertical fluid>
							<sui-menu-item link v-for="section in sections" v-scroll-to="section.target">
								&sect; {{section.name}}
							</sui-menu-item>
						</sui-menu>
					</div>
				</sui-grid-column>
				<sui-grid-column width="twelve">
					<ol>
						<li id="section1">你手中的背景資料就等同於你扮演的角色所擁有的記憶，所以也請務必不要說「我的資料這樣說……」而是「我記得是……」。</li>
						<li id="section2">你獲得的所有資訊，請務必自行斟酌是否要向他人揭露；表面上看起來是合作關係的夥伴，可能與你目的相左。（註：需要注意，勞資雙方的公司規定不是同一版，因為蝦堡王總部給店主和員工的注意事項不同）</li>
						<li id="section3">你的遊戲目標是有順序性的，這裡就是真實的人生，這些目標是你的角色在心中的排序，數字越小代表越重要，不過，遊戲中並沒有明確定義何謂輸贏，要作任何決定都是你們可以自行考量的。</li>
						<li id="section4">私下的金錢交易是允許的，但任何金錢上的借貸必須在遊戲結束時結算。</li>
						<li id="section5">雙方內部私下交談無限制，資方與勞方皆有請求與對方私下談話的權利，但資方有權拒絕，勞方沒有。在對話參與者皆同意之情況下，得要求無關人士迴避。</li>
						<li id="section6">遊戲進行程序：
							<ol>
								<li>遊戲開始：雙方查看上週班表及遊戲細部規則，10 分鐘後資方公布第一週班表及各自時薪。</li>
								<li>每週進行流程：
									<ul>
										<li>上班前：</li>
										<ul class="steps">
											<li>資方公布本週班表及各自時薪</li>
											<li>勞工視意願遞交調整要求或跳過（ex: 我希望降低總值班時數）</li>
											<li>資方視情況依要求調整並公布新班表</li>
										</ul>
										<li>上班中：</li>
										<ul class="steps">
											<li>本階段進行 8 分鐘。</li>
											<li>勞工彼此自由對話、行動（e.g. 玩耍、進行宗教儀式）、請求與資方對話對話或提出勞動申訴，以及討論是否進行罷工等，資方排下週班表或要求勞方對話，雙方皆可提出勞資會議。</li>
										</ul>
										<li>上班後：</li>
										<ul class="steps">
											<li>勞方進行疲勞檢定（無論當週是否上班，籤袋內有<span class="block">破病</span>籤就需進行）</li>
											<li>資方發週工資給個別員工</li>
											<li>員工繳交信用卡帳單（每週 400 元）</li>
											<li>接續<span class="block">上班前</span></li>
										</ul>
									</ul>
								</li>
							</ol>
						</li>
						<sui-message id="section6-1">
							<h4>疲勞檢定：</h4>
							<ol>
								<li>
									每滿足下列條件中一條將感到疲勞，並由系統放一張<span class="block">破病</span>籤進籤袋，違反同一條多次不重複計算（即最多加入 3 張）
									<ol>
										<li>任意一日工作時間超過 8 小時</li>
										<li>一週休假日不足二日（實際工作日數 ≧ 6）</li>
										<li>一週工作時間超過 40 小時</li>
									</ol>
								</li>
								<li>抽出一張籤，若為<span class="block">沒事兒</span>則無任何影響，若為<span class="block">破病</span>則得病，必須就醫治療否則無法工作，診療費為 150 貝殼幣</li>
								<li>註：系統會將抽出的籤放回籤袋中</li>
							</ol>
						</sui-message>
						<li id="section7">
							工會與勞資協商會議：
							<ol>
								<li>由工會或資方提起協商需求，另一方必須答應，每周最多進行一次</li>
								<li>工會會長代表工會與正副店長到總部進行協商，其餘人不可旁觀、參與會議</li>
								<li>工會會長僅代表工會，故工會會長有義務替全體工會成員爭取權益、資方沒有義務協商提升非工會成員勞動權益之條件</li>
								<li>雙方協議之內容具有一定之強制性</li>
								<li>會長重選規則：申請人必須具名並且提出具體之不適任理由，經過多數同意後始得通過</li>
							</ol>
						</li>
						<li id="section8">
							勞檢程序：
							<ul class="steps">
								<li>勞工主動收集證據向勞檢人員申訴（有效證據須於 3 週內提出）</li>
								<li>勞檢單位視狀況及證據決定受理與否</li>
								<li>逐項審查，決定罰款金額 或 公告不受理</li>
								<li>通知資方，處以罰鍰</li>
							</ul>
						</li>
						<li id="section9">罷工：以日為單位，詳情見〈罷工流程〉</li>
						<li id="section10">
							註記伴侶：
							<p>為一種法定結合制度，具有共同持續並穩定生活（同居）的特性，存在於兩人之間，如伴侶般的生活，可共同進行生育並同時獲得孩童監護權；伴侶雙方無忠誠義務，也無扶養義務，但雙方之經濟狀況可在彼此同意之下共同計算，並可由單方進行關係解消。</p>
						</li>
						<li id="section11">
							水母教教徒：
							<ol>
								<li>加入水母教後，教徒將會得到永遠的印記，無法抹除，水母大神會從此永遠關注你的一言一行。</li>
								<li>每日凌晨及下午 4：20 時必須向水母真神進行 5 分鐘以上的禱告。</li>
								<li>一切工作事項必須使用左手處理，包含寫字、吃飯等。</li>
								<li>所有水母教徒都可以召喚水母真神，召喚者可以問任何他想知道的問題，水母真神都會給予他的信徒解答（非水母教徒將無法得知該資訊）。</li>
							</ol>
						</li>
						<sui-message id="section11-1">
							<h4>水母真神召喚條件：</h4>
							<p>本身為水母教徒，找到一名信眾和你一起進行召喚儀式，和你的夥伴一起一人一字輪流、重複且快速地唸出神秘咒語，心裡默想著你最愛的食物，時機到了，水母神自然顯靈。神秘咒語為五字句子，由三個古老的謎語組成，想確認謎語的解答，可以諮詢變幻莫測的智者。</p>
							
							<h5>謎語：</h5>
							<ol>
								<li>魷魚的長處是什麼？</li>
								<li>海星對普世做了什麼？</li>
								<li>204年11月28日下午4時20分42秒，蝦堡王餐廳誰沒有認真工作？</li>
							</ol>
						</sui-message>
						<sui-message id="section11-2">
							<h4>水母三誡：</h4>
							<ol class="serif">
								<li>吾真心望爾愛吾、皈依於吾，萬能之水母真神，吾將引領爾之呆腦獲得大麻般的幸福。</li>
								<li>勤奮工作。若汝做了半個屁股的工作，則汝將得到半個屁股。</li>
								<li>刺刺族的族人們，爾等祖先曾犯下滔天大罪，爾等必謹記爾之罪在心，不可貪，不可淫。至於剌剌族的，爾等可以。</li>
							</ol>
						</sui-message>
					</ol>
				</sui-grid-column>

			</sui-grid-row>
		</sui-grid>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueScrollTo from 'vue-scrollto';

	Vue.use(VueScrollTo, {
		offset: -10,
	});

	export default {
		data() {
			return {
				sections: [
					{
						name: '1.',
						target: '#section1'
					},
					{
						name: '2.',
						target: '#section2'
					},
					{
						name: '3.',
						target: '#section3'
					},
					{
						name: '4.',
						target: '#section4'
					},
					{
						name: '5.',
						target: '#section5'
					},
					{
						name: '6. 遊戲進行程序',
						target: '#section6'
					},
					{
						name: '6-1. 疲勞檢定',
						target: '#section6-1'
					},
					{
						name: '7. 工會與勞資協商會議',
						target: '#section7'
					},
					{
						name: '8. 勞檢程序',
						target: '#section8'
					},
					{
						name: '9. 罷工',
						target: '#section9'
					},
					{
						name: '10. 註記伴侶',
						target: '#section10'
					},
					{
						name: '11. 水母教教徒',
						target: '#section11'
					},
					{
						name: '11-1. 水母真神召喚條件',
						target: '#section11-1'
					},
					{
						name: '11-2. 水母三誡',
						target: '#section11-2'
					},
				]
			}
		},
	}
</script>
<style scoped>
	#instructionsMenu {
		position: sticky;
		top: -1px;
	}

	span.block {
		margin: 0 0.3em;
		padding: 2px 8px;
		border-radius: 3px;
		color: #FFF;
		background-color: #7a7a7a;
		font-size: 0.9em;
	}

	p, li {
		line-height: 1.8em;
	}

	li {
		margin: 0.5em 0;
		padding-left: 0.5em;
	}

	ol > ol {
		list-style-type: upper-latin
	}

	ul.steps {
		list-style-type: '→'
	}
</style>