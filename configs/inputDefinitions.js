let inputDefinitions = [
	{
		columnName: 'salaryPerHour',
		description: '時薪',
		unit: '元',
		value: null,
		tag: '',
	},
	{
		columnName: 'SundayHours',
		description: '日',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: '尖峰',
		tagColor: 'pink'
	},
	{
		columnName: 'MondayHours',
		description: '一',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: ''
	},
	{
		columnName: 'TuesdayHours',
		description: '二',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: ''
	},
	{
		columnName: 'WednesdayHours',
		description: '三',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: ''
	},
	{
		columnName: 'ThursdayHours',
		description: '四',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: ''
	},
	{
		columnName: 'WednesdayHours',
		description: '五',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: ''
	},
	{
		columnName: 'SaturdayHours',
		description: '六',
		unit: '小時',
		multiplier: 1,
		value: null,
		tag: '尖峰',
		tagColor: 'pink'
	},
];

let specialCases = [
	{
		month: 'Feb',
		week: '2',
		startIndex: 1,
		stopIndex: 3,
		content:{
			multiplier: 1.5,
			tag: '世界無線電日連假',
			tagColor: null
		}
	},
	{
		month: 'Feb',
		week: '4',
		startIndex: 3,
		stopIndex: 5,
		content: {
			tag: '春季大特賣',
			tagColor: 'pink'
		}
	},
	{
		month: 'Mar',
		week: '2',
		startIndex: 3,
		stopIndex: 7,
		content: {
			tag: '蝦堡王30周年慶',
			tagColor: 'pink'
		}
	},
	{
		month: 'Mar',
		week: '3',
		startIndex: 4,
		stopIndex: 6,
		content: {
			multiplier: 1.5,
			tag: '世界詩歌日連假'
		}
	},
]



export {inputDefinitions, specialCases};