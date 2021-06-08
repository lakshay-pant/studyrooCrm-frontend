import {
	deleteTaskError,
	deleteTaskPending,
	deleteTaskSuccess,
} from './deleteTaskSlice';

import { DeleteAllUserLeads } from '../../api/leadApi';

export const deleteTask = (id) => async (dispatch) => {
	try {
		dispatch(deleteTaskPending());

		const result = await DeleteAllUserLeads(id);
		result.status === 'success'
			? dispatch(deleteTaskSuccess(result.message))
			: dispatch(deleteTaskError(result.message));

		console.log(result);
	} catch (error) {
		dispatch(deleteTaskError(error.message));
	}
};
