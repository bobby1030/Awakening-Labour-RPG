<template>
	<div>
		<h2 is="sui-header">勞ㄐ法</h2>
		<sui-grid celled="internally">
			<sui-grid-row>
				<sui-grid-column width="four">
					<h3 is="sui-header">目錄</h3>
					<div id="articleMenu">
						<sui-menu secondary vertical fluid>
    						<sui-menu-item link v-for="articleItem in actData" v-scroll-to="`#section-${articleItem.article}`" @click="onArticleMenuClick(articleItem.article)">
								&sect; {{articleItem.article}}
								<div class="itemDesc">{{articleItem.content}}</div>
							</sui-menu-item>
						</sui-menu>
					</div>
				</sui-grid-column>
				<sui-grid-column width="twelve">
					<section v-for="articleItem in actData" :class="{article: true, active: isActiveArticle(articleItem.article)}" :id="`section-${articleItem.article}`">
						<h3 is="sui-header">第 {{articleItem.article}} 條</h3>
						<p>{{articleItem.content}}</p>
					</section>
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
	data() {
		return {
			activeArticle: null,
		}
	},
	computed: {
		actData() {
			return actData;
		}
	},
	methods: {
		isActiveArticle(artNum) {
			if (this.activeArticle === artNum) {
				return true;
			} else {
				return false;	
			}
		},
		onArticleMenuClick(artNum) {
			this.activeArticle = null;
			setTimeout(()=>{this.activeArticle = artNum;}, 100);
			
		}
	}
}
</script>
<style scoped>
@keyframes blink {
	0% {
		background-color: transparent
	}
	20% {
		background-color: rgba(0, 0, 0, 0.1);
	}
	80% {
		background-color: rgba(0, 0, 0, 0.1);
	}
	100% {
		background-color: transparent
	}
}

section.article {
	margin-bottom: 2em;
	padding: 0.8em 1em;
	border-radius: 5px;
}

section.article.active {
	animation-name: blink;
	animation-iteration-count: 1;
	animation-timing-function: cubic-bezier(0,.41,1,.59);
	animation-duration: 0.6s;
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
