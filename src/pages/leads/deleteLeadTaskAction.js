import {
	deleteLeadTaskError,
	deleteLeadTaskPending,
	deleteLeadTaskSuccess,
} from './deleteLeadTaskSlice';

import { DeleteAllUserLeadsTask } from '../../api/leadApi';

export const deleteLeadTask = (id1, id2) => async (dispatch) => {
	try {
		dispatch(deleteLeadTaskPending());

		const result = await DeleteAllUserLeadsTask(id1, id2);
		result.status === 'success'
			? dispatch(deleteLeadTaskSuccess(result.message))
			: dispatch(deleteLeadTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteLeadTaskError(error.message));
	}
};
