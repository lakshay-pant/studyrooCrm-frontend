import {
    addStudentPending,
    addStudentSuccess,
    addStudentError,
  } from "./addStudentSlice";
  
  import { createNewStudent } from "../../api/studentApi";
  
  export const addStudent = (frmDt) => async (dispatch) => {
    try {
      dispatch(addStudentPending());
  
      const result = await createNewStudent(frmDt);
      result.status === "success"
        ? dispatch(addStudentSuccess(result.message))
        : dispatch(addStudentError(result.message));
  
      console.log(result);
    } catch (error) {
      dispatch(addStudentError(error.message));
    }
  };