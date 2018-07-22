import workersInfo from '../../configs/WorkersInfo.json';
import genDefaultScheduleData from '../../configs/ScheduleTemplate.js';

const state = {
	workersInfo: workersInfo,
	dataSet: genDefaultScheduleData(),
	socketConnected: false,
};

export default state;