import {
    addLeadPending,
    addLeadSuccess,
    addLeadError,
  } from "./addLeadSlice";
  
  import { createNewLead } from "../../api/leadApi";
  
  export const addLead = (frmDt) => async (dispatch) => {
    try {
      dispatch(addLeadPending());
  
      const result = await createNewLead(frmDt);
      result.status === "success"
        ? dispatch(addLeadSuccess(result.message))
        : dispatch(addLeadError(result.message));
  
      console.log(result);
    } catch (error) {
      dispatch(addLeadError(error.message));
    }
  };