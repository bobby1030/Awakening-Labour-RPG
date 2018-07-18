let scheduleData = {
	Jan: [], // 4 weeks
	Feb: [], // 6 weeks
};

// {columns: [], data: {}}
// scheduleData['Jan'][4].data['empA']['salary']
// scheduleData['Jan'][4].data[workersInfo[n].id][scheduleData['Jan'][4].columns[n].name]

let tableColumns = [
	{name: 'salary', text: '時薪', unit: '元', tag: {color: null, text: null}, multiplier: 1}, // [0] 										// [0]
	{name: 'Sun', text: '日', unit: '小時', tag: {color: 'pink', text: '尖峰'}, multiplier: 1, strike: 1, bonus: NaN}, // [1]
	{name: 'Mon', text: '一', unit: '小時', tag: {color: null, text: null}, multiplier: 1, strike: 1, bonus: NaN}, // [2]
	{name: 'Tue', text: '二', unit: '小時', tag: {color: null, text: null}, multiplier: 1, strike: 1, bonus: NaN}, // [3]
	{name: 'Wed', text: '三', unit: '小時', tag: {color: null, text: null}, multiplier: 1, strike: 1, bonus: NaN}, // [4]
	{name: 'Thu', text: '四', unit: '小時', tag: {color: null, text: null}, multiplier: 1, strike: 1, bonus: NaN}, // [5]
	{name: 'Fri', text: '五', unit: '小時', tag: {color: null, text: null}, multiplier: 1, strike: 1, bonus: NaN}, // [6]
	{name: 'Sat', text: '六', unit: '小時', tag: {color: 'pink', text: '尖峰'}, multiplier: 1, strike: 1, bonus: NaN}, // [7]
];

let weeklyTemplate = {
	empA: {salary: 0, Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0},
	empB: {salary: 0, Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0},	
	empC: {salary: 0, Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0},	
	empD: {salary: 0, Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0},	
};



let specialCases = [
	{
		month: 'Feb',
		week: '3',
		startColumn: 5,
		stopColumn: 7,
		content: {
			multiplier: 1.5,
			tag: {
				color: null,
				text: '愛耳日連假',
			}
		}
	},
	{
		month: 'Feb',
		week: '4',
		startColumn: 3,
		stopColumn: 7,
		content: {
			multiplier: 1,
			tag: {
				color: 'pink',
				text: '30 週年慶',
			}
		}
	},
	{
		month: 'Feb',
		week: '5',
		startColumn: 4,
		stopColumn: 6,
		content: {
			multiplier: 1.5,
			tag: {
				color: null,
				text: '世界詩歌日連假',
			}
		}
	},
];

let deepClone = function(content) {
	return JSON.parse(JSON.stringify(content));
};

let genDefaultScheduleData = function (inputCase = specialCases) {
	let temp = deepClone(scheduleData);

	for (let month in scheduleData) {
		temp[month].push(null); // week 0

		for (var i = 1; i<=6; i++) {
			temp[month].push({columns: [], data: {}});
			temp[month][i]['columns'] = temp[month][i]['columns'].concat(deepClone(tableColumns));
			Object.assign(temp[month][i]['data'], deepClone(weeklyTemplate));
			// fill in data structure
		}
	}

	inputCase.forEach(element => {
		for(let n = element.startColumn; n <= element.stopColumn; n++) {
			Object.assign(temp[element['month']][element['week']].columns[n], deepClone(element.content));
		}
	});	

	return temp;
};

export default genDefaultScheduleData;