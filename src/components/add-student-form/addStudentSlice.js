import { createSlice } from "@reduxjs/toolkit"



const initialState={
    isLoading:false,
    isStore:false,
    error:""

}

const addStudentSlice=createSlice({
    name:"addStudent",
    initialState,
    reducers:{
        addStudentPending:(state)=>{
            state.isLoading=true
        },
        addStudentSuccess:(state)=>{
            state.isLoading=false
            state.isStore=true
            state.error=""

        },
        addStudentFail:(state,{payload})=>{
            state.isLoading=false
            state.error=payload

        },
    }
})

const {reducer,actions}=addStudentSlice

export const {addStudentPending,addStudentSuccess,addStudentFail}=actions
export default reducer