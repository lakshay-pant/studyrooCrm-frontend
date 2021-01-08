import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./components/login/loginSlice"
import signUpReducer from "./components/signup/signupSlice"

const store = configureStore({
    reducer: {
        login:loginReducer,
        signUp:signUpReducer
    },
  })
  
  export default store