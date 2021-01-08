import { createSlice } from "@reduxjs/toolkit"



const initialState={
    isLoading:false,
    isStore:false,
    error:""

}

const signUpSlice=createSlice({
    name:"signUp",
    initialState,
    reducers:{
        signUpPending:(state)=>{
            state.isLoading=true
        },
        signUpSuccess:(state)=>{
            state.isLoading=false
            state.isStore=true
            state.error=""

        },
        signUpFail:(state,{payload})=>{
            state.isLoading=false
            state.error=payload

        },
    }
})

const {reducer,actions}=signUpSlice

export const {signUpPending,signUpSuccess,signUpFail}=actions
export default reducer