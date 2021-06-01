import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingDelete: false,
	statusDelete: '',
	messageDelete: '',
};

const deleteStudentSlice = createSlice({
	name: 'deleteStudent',
	initialState,
	reducers: {
		deleteStudentPending: (state) => {
			state.isLoadingDelete = true;
		},
		deleteStudentSuccess: (state, { payload }) => {
			state.isLoadingDelete = false;
			state.statusDelete = 'success';
			state.messageDelete = payload;
		},
		deleteStudentError: (state, { payload }) => {
			state.isLoadingDelete = false;
			state.statusDelete = 'error';
			state.messageDelete = payload;
		},
		deleteResetSuccessMSg: (state) => {
			state.isLoadingDelete = true;
			state.messageDelete = '';
		},
	},
});

const { reducer, actions } = deleteStudentSlice;

export const {
	deleteStudentPending,
	deleteStudentSuccess,
	deleteStudentError,
	deleteResetSuccessMSg,
} = actions;

export default reducer;
