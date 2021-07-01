import {
	userStudentTaskError,
	userStudentTaskPending,
	userStudentTaskSuccess,
} from './addTaskUserSlice';

import { addUserStudentTask } from '../../api/userApi';

export const userStudentTask = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(userStudentTaskPending());

		const result = await addUserStudentTask(frmDt, id);
		result.status === 'success'
			? dispatch(userStudentTaskSuccess(result.message))
			: dispatch(userStudentTaskError(result.message));
	} catch (error) {
		dispatch(userStudentTaskError(error.message));
	}
};
