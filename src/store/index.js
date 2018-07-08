import Vuex from 'vuex';
import Vue from 'vue';

import state from './state.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: state,
	mutations: {
		updateRole(state, role) {
			state.role = role;
		}
	}
});

export default store;