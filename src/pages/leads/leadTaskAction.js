import {
	leadTaskPending,
	leadTaskSuccess,
	leadTaskError,
} from './leadTaskSlice';

import { addLeadTask } from '../../api/leadApi';

export const leadTask = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(leadTaskPending());

		const result = await addLeadTask(frmDt, id);
		result.status === 'success'
			? dispatch(leadTaskSuccess(result.message))
			: dispatch(leadTaskError(result.message));

		console.log('RESULT TIME', result);
	} catch (error) {
		dispatch(leadTaskError(error.message));
	}
};
