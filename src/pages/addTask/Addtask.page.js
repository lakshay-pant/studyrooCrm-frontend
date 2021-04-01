import React,{useState} from 'react'
import "./addTask.style.css";
import {useDispatch, useSelector} from "react-redux"
import {addTaskPending,addTaskSuccess,addTaskError} from "./addTaskSlice"
import {
  Spinner,Alert
} from "react-bootstrap"
import {createNewTask} from "../../api/taskApi"
import {filterSerachStudent} from "../allStudents/allStudentAction"
import {filterSearchUser,fetchAllUsers} from "../../components/getAllTheUsers/getUsersAction"
import {fetchAllStudents} from "../allStudents/allStudentAction"
import { searchStudents } from '../allStudents/allStudentSlice';


export const Addtask = () => {
    const {searchStudentList  } = useSelector(
        (state) => state.allStudent
      );

      const {searchUserList } = useSelector(
        (state) => state.getUser
      );

      const {user } = useSelector(
        (state) => state.user
      );
      

    const dispatch=useDispatch()

    const { isLoading,
      status,
      message} = useSelector(
      (state) => state.addTask
    );
    
 
    const [taskName, setTaskName] = useState("");
    const [type, setType] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [studentAssign, setStudentAssign] = useState("");
    const [assignTo, setAssignTo] = useState("");

    const [userGroup, setUserGroup] = useState("");
    const [offices, setOffices] = useState("");
      
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
            case "taskName":
            setTaskName(value);
            break;
    
            case "type":
            setType(value);
            break;
    
            case "dueDate":
            setDueDate(value);
            break;
            case "taskDetails":
                setTaskDetails(value);
                break;

                case "assignTo":
                  setAssignTo(value);
                  dispatch(fetchAllStudents())
                
                  dispatch(filterSerachStudent(value))
                  break;
           
            case "studentAssign":
            setStudentAssign(value);
            dispatch(fetchAllUsers())
            dispatch(filterSearchUser(value));
            break;
    
           
        
            case "userGroup":
              setUserGroup(value);
              break;
    
              case "offices":
                setOffices(value);
                break;
        
             default:
            break;
        }
      };
    


      const handleOnTaskSubmit=async(e)=>{
        e.preventDefault()
        console.log(taskName)
        if (!taskName || !type||!dueDate||!studentAssign||!assignTo||!offices||!userGroup) {
          return alert("Fill up all the form!");
          
        }
      
        
        dispatch(addTaskPending())
    
        try{
    
    const isAuth=await createNewTask({taskName,type,dueDate,studentAssign,assignTo,offices,userGroup})
    console.log(isAuth)
    if(isAuth.status==="error"){
    return dispatch(addTaskError(isAuth.message))
    }
    dispatch(addTaskSuccess())
    
        }catch(error){
    dispatch(addTaskError(error.message))
    
        }
        console.log(taskName,type,dueDate,studentAssign,assignTo,offices,userGroup)
      }

 return(
    <div className="content-wrapper">
    <div class="maincontent-rightside add-student"> 
        <section class="maincontent">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="add-student">
                    <div class="add-text">
                        <div class="add-round">
                        <span><i class="fa fa-user-graduate"></i></span>
                    </div>
                    <small>  Add New Task</small>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        </section>

        <section class="addtask-from">
        

          <div class="container-fluid">
           <div class="new-task-bg">
           
               
           <form onSubmit={handleOnTaskSubmit} >
           
           
                    <div class="col-md-12">
                    {message && (
            <Alert variant={status==="success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
                    
                        <div class="headingdiv">What is your task about?</div>
                        <div class="form-bgclr">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                <label>Task Name</label>
                                <input type="text" class="form-control" placeholder="" name="taskName" value={taskName} onChange={handleOnChange}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Type</label>
                                    <select class="form-control" name="type" id="cars" onChange={handleOnChange} value={type}>
                                        <option>Call</option>
                                        <option >Client Meeting</option>
                                        <option >Event</option>
                                        <option >Follow up</option>
                                        <option >Sale</option>
                                        <option >Text Message</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                <label>Due Date*</label>
                                <input type="date" class="form-control" placeholder="" name="dueDate" value={dueDate} onChange={handleOnChange} />
                                </div>
                                <div class="form-group col-md-12">
                                <label>Task Details (comments)</label>
                                <textarea class="form-control" rows="5" name="taskDetails" value={taskDetails} onChange={handleOnChange}></textarea>
                               
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="headingdiv">Is your task related to a student?</div>
                            <div class="form-bgclr">
                                <div class="form-row"> 
                                <div class="form-group col-md-12">
                                    <label>Student</label>
                                   
                                    <textarea class="form-control" rows="1" name="assignTo" value={assignTo} onChange={handleOnChange}></textarea>
                                   {searchStudentList.length && searchStudentList[0].clientId==user._id? (<h1>My Students</h1>):(<h1>Other students</h1>)}
                                    {searchStudentList.length ? (    
          searchStudentList.map((row) => (
            <div class="student-search-data">
    <table>
       <thead>
         <tr>
           <td>
              <th><i class="fas fa-user-graduate"></i>My Student</th>
           </td>
           <td>
             <th>3 results</th>
           </td>
         </tr>
       </thead>
       <tbody>
         <tr><td><span>{row._id}</span></td>
             <td><p>{row.firstName}</p></td>
          </tr>
          
       </tbody>
    </table>
  </div>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No students
            </td>
          </tr>
        )}
                                </div>
                                </div>
                            </div>
                        </div>
                        


                        <div class="col-md-12">
                            
                            
                            <div class="form-bgclr">

                            <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="form-group ">
                                            <label>This task will be assigned to...</label>
                                            {isLoading && <Spinner variant="primary" animation="border" />}
                                            
                                            <textarea class="form-control" rows="1" name="studentAssign" value={studentAssign} onChange={handleOnChange}></textarea>
                                          {searchUserList.length ? (
          searchUserList.map((row) => (
            <tr key={row._id}>
              
              
              <td>{row.firstName}</td>
              
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No students
            </td>
          </tr>
        )}
                                        </div>
                                    </div>
                                </div>
                            
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label" for="exampleCheck1">
                                    Assign this task for users in groups or offices</label>
                            </div>
                            <div class="form-row"> 
                                <div class="form-group col-md-6">
                                    <label>User Groups</label>
                                    <input type="text" class="form-control" placeholder="selected" name="userGroup" value={userGroup} onChange={handleOnChange} />
                                </div>
                                
                                <div class="form-group col-md-6">
                                    <label>Offices</label>
                                    <input type="text" class="form-control" placeholder="All" name="offices" value={offices} onChange={handleOnChange}/> 
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label" for="exampleCheck1">This task is urgent (should be completed as soon as possible)!</label>
                                </div>
                            </div> 
                            <div class="footersingbtn">
                                <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                            </div>
                            </div>
                        </div>
                </form>
            </div>
          </div>
        </section>
    </div>
 </div>
 )  
}