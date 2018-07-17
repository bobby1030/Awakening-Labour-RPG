import Vuex from 'vuex';
import Vue from 'vue';

import state from './state.js';
import createWebSocketPlugin from './createWebSocketPlugin.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: state,
	mutations: {
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
		updateFatigue(state, configs) {
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
		},
		fatigueSum: (state) => (workerID) => {
			// month, week, worker
			let fatigueSum = 0;

			for (let month in state.dataSet) {
				for (let week = 1; week <= 4; week++) {
					let temp = JSON.parse(JSON.stringify(state.dataSet[month][week].data[workerID]));
					let weeklyFatigueSum = 0;
					let overEightHours = 0;
					let weekDaysSum = 0;
					let weekHoursSum = 0;

					for (let key in temp) {
						if (key != 'salary') {
							if (temp[key] > 8) {
								overEightHours = 1;
							}
							if (temp[key]) {
								weekDaysSum++;
							}
							weekHoursSum += temp[key];
						}
					};

					weeklyFatigueSum += overEightHours;
					if (weekDaysSum > 5) {
						weeklyFatigueSum++;
					}
					if (weekHoursSum > 40) {
						weeklyFatigueSum++;
					}

					fatigueSum += weeklyFatigueSum;
				}
			}	
			
			return fatigueSum;
		}
	},
	plugins: [createWebSocketPlugin(),]
});

export default store;