import React, { useState, useEffect, useRef } from 'react'
import "./addTask.style.css";
import { useDispatch, useSelector } from "react-redux"
import { addTaskPending, addTaskSuccess, addTaskError } from "./addTaskSlice"
import {
  Spinner, Alert
} from "react-bootstrap"
import { createNewTask } from "../../api/taskApi"
import { filterSearchUser, fetchAllUsers } from "../../components/getAllTheUsers/getUsersAction"
import { fetchAllStudents } from "../allStudents/allStudentAction"
import {addTask} from "./addTaskAction"




export const Addtask = () => {
  const { searchStudentList } = useSelector(
    (state) => state.allStudent
  );

  const { users } = useSelector(
    (state) => state.getUser
  );



  const { user } = useSelector(
    (state) => state.user
  );



  const dispatch = useDispatch();
  const { students } = useSelector(
    (state) => state.allStudent
  );


  const { isLoading,
    status,
    message } = useSelector(
      (state) => state.addTask
    );

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplayUsers(false)
    }
  };


  const handleClickOutside1 = event => {
    const { current: wrap } = wrapperRef1;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside1);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside1);
    };
  });
  const updatePokeDex = stud => {
    setAssignTo(stud);
    setDisplay(false);
  };

  const updateUser = poke => {
    setStudentAssign(poke);
    setDisplayUsers(false);
  };


  const [taskName, setTaskName] = useState("");
  const [type, setType] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [studentAssign, setStudentAssign] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const [userGroup, setUserGroup] = useState("");
  const [offices, setOffices] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [displayUsers, setDisplayUsers] = useState(false);
  const [optionsUsers, setUserOptions] = useState([]);
  const wrapperRef = useRef(null);
  const wrapperRef1 = useRef(null);
  const [checked, setChecked] = useState(false)


  useEffect(() => {
    if (!students.length) {
      dispatch(fetchAllStudents());
    }
    setOptions(students)
  }, [students, dispatch]);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
    setUserOptions(users)
  }, [users, dispatch]);



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

        break;

      case "studentAssign":
        setStudentAssign(value);

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


  const handleCheckBox = () => {
    setChecked(!checked)
  }

  const handleOnTaskSubmit = async (e) => {
    e.preventDefault()
    console.log(taskName)
    if (!taskName || !type || !dueDate || !studentAssign || !assignTo || !offices || !userGroup) {
      return alert("Fill up all the form!");

    }
const newTask={taskName,type,dueDate,studentAssign,assignTo,offices,userGroup}

    dispatch(addTask(newTask))


  }

  return (
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
                    <Alert variant={status === "success" ? "success" : "danger"}>
                      {message}
                    </Alert>
                  )}

                  <div class="headingdiv">What is your task about?</div>
                  <div class="form-bgclr">
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label>Task Name</label>
                        <input type="text" class="form-control" placeholder="" name="taskName" value={taskName} onChange={handleOnChange} />
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
                <div>
                  <div class="col-md-12">

                  <div class="headingdiv">Current status</div>
                    <div class="form-bgclr">

                      <div class="form-row">
                      <div class="form-group col-md-12 col-12">
																												<form>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																															checked
																														/>
																														Pending
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														In progress
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														Completed
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="optradio"
																														/>
																														Cancelled
																													</label>
																												</form>
																											</div>
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
                            <div ref={wrapperRef1}
                              className="flex-container flex-column pos-rel">
                              <input
                                id="auto"
                                onClick={() => setDisplay(!display)}
                                placeholder="Type to search"
                                onChange={handleOnChange}
                                autoComplete="off"
                                value={assignTo}
                                name="assignTo"
                                className="form-control"
                              />
                              {display && (
                                <div className="autoContainer">
                                  <div className="auto-area">
                                  <div class="ssg-header">
                                    <div class="ssg-icon"><i class="fas fa-user-graduate"></i></div>
                                    <div class="ssg-name">My students</div>
                                    <div class="ssg-info">3 results</div>
                                  </div>
                                  <div className="ssg-content">
                                  {options
                                    .filter(({ firstName }) => firstName.indexOf(assignTo.toLowerCase()) > -1)
                                    .map((value, i) => {
                                      return (
                                        <div
                                          onClick={() => updatePokeDex(value.firstName)}
                                          className="option ssg-item"

                                          key={i}
                                          tabIndex="0"
                                        >
                                          <span>{value.firstName}</span>

                                        </div>
                                      );
                                    })}
                                    </div>
                                    </div>
                                </div>
                              )}
                            </div>

                          </div>

                        
                      </div>
                    </div>

                  </div>

                
               
                <div class="col-md-12">
                  <div class="headingdiv">Who is assigned to this task?</div>
                  <div class="form-bgclr">

                    <div class="form-row">
                      <div class="col-md-12">
                        <div class="form-group ">
                          <label>This task will be assigned to...</label>
                          {isLoading && <Spinner variant="primary" animation="border" />}


                          <div ref={wrapperRef}
                            className="flex-container flex-column pos-rel">
                            <input
                              id="auto"
                              onClick={() => setDisplayUsers(!displayUsers)}
                              placeholder="Type to search"
                              onChange={handleOnChange}
                              autoComplete="off"
                              value={studentAssign}
                              name="studentAssign"
                              className="form-control"
                            />
                            {displayUsers && (
                              <div className="autoContainer">
                                  <div className="auto-area">
                                  <div class="ssg-header">
                                    <div class="ssg-icon"><i class="fas fa-user" aria-hidden="true"></i></div>
                                    <div class="ssg-name">My Users</div>
                                    <div class="ssg-info">3 results</div>
                                  </div>
                                  <div className="ssg-content">
                                {optionsUsers
                                  .filter(({ firstName }) => firstName.indexOf(studentAssign.toLowerCase()) > -1)
                                  .map((value, i) => {
                                    return (
                                      <div
                                        onClick={() => updateUser(value.firstName)}
                                        className="option ssg-item"
                                        key={i}
                                        tabIndex="0"
                                      >
                                        <span>{value.firstName}</span>

                                      </div>
                                    );
                                  })}
                              </div>
                              </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="form-check custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"
                        onClick={handleCheckBox}></input>
                      <label class="custom-control-label" for="defaultUnchecked">

                        Assign this task for users in groups or offices</label>
                    </div>
                    <div class="form-row" id={checked ? "" : "users"}>
                      <div class="form-group col-md-6">
                        <label>User Groups</label>
                        <input type="text" class="form-control" placeholder="selected" name="userGroup" value={userGroup} onChange={handleOnChange} />
                      </div>

                      <div class="form-group col-md-6">
                        <label>Offices</label>
                        <input type="text" class="form-control" placeholder="All" name="offices" value={offices} onChange={handleOnChange} />
                      </div>
                      
                    </div>
                    <div class="form-check custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked1" />
                      <label class="custom-control-label" for="defaultUnchecked1">
                       This task is urgent (should be completed as soon as possible)!</label>
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