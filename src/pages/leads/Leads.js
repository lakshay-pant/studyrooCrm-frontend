import "./LeadsStyle.css";
import React, { useState } from 'react';

const Leads = () => {

    return(
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
                                        <small>All Students</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --main-content end--*/}

                {/*--student-leads start--*/}
                    <div class="student-leads leads-page">
                        <div class="container-fluid">
                            <div class="leads">
                                <div class="row">
                                        <div class="col-md-6 col-12">
                                            <div class="student-lead">
                                                
                                                <div class="tooltip">
                                                    <div class="inbox-icon">
                                                        <i class="fas fa-inbox"></i>
                                                    </div>
                                                    <span class="tooltiptext">Inbox</span>
                                                </div>

                                                <div class="tooltip">
                                                    <div class="inbox-icon">
                                                        <i class="fas fa-archive"></i>
                                                    </div>
                                                    <span class="tooltiptext">Archive</span>
                                                </div>

                                                <select class="form-control filter-box">
                                                    <option>Add Lead</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-12">
                                            <form class="activform ml-auto">
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <div class="activi-inputs">

                                                            <select class="form-control filter-box">
                                                                <option>Amount Of Leads</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>

                                                            <select class="form-control filter-box">
                                                                <option>Lead Source</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>

                                                            <select class="form-control filter-box">
                                                                <option>Lead Priority</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                            
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*--student-leads start--*/}

                    {/*-- commantable --*/}
                    <div class="commantablesection uncategorized-list lead-page-list">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="stuednttable table-responsive">
                                        <table class="table">
                                            <thead>     
                                                <tr>       
                                                    <th>NAME</th>
                                                    <th>PHONE</th>
                                                    <th>email</th>
                                                    <th>Activity date</th>
                                                    <th>Priority</th>
                                                    <th>Source</th>
                                                    <th>Created Date</th>
                                                    <th>Created Time</th>
                                                    <th>Assignee</th>
                                                    <th>Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                        <tr>
                                                            <td>Adam Malkowski</td>
                                                            <td>0180002021</td>
                                                            <td>adams258@o2.pl</td>
                                                            <td>01/04/2021</td>
                                                            <td>5</td>
                                                            <td>Course</td>
                                                            <td>30/03/2021</td>
                                                            <td>05:35PM</td>
                                                            <td>Lorem Ipsum</td>
                                                            <td>XYZ</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Adam Malkowski</td>
                                                            <td>0180002021</td>
                                                            <td>adams258@o2.pl</td>
                                                            <td>01/04/2021</td>
                                                            <td>5</td>
                                                            <td>Course</td>
                                                            <td>30/03/2021</td>
                                                            <td>05:35PM</td>
                                                            <td>Lorem Ipsum</td>
                                                            <td>XYZ</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Adam Malkowski</td>
                                                            <td>0180002021</td>
                                                            <td>adams258@o2.pl</td>
                                                            <td>01/04/2021</td>
                                                            <td>5</td>
                                                            <td>Course</td>
                                                            <td>30/03/2021</td>
                                                            <td>05:35PM</td>
                                                            <td>Lorem Ipsum</td>
                                                            <td>XYZ</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Adam Malkowski</td>
                                                            <td>0180002021</td>
                                                            <td>adams258@o2.pl</td>
                                                            <td>01/04/2021</td>
                                                            <td>5</td>
                                                            <td>Course</td>
                                                            <td>30/03/2021</td>
                                                            <td>05:35PM</td>
                                                            <td>Lorem Ipsum</td>
                                                            <td>XYZ</td>
                                                        </tr>

                                                    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-- commantable end here --*/}
            </div>
        </div>
    
    )
}

export default Leads;