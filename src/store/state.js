import workersInfo from '../../configs/workersInfo.json';
import genDefaultScheduleData from '../../configs/scheduleTemplate.js';

const state = {
	workersInfo: workersInfo,
	dataSet: genDefaultScheduleData(),
	socketConnected: false,
};

export default state;