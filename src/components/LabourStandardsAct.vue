<template>
	<div>
		<h2 is="sui-header">勞ㄐ法</h2>
		<sui-grid>
			<sui-grid-row>
				<sui-grid-column width="twelve">
					<section v-for="articleItem in actData" class="article" :id="`section-${articleItem.article}`">
						<h3 is="sui-header">第 {{articleItem.article}} 條</h3>
						<p>{{articleItem.content}}</p>
					</section>
				</sui-grid-column>
				<sui-grid-column width="four">
					<div id="articleMenu">
						<sui-menu secondary vertical fluid>
    						<sui-menu-item link v-for="articleItem in actData" v-scroll-to="`#section-${articleItem.article}`">
								&sect; {{articleItem.article}}
								<div class="itemDesc">{{articleItem.content}}</div>
							</sui-menu-item>
						</sui-menu>
					</div>
				</sui-grid-column>
			</sui-grid-row>
		</sui-grid>
	</div>
</template>
<script>
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import actData from '../../configs/LabourStandardsAct.json';

Vue.use(VueScrollTo, {
	offset: -10,
});

export default {
	computed: {
		actData() {
			return actData;
		}
	}
}
</script>
<style scoped>
section.article {
	margin-bottom: 2em;
}

section.article > p {
	white-space: pre-wrap;
	line-height: 1.7em;
}

#articleMenu {
	position: sticky;
	top: -1px;
}

#articleMenu .itemDesc {
	display: block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-top: 5px;

	font-size: 95%;
	color: #9c9c9c;
}
</style>
