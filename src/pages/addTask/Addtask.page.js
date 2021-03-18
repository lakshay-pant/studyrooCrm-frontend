import React,{useState,useEffect} from 'react'
import "./addTask.style.css";
import {useDispatch, useSelector} from "react-redux"
import {addTaskPending,addTaskSuccess,addTaskError} from "./addTaskSlice"
import {
  Spinner,Alert
} from "react-bootstrap";
import {Link,useLocation} from "react-router-dom"
import {addTask} from "./addTaskAction"

import {createNewTask} from "../../api/taskApi"
export const Addtask = () => {

    const dispatch=useDispatch()
    const { isLoading, status, message } = useSelector(
        (state) => state.addTask
      );
      const location=useLocation()

    const [TaskName, setTaskName] = useState("");
    const [cars, setcars] = useState("");
    const [DueDate, setDueDate] = useState("");
    const [Taskdetails, setTaskdetails] = useState("");
    const [student, setstudent] = useState("");
    const [usergroup, setusergroup] = useState("Indian");
    const [offices, setoffices] = useState("");
      
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
          case "TaskName":
            setTaskName(value);
            break;
    
            case "cars":
                setcars(value);
            break;
    
            case "DueDate":
            setDueDate(value);
            break;
    
            case "Taskdetails":
            setTaskdetails(value);
            break;
    
            case "student":
            setstudent(value);
            break;
    
            case "usergroup":
              setusergroup(value);
              break;
    
              case "offices":
                setoffices(value);
                break;
        
             default:
            break;
        }
      };
    


      const handleOnTaskSubmit=async(e)=>{
        e.preventDefault()
        console.log(TaskName)
        if (!TaskName || !cars||!DueDate||!Taskdetails||!student||!usergroup||!offices) {
          return alert("Fill up all the form!");
          
        }
      
        
        dispatch(addTaskPending())
    
        try{
    
    const isAuth=await createNewTask({TaskName,cars,DueDate,Taskdetails,student,usergroup,offices})
    console.log(isAuth)
    if(isAuth.status=="error"){
    return dispatch(addTaskError(isAuth.message))
    }
    dispatch(addTaskSuccess())
    
        }catch(error){
    dispatch(addTaskError(error.message))
    
        }
        console.log(TaskName,cars,DueDate,Taskdetails,student,usergroup,offices)
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
                        <span><i class="fal fa-user-graduate"></i></span>
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
           {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}

           <form onSubmit={handleOnTaskSubmit} >
         <div class="col-md-12">
         
                        <div class="headingdiv">What is your task about?</div>
                        <div class="form-bgclr">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                <label>Task Name</label>
                                <input type="text" class="form-control" placeholder="" name="TaskName" value={TaskName} onChange={handleOnChange}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Type</label>
                                    <select class="form-control" name="cars" id="cars" onChange={handleOnChange} value={cars}>
                                        <option value="volvo">Follow up</option>
                                        <option value="saab">Female</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                <label>Due Date*</label>
                                <input type="date" class="form-control" placeholder="" name="DueDate" value={DueDate} onChange={handleOnChange} />
                                </div>
                                <div class="form-group col-md-12">
                                <label>Task Details (comments)</label>
                                <textarea class="form-control" rows="5" name="Taskdetails" value={Taskdetails} onChange={handleOnChange}></textarea>
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
                                    <textarea class="form-control" rows="5" name="student" value={student} onChange={handleOnChange}></textarea>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="headingdiv">Who is assigned to this task?</div>
                            <div class="form-bgclr">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" />
                                <label class="form-check-label" for="exampleCheck1">
                                    Assign this task for users in groups or offices</label>
                            </div>
                            <div class="form-row"> 
                                <div class="form-group col-md-6">
                                    <label>User Groups</label>
                                    <input type="text" class="form-control" placeholder="0 selected" name="usergroup" value={usergroup} onChange={handleOnChange} /> 
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