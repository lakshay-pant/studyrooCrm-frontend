import React from 'react';
import "./allStudent.style.css";
import { useSelector } from "react-redux";



export const AllStudent = () => {

    
    return(
        <div className="content-wrapper">
            <div className="maincontent-rightside student-view add-student">
               
            <section className="maincontent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="add-student">
                                <div className="add-text">
                                <div className="add-round">
                                <span><i className="fal fa-tasks"></i></span>
                                </div>
                                <small>All Students</small>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                           <div className="import-from">
                                <p>Import from spreadsheet</p>
                                <div className="st-file-upload">
                                    <label for="file-upload" className="custom-file-upload">
                                    <i className="fas fa-user-graduate"></i> Add New Student
                                    <span>+</span>
                                    </label>

                                    <input id="file-upload" type="file"/>
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="student-data">
                <div className="container">

                    <div className="student-filter">
                        <div class="row">
                            <div class="col-md-9 col-sm-6 col-12">
                                <div class="headingdiv">I need help with students & leads</div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="filter-area">
                                    <select name="students" id="students">
                                        <option value="new">import</option>
                                        <option value="new">New Student</option>
                                        <option value="exisitng">Existing Student</option>  
                                    </select>
                                    <div class="st-filter">
                                        <p><i class="fab fa-buffer"></i>Filter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="student-collection">
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Inquiry received</p>
                                        <p><span>2 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>

                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">COUNSELLING</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">QUOTATION SENT</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">COUNSELLING</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">QUOTATION SENT</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                            
                            <div class="col-md-4 col-12">
                                    <div class="data-block">
                                        <div class="data-heading">
                                            <p class="head">COUNSELLING</p>
                                            <p><span>0 students</span></p>
                                        </div>
                                        <div class="data-content">
                                            <div class="no-data">
                                            <p>No Students Found</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Application</p>
                                        <p><span>2 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>

                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Waiting for Coe</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Payment Pending</p>
                                        <p><span>2 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>

                                        <div class="data-con-box">
                                        <div class="data-wrap">
                                            <div class="data-img">
                                                <img src="images/stu.png" class="img-fluid" alt="student" />
                                            </div>
                                            <div class="data-text">
                                                <p>Inquiry 1</p>
                                                <div class="contact">
                                                    <p>04556 789 887</p>
                                                    <p>test@test.com</p>
                                                </div>
                                            </div>
                                            <div class="st-number">
                                                    <p>STU1</p>
                                            </div>
                                        </div>
                                        <div class="post-time">
                                                <p><i class="fas fa-calendar-alt"></i>Last Contacted 3 Days Ago</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Apply for visa</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Waiting for Visa</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Visa Granted</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">Courses in Progress</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-12">
                                <div class="data-block">
                                    <div class="data-heading">
                                        <p class="head">QUOTATION SENT</p>
                                        <p><span>0 students</span></p>
                                    </div>
                                    <div class="data-content">
                                        <div class="no-data">
                                        <p>No Students Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>        
            </section>
                
        </div>
    </div>

    )
}