import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadingLead: false,
	statusLead: '',
	messageLead: '',
};

const leadTaskSlice = createSlice({
	name: 'leadTask',
	initialState,
	reducers: {
		leadTaskPending: (state) => {
			state.isLoadingLead = true;
		},
		leadTaskSuccess: (state, { payload }) => {
			state.isLoadingLead = false;
			state.statusLead = 'success';
			state.messageLead = payload;
		},
		leadTaskError: (state, { payload }) => {
			state.isLoadingLead = false;
			state.statusLead = 'error';
			state.messageLead = payload;
		},
	},
});

const { reducer, actions } = leadTaskSlice;

export const { leadTaskPending, leadTaskSuccess, leadTaskError } = actions;

export default reducer;
