import React,{useState} from 'react'
import "./addTask.style.css";
import {useDispatch, useSelector} from "react-redux"
import {addTaskPending,addTaskSuccess,addTaskError} from "./addTaskSlice"
import {
  Spinner,Alert
} from "react-bootstrap";
import {createNewTask} from "../../api/taskApi"


export const Addtask = () => {

    const dispatch=useDispatch()
 
    const [taskName, setTaskName] = useState("");
    const [type, setType] = useState("");
    const [dueDate, setDueDate] = useState("");
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
    
           
            case "studentAssign":
            setStudentAssign(value);
            break;
    
            case "assignTo":
                setAssignTo(value);
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
    if(isAuth.status=="error"){
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
           <form onSubmit={handleOnTaskSubmit} >
                    <div class="col-md-12">
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
                                <textarea class="form-control" rows="5" name="assignTo" value={assignTo} onChange={handleOnChange}></textarea>
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
                                    <textarea class="form-control" rows="5" name="studentAssign" value={studentAssign} onChange={handleOnChange}></textarea>
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