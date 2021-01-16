import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./components/login/loginSlice"
import signUpReducer from "./components/signup/signupSlice"
import userReducer from "./pages/dashboard/userSlice"
const store = configureStore({
    reducer: {
        login:loginReducer,
        signUp:signUpReducer,
        user: userReducer,
    },
  })
  
  export default store