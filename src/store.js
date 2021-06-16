import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./components/login/loginSlice"
import signUpReducer from "./components/signup/signupSlice"
import userReducer from "./pages/dashboard/userSlice"
import addStudent from "./components/add-student-form/addStudentSlice"
import addTask from "./pages/addTask/addTaskSlice"
import allStudent from "./pages/allStudents/allStudentSlice"
import getUser from "./components/getAllTheUsers/getUsersSlice"
import editStudent from "./components/student-overview/studentOverviewSlice"
import deleteStudent from "./components/student-overview/studentOverviewDeleteSlice"
import addLead from "./pages/leads/addLeadSlice"
import leadList from "./pages/leads/showLeadSlice"
import leadTask from './pages/leads/leadTaskSlice';
import singleLead from './pages/leads/getSingleLeadSlice';
import deleteLead from './pages/leads/deleteLeadSlice';
import deleteTask from './pages/leads/deleteTaskSlice';
import deleteLeadTask from './pages/leads/deleteLeadTaskSlice';
import updateLeadTask from './pages/leads/updateLeadTaskSlice';
import getTask from "./pages/taskList/taskListgetSlice"
import deletetask from "./pages/taskList/taskListdeleteSlice"
import editTask from "./pages/taskList/taskListSlice"
import editUser from "./pages/profile/profileeditSlice"


const store = configureStore({
    reducer: {
        login:loginReducer,
        signUp:signUpReducer,
        user: userReducer,
        addStudent:addStudent,
        addTask:addTask,
        allStudent:allStudent,
        getUser:getUser,
        editStudent:editStudent,
        deleteStudent:deleteStudent,
        addLead:addLead,
        getTask:getTask,
        editTask:editTask,
        deletetask:deletetask,
        leadList:leadList,
        editUser:editUser,
        leadTask:leadTask,
        singleLead:singleLead,
        deleteLead:deleteLead,
        deleteLeadTask:deleteLeadTask,
        updateLeadTask:updateLeadTask,
    },
  })
  
  export default store