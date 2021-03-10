import React from 'react'
import "./addTask.style.css";

export const Addtask = () => {

   
    return (
        <div>
             <div className="body"> 
           <div className="maincontent-rightside student-view">

                    <section class="addtask-from">
                        <div class="container-fluid">
                            <div class="new-task-bg">
                                <form>
                                    <div class="col-md-12">
                                         <div class="headingdiv">What is your task about?</div>
                                         <div class="form-bgclr">
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <label>Task Name</label>
                                                    <input type="text" class="form-control" placeholder="" name="" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Type</label>
                                                    <select class="form-control" name="cars" id="cars">
                                                    <option value="volvo">Follow up</option>
                                                    <option value="saab">Call</option>
                                                    <option value="saab">Client Meeting</option>
                                                    <option value="saab">Event</option>
                                                    <option value="saab">Sale</option>
                                                    <option value="saab">Text Message</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Due Date*</label>
                                                    <input type="date" class="form-control" placeholder="" name="" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                        <label>Task Details (comments)</label>
                                                        <textarea class="form-control" rows="5"></textarea>
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
                                                    <textarea class="form-control" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="headingdiv">Who is assigned to this task?</div>
                                        <div class="form-bgclr">
                                        <div class="form-row"> 
                                                <div class="form-group col-md-12">
                                                    <label>This task will be assigned to...</label>
                                                    <textarea class="form-control" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label" for="exampleCheck1">Assign this task for users in groups or offices</label>
                                            </div>
                                            <div class="form-row"> 
                                                <div class="form-group col-md-6">
                                                    <label>User Groups</label>
                                                    <input type="text" class="form-control" placeholder="0 selected" name="" /> 
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Offices</label>
                                                    <input type="text" class="form-control" placeholder="All" name="" /> 
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
        </div>
    )
}
