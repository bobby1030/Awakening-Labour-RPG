import Vuex from 'vuex';
import Vue from 'vue';

import state from './state.js';

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
			state.dataSet[configs.month][configs.week].data[configs.worker.id][configs.name] = configs.value
		}
	},
	getters: {
		weeklyIncome: (state) => (month, week) => {
			let weeklyDataSet = state.dataSet[month][week];
			let sumIncome = 0;
			let incomePerHour = 30;

			weeklyDataSet.columns.forEach((column) => {
				for (let workerName in weeklyDataSet.data) {
					if (column.name != 'salary') {
						sumIncome += weeklyDataSet.data[workerName][column.name] * column.multiplier * incomePerHour
					}
				}
			})

			return sumIncome;
		},
		weeklyProfit: (state, getters) => (month, week) => {
			let weeklyDataSet = state.dataSet[month][week];
			let sumIncome = getters.weeklyIncome(month, week);
			let sumSalary = 0;

			weeklyDataSet.columns.forEach((column) => {
				for (let workerName in weeklyDataSet.data) {
					if (column.name != 'salary') {
						sumSalary += weeklyDataSet.data[workerName]['salary'] * weeklyDataSet.data[workerName][column.name]
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
	}
});

export default store;