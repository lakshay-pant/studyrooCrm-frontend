import {
	studentTaskPending,
	studentTaskSuccess,
	studentTaskError,
} from './addStudentTaskSlice';

import { addStudentTask } from '../../api/studentApi';

export const studentTaskAdd = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(studentTaskPending());

		const result = await addStudentTask(frmDt, id);
		result.status === 'success'
			? dispatch(studentTaskSuccess(result.message))
			: dispatch(studentTaskError(result.message));
	} catch (error) {
		dispatch(studentTaskError(error.message));
	}
};
