import Vue from 'vue';
import SemanticUIVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App.vue';

Vue.use(SemanticUIVue);
new Vue({
	el: '#app',
	components: {App},
});