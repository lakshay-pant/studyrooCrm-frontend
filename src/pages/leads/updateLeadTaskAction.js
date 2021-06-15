import {
	editLeadTaskPending,
	editLeadTaskError,
	editLeadTaskSuccess,
} from './updateLeadTaskSlice';

import { UpdateLeadTask } from '../../api/leadApi';

export const editLeadTask = (frmDt, id1, id2) => async (dispatch) => {
	try {
		dispatch(editLeadTaskPending());

		const result = await UpdateLeadTask(frmDt, id1, id2);
		result.status === 'success'
			? dispatch(editLeadTaskSuccess(result.message))
			: dispatch(editLeadTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(editLeadTaskError(error.message));
	}
};
