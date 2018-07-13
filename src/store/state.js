import genDefaultScheduleData from '../../configs/scheduleTemplate.js';

const state = {
	workersInfo: [
		{
			id: 'empA',
			color: 'blue',
			name: '魷魚哥'
		},
		{
			id: 'empB',
			color: 'teal',
			name: '派星星'
		},
		{
			id: 'empC',
			color: 'green',
			name: '泡芙阿阿'
		},
		{
			id: 'empD',
			color: 'olive',
			name: '海綿寶貝'
		}
	],
	dataSet: genDefaultScheduleData(),
	socketConnected: false,
};

export default state;