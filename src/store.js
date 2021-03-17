import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./components/login/loginSlice"
import signUpReducer from "./components/signup/signupSlice"
import userReducer from "./pages/dashboard/userSlice"
import addStudent from "./components/add-student-form/addStudentSlice"
import addTask from "./pages/addTask/addTaskSlice"
import allStudent from "./pages/allStudents/allStudentSlice"

const store = configureStore({
    reducer: {
        login:loginReducer,
        signUp:signUpReducer,
        user: userReducer,
        addStudent:addStudent,
        addTask:addTask,
        allStudent:allStudent
    },
  })
  
  export default store