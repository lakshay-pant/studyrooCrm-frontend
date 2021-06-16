import "./taskListStyle.css";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Spinner, Alert
} from "react-bootstrap"
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { editTask } from "./taskListAction"
import { deletetask } from "./taskListdeleteAction"
import { fetchAlltask } from "./taskListgetAction"
import { editResetSuccessMSg } from './taskListSlice';

import { addTask } from '../addTask/addTaskAction';


export const TaskList = () => {
    console.log("HIIIIIIIIII=============================================")
    const dispatch = useDispatch()
    const { task } = useSelector((state) => state.getTask);

    useEffect(() => {
        if (!task.length) {
            dispatch(fetchAlltask());
        }
    }, [task, dispatch]);

    useEffect(() => {
        editUpdate();
    }, []);


    const { isLoadingEdit, statusEdit, messageEdit } = useSelector(
        (state) => state.editTask
    );

    const { isLoadingDelete, statusDelete, messageDelete } = useSelector(
        (state) => state.deletetask
    );

    useEffect(() => {
        // messageDelete && dispatch(deleteResetSuccessMSg());
        messageEdit && dispatch(editResetSuccessMSg());
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);
    const [ID, setID] = useState('');
    const [taskName, setTaskName] = useState();
    const [type, setType] = useState();
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
    const [checked, setChecked] = useState(false)




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


    const editUpdate = () => {
        dispatch(fetchAlltask());
    };
    const handleCheckBox = () => {
        setChecked(!checked)
    }

    const handleOnTaskSubmit = async (e) => {
        e.preventDefault()
        console.log("IDIDIDIDIDIDIDIDIDIDhuuuuuuuuuuuuuuuuuu")

        const newTask = { taskName, type, dueDate, studentAssign, assignTo, offices, userGroup }
        console.log("IDIDIDIDIDIDIDIDIDID")
        await dispatch(editTask(newTask, ID));
        await editUpdate();

    }

    const showModal = (item) => {
        console.log("itttttttttttttttttttttttttttttttttemmmmmm");

        setID(item._id);
        setTaskName(item.taskName);
        setType(item.type);
        setDueDate(item.dueDate);
        setStudentAssign(item.studentAssign);
        setAssignTo(item.assignTo);
        setOffices(item.offices);
        setUserGroup(item.userGroup);
        setIsOpen(true);
    };

    const hideModal = () => {
        dispatch(editResetSuccessMSg());
        setIsOpen(false);
    };
    const deleteTaskRecord = async (item) => {
        await dispatch(deletetask(item.ID));
        await editUpdate();

    };
    return (
        <div className="content-wrapper">
            <div className="maincontent-rightside student-view add-student uncategorized">


                {/*--main-content start--*/}
                <section className="maincontent">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <div className="add-student">
                                    <div className="add-text">
                                        <div className="add-round">
                                            <span><i className="fa fa-tasks"></i></span>
                                        </div>
                                        <small>Add New Task</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --main-content end--*/}


                <section class="add-task-list">
                    <div class="container-fluid">
                        <div class="row">

                            <div class="col-lg-4 col-12">
                                <div class="task-student">
                                    <div class="headingdiv">Tasks by student</div>


                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-list">
                                        <div class="student-task">
                                            <div class="img-wrap">
                                                <img src="images/admin.svg" />
                                            </div>
                                            <div class="data">
                                                <p>Artur Szulakowski.</p>
                                            </div>
                                            <div class="number">
                                                <p>02</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-8 col-12" >
                                <div class="task-student today">
                                    <div class="headingdiv">Today</div>
                                    {task
                                        .slice(0)
                                        .reverse()
                                        .map((item) => (
                                            <div class="task-list today" key={item._id}>
                                                <div class="student-task">
                                                    <div class="img-wrap">
                                                        <span></span>
                                                    </div>
                                                    <div class="data">
                                                        <p>{item.taskName}</p>
                                                        <p>Assigned to: {item.studentAssign} Created by:{item.assignTo} </p>
                                                    </div>
                                                    <div class="number">
                                                        <p>14 Mar 2021</p>
                                                        <div class="todo-buttons">
                                                            <a href="#" class="task-btn-done">
                                                                <span> Go To Student </span>
                                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                            </a>
                                                            <a href="#" class="task-btn-done">
                                                                <span> Mark as Complete</span>
                                                                <i class="fa fa-check" aria-hidden="true"></i>
                                                            </a>
                                                            <a href="#" class="task-btn-done">
                                                                <span>Mark as in Progress</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </a>

                                                            <a class="task-btn-done" onClick={() => showModal(item)}>
                                                                <span> Edit </span>
                                                                <i class="fas fa-pen" aria-hidden="true" ></i>
                                                            </a>
                                                            <a href="#" class="task-btn-done"
                                                                onClick={() => deleteTaskRecord(item)
                                                                }>
                                                                {messageDelete && (
                                                                    <Alert
                                                                        variant={
                                                                            statusDelete ===
                                                                                'success'
                                                                                ? 'danger'
                                                                                : 'success'
                                                                        }
                                                                    >
                                                                        {messageDelete}
                                                                    </Alert>
                                                                )}
                                                                <span> Delete </span>
                                                                <i class="fa fa-times" aria-hidden="true"></i>
                                                            </a>
                                                        </div>

                                                        {/*modal-body--*/}
                                                        <div class="modal fade filters-modal show" aria-modal="true">
                                                            <Modal show={isOpen} onHide={hideModal}>
                                                                <div id="taskupdate">
                                                                    <div class="modal-dialog modal-lg" role="document">
                                                                        <div class="modal-content">
                                                                            <Modal.Body>
                                                                                <div class="modal-dialog modal-lg" role="document">
                                                                                    <div class="modal-content">
                                                                                        <div class="modal-top">
                                                                                            <h5>Update Task</h5>
                                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">&times;</span>
                                                                                            </button>
                                                                                        </div>

                                                                                        <div class="student-filter-area">
                                                                                            <form onSubmit={handleOnTaskSubmit} >

                                                                                                <div class="row">

                                                                                                    <div class="col-lg-8 col-12">
                                                                                                        {messageEdit && (
                                                                                                            <Alert
                                                                                                                variant={
                                                                                                                    statusEdit ===
                                                                                                                        'success'
                                                                                                                        ? 'success'
                                                                                                                        : 'danger'
                                                                                                                }
                                                                                                            >
                                                                                                                {messageEdit}
                                                                                                            </Alert>
                                                                                                        )}

                                                                                                        <div class="update-crm update-task">

                                                                                                            <div class="crm-form">
                                                                                                                <div class="headingdiv">What is your task about?</div>

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

                                                                                                            <div class="crm-form">
                                                                                                                <div class="headingdiv">Is your task related to a student?</div>
                                                                                                                <div class="form-row">

                                                                                                                    <div class="form-group col-md-12 col-12">
                                                                                                                        <a class="badge badge-light">STU23</a>
                                                                                            Aleksandra Raczek
                                                                                            <a class="float-right color">Open Student</a>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div class="crm-form">
                                                                                                                <div class="headingdiv">Who is assigned to this task?</div>
                                                                                                                <div class="form-row">

                                                                                                                    <div class="form-group col-md-12 col-12">
                                                                                                                        <label>This task will be assigned to...</label>
                                                                                                                        <input type="text" class="form-control" placeholder="" name="" value="Artur Szulakowski" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div class="crm-form">
                                                                                                                <div class="headingdiv">Current status</div>
                                                                                                                <div class="form-row">

                                                                                                                    <div class="form-group col-md-12 col-12">
                                                                                                                        <form>
                                                                                                                            <label class="radio-inline">
                                                                                                                                <input type="radio" name="optradio" checked />Pending
                                                                                            </label>
                                                                                                                            <label class="radio-inline">
                                                                                                                                <input type="radio" name="optradio" />In progress
                                                                                            </label>
                                                                                                                            <label class="radio-inline">
                                                                                                                                <input type="radio" name="optradio" />Completed
                                                                                            </label>
                                                                                                                            <label class="radio-inline">
                                                                                                                                <input type="radio" name="optradio" />Cancelled
                                                                                            </label>
                                                                                                                        </form>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-lg-4 col-12">
                                                                                                        <div class="form-group col-md-12 col-12 record-message">
                                                                                                            <textarea name="note" rows="5" class="form-control" placeholder="Add note, record a call or message about this task..."></textarea>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                                <div class="fotercontent">
                                                                                                    <div class="rest">
                                                                                                        <a href="#"><span><i class="far fa-redo"></i></span> Reset</a>
                                                                                                    </div>
                                                                                                    <div class="footersingbtn">
                                                                                                        <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                                                                                    </div>
                                                                                                </div>

                                                                                            </form>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </Modal.Body>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        {/*modal end */}

                                                    </div>
                                                </div>




                                            </div>
                                        ))}
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )

}

