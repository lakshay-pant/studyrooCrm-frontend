import {
	editLeadError,
	editLeadPending,
	editLeadSuccess,
} from './editLeadSlice';

import { UpdateAllUserLeads } from '../../api/leadApi';

export const editLead = (frmDt, id) => async (dispatch) => {
	try {
		dispatch(editLeadPending());
		console.log('id dekh lo', id);
		const result = await UpdateAllUserLeads(frmDt, id);
		result.status === 'success'
			? dispatch(editLeadSuccess(result.message))
			: dispatch(editLeadError(result.message));

		console.log('hell', result);
	} catch (error) {
		dispatch(editLeadError(error.message));
	}
};
