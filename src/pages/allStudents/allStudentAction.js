import {
    fetchStudentLoading,
    fetchStudentSuccess,
    fetchStudentFail
    
  } from "./allStudentSlice";
  
  import {
    getAllStudents
  } from "../../api/studentApi";
  
  export const fetchAllStudents = () => async (dispatch) => {
    dispatch(fetchStudentLoading());
    try {
      const result = await getAllStudents();
      result.data.result.length &&
        dispatch(fetchStudentSuccess(result.data.result));
    } catch (error) {
      dispatch(fetchStudentFail(error.message));
    }
  };