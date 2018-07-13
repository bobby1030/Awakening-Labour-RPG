import Vuex from 'vuex';
import Vue from 'vue';

import state from './state.js';
import createWebSocketPlugin from './createWebSocketPlugin.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: state,
	mutations: {
		updateRole(state, role) {
			state.role = role;
		},
		updateDisplayMonth(state, value) {
			state.displayMonth = value;
		},
		updateInputData(state, configs) {
			state.dataSet[configs.month][configs.week].data[configs.worker.id][configs.name] = configs.value;
		},
		updateStrike(state, configs) {
			state.dataSet[configs.month][configs.week].columns[configs.index].strike = configs.value;
		},
		updateBonus(state, configs) {
			state.dataSet[configs.month][configs.week].columns[configs.index].bonus = configs.value;
		},
		SOCKET_ONOPEN(state) {
			state.socketConnected = true;
		},
		SOCKET_ONCLOSE(state) {
			state.socketConnected = false;
		},
		SOCKET_ONMESSAGE(state, remoteState) {
			Object.assign(state.dataSet, remoteState);
		}
	},
	getters: {
		weeklyIncome: (state) => (month, week) => {
			let weeklyDataSet = state.dataSet[month][week];
			let sumIncome = 0;
			let incomePerHour = 30;

			weeklyDataSet.columns.forEach((column) => {
				let strikePunishment = column.strike ? 0.75 : 1;
				if (column.name != 'salary') {
					for (let workerName in weeklyDataSet.data) {
						sumIncome += weeklyDataSet.data[workerName][column.name] * column.multiplier * strikePunishment * incomePerHour;
					}
					sumIncome += column.bonus || 0;
				}
			});

			return sumIncome;
		},
		weeklyProfit: (state, getters) => (month, week) => {
			let weeklyDataSet = state.dataSet[month][week];
			let sumIncome = getters.weeklyIncome(month, week);
			let sumSalary = 0;

			weeklyDataSet.columns.forEach((column) => {
				for (let workerName in weeklyDataSet.data) {
					if (column.name != 'salary') {
						sumSalary += weeklyDataSet.data[workerName]['salary'] * weeklyDataSet.data[workerName][column.name];
					}
				}
			})

			return sumIncome - sumSalary;
		},
		monthlyProfit: (state, getters) => (month) => {
			let monthlyDataSet = state.dataSet[month];
			let sumProfit = 0;

			for (let week = 1; week < monthlyDataSet.length; week++) {
				sumProfit += getters.weeklyProfit(month, week);
			};

			return sumProfit;
		}
	},
	plugins: [createWebSocketPlugin(),]
});

export default store;