import "./LeadsStyle.css";
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Leads = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    };

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
                                                            <td onClick={showModal}>Adam Malkowski</td>
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

                                    {/*modal-body--*/}
                                    <div class="modal fade filters-modal show " id="leadsFilter" aria-modal="true">
                                            <Modal show={isOpen} onHide={hideModal}>
                                                <Modal.Body>

                                                        <div class="row">
                                                            <div class="col-lg-4 col-12">
                                                                <div class="leads-area">
                                                                    <div class="lead-detail">
                                                                        <p class="head">Lead Name</p>
                                                                        <hr/>
                                                                        <p class="sub">Details</p>
                                                                        <hr/>
                                                                        <ul>
                                                                            <li>Name</li>
                                                                            <hr/>
                                                                            <li>Phone</li>
                                                                            <hr/>
                                                                            <li>Email</li>
                                                                            <hr/>
                                                                            <li>Priority</li>
                                                                            <hr/>
                                                                            <li>Source</li>
                                                                            <hr/>
                                                                            <li>Created Date</li>
                                                                            <hr/>
                                                                            <li>Created Time</li>
                                                                            <hr/>
                                                                            <li>Assignee</li>
                                                                            <hr/>
                                                                        </ul>
                                                                </div>
                                                                </div>
                                                                <div class="lead-action">
                                                                    <ul>
                                                                        <li>
                                                                        <div class="list-view">
                                                                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                                        </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="delete">
                                                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="convert">
                                                                            <button type="button" class="btn btn-convert">Convert to deal
                                                                            </button>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>


                                                            <div class="col-lg-8 col-12">
                                                                <div id="leadsFilter">
                                                                
                                                                    <div class="container">
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="notes-area">
                                                                                    <Tabs className="react-tabs first">
                                                                                        <TabList>
                                                                                            <Tab>Notes</Tab>
                                                                                            <Tab>Activity 2</Tab>
                                                                                        </TabList>
                                                                                      
                                                                                        <TabPanel>
                                                                                            <p>
                                                                                                            Hello
                                                                                                            </p>
                                                                                        </TabPanel>
                                                                                        <TabPanel>
                                                                                        
                                                                                        <div class="row">
                                                                                                        <div class="col-md-12 col-12">

                                                                                                                <div class="call-sec">
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-1 col-2">
                                                                                                                        </div>
                                                                                                                        <div class="col-md-11 col-12">
                                                                                                                            <div class="meeting-input">
                                                                                                                            <Tabs>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="home" class="tab-pane active show">
                                                                                                                                            <input type="text" class="form-control" placeholder="Call"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="menu1" class="tab-pane">
                                                                                                                                            <input type="text" class="form-control" placeholder="Meeting"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="menu2" class="tab-pane">
                                                                                                                                            <input type="text" class="form-control" placeholder="Task"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="menu3" class="tab-pane">
                                                                                                                                          <input type="text" class="form-control" placeholder="Deadline"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="menu4" class="tab-pane">
                                                                                                                                            <input type="text" class="form-control" placeholder="Email"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                    <TabPanel>
                                                                                                                                        <div id="menu5" class="tab-pane">
                                                                                                                                           <input type="text" class="form-control" placeholder="Lunch"/>
                                                                                                                                        </div>
                                                                                                                                    </TabPanel>
                                                                                                                                <TabList>

                                                                                                                                <Tab>
                                                                                                                                    <div class="icon-bg"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                                                                                                                </Tab>
                                                                                                                                <Tab>
                                                                                                                                    <div class="icon-bg"><i class="fa fa-user" aria-hidden="true"></i></div>
                                                                                                                                </Tab>
                                                                                                                                <Tab>
                                                                                                                                    <div class="icon-bg"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                                                                                                                                </Tab>
                                                                                                                                <Tab>
                                                                                                                                   <div class="icon-bg"><i class="fa fa-flag" aria-hidden="true"></i></div>
                                                                                                                                </Tab>
                                                                                                                                <Tab>
                                                                                                                                   <div class="icon-bg"><i class="fa fa-paper-plane" aria-hidden="true"></i></div>
                                                                                                                                </Tab>
                                                                                                                                </TabList>

                                                                                                                            </Tabs>
                                                                                                                                
                                                                                                                                
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div class="date-sec">
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-1 col-2">
                                                                                                                            <i class="fa fa-clock-o left-icon" aria-hidden="true"></i>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-11 col-12">
                                                                                                                            <div class="time-area">
                                                                                                                            <input type="date" class="form-control" placeholder="Date"/>
                                                                                                                            <input type="text" class="form-control" place="time"/>
                                                                                                                            <input type="date" class="form-control" placeholder="Date"/>
                                                                                                                            <input type="text" class="form-control" place="time"/>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                </div>

                                                                                                                <div class="multi-section">
                                                                                                                    <div class="row">
                                                                                                                        <div class="col-md-1 col-2">
                                                                                                                            <i class="fa fa-user left-icon" aria-hidden="true"></i>
                                                                                                                        </div>
                                                                                                                        <div class="col-md-11 col-12">
                                                                                                                            <div class="hide-show">
                                                                                                                            <span class="edit-on-click ">Guests</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            <div class="row">
                                                                                                                <div class="col-md-1 col-2">
                                                                                                                    <i class="fa fa-map-marker left-icon" aria-hidden="true"></i>
                                                                                                                </div>
                                                                                                                <div class="col-md-11 col-12">
                                                                                                                    <div class="hide-show">
                                                                                                                        <span class="edit-on-click ">Location</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div class="row">
                                                                                                                <div class="col-md-1 col-2">
                                                                                                                    <i class="fa fa-list left-icon" aria-hidden="true"></i>
                                                                                                                </div>
                                                                                                                <div class="col-md-11 col-12">
                                                                                                                    <div class="hide-show">
                                                                                                                        <span class="edit-on-click ">Description</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            
                                                                                                        </div>
                                                                                                            
                                                                                                            <div class="busy-dropdown">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-1 col-2">
                                                                                                                    <i class="fa fa-sticky-note left-icon" aria-hidden="true"></i>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-3 col-12">
                                                                                                                        <select class="form-control" name="busy" >
                                                                                                                            <option value="new"></option>
                                                                                                                            <option value="new">Busy</option>
                                                                                                                            <option value="exisitng">Free</option>  
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div class="add-note">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-1 col-2">
                                                                                                                        <i class="fa fa-sticky-note left-icon" aria-hidden="true"></i>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-11 col-12">
                                                                                                                        <textarea name="message" rows="4" class="form-control" placeholder="add"></textarea>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div class="user-dropdown">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-1 col-2">
                                                                                                                        <i class="fa fa-user left-icon" aria-hidden="true"></i>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-11 col-12">
                                                                                                                        <select class="form-control" name="user" >
                                                                                                                            <option value="new">Raj(You)</option>
                                                                                                                            <option value="new">asasa</option>
                                                                                                                            <option value="exisitng">asdsad</option>  
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div class="user-dropdown">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-1 col-2">
                                                                                                                        <i class="fa fa-link left-icon" aria-hidden="true"></i>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-11 col-12">
                                                                                                                        <div class="inputWithIcon">
                                                                                                                            <input type="text" class="form-control" placeholder="Deal or Lead"/>
                                                                                                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                                                                                        </div>

                                                                                                                        <div class="inputWithIcon">
                                                                                                                            <input type="text" class="form-control" placeholder="Your name"/>
                                                                                                                            <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                                                                                                                        </div>

                                                                                                                        <div class="inputWithIcon">
                                                                                                                            <input type="text" class="form-control" placeholder="Organization"/>
                                                                                                                            <i class="fa fa-building-o" aria-hidden="true"></i>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                             
                                                                                                            <div class="form-foot">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-5 col-12">
                                                                                                                    </div>
                                                                                                                    <div class="col-md-7 col-12 save-area">
                                                                                                                        <div class="done">
                                                                                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                                                                                        <label for="vehicle1">Mark as Done</label>
                                                                                                                        </div>
                                                                                                                        <button class="btn btn-cancel">Cancel</button>
                                                                                                                        <button class="btn btn-save">Save</button>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </div>
                                                                                                        
                                                                                                        
                                                                                        </div>
                                                                                        </TabPanel>
                                                                                    </Tabs>
                                                                                    

                                                                                        <div class="planned">
                                                                                            <div class="row">
                                                                                                <div class="col-md-12 col-12">
                                                                                                    <div class="planner-head">
                                                                                                        <h5>PLANNED</h5>
                                                                                                    </div>
                                                                                                </div>
                                                                                             </div>
                                                                                                <div class="call-area">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-11">
                                                                                                            <div class="main-timeline call">
                                                                                                            <div class="timeline active">
                                                                                                                <a href="#" class="timeline-content">
                                                                                                                    <input type="radio" id="call" name="call" value="call" />
                                                                                                                    <label for="call">Call</label><br/>
                                                                                                                </a>
                                                                                                                <ul>
                                                                                                                    <li>Wednesday</li>
                                                                                                                    <li>Marco</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                            </div> 
                                                                                                        </div>
                                                                                                    </div>  
                                                                                                </div>
                                                                                                
                                                                                                <div class="call-area">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-10">
                                                                                                            <div class="main-timeline call sub">
                                                                                                            <div class="timeline">
                                                                                                                <div class="row">
                                                                                                                    <div class="col-md-2 col-4">
                                                                                                                    <div class="icon-bg">
                                                                                                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                                                                                                    </div>
                                                                                                                    </div>
                                                                                                                    <div class="col-md-10 col-8">
                                                                                                                        <input type="text" class="form-control small" placeholder="Call"/>
                                                                                                                        <ul>
                                                                                                                        <li>
                                                                                                                            <div class="icon-bg">In 1 h</div>
                                                                                                                        </li>
                                                                                                                        <li>
                                                                                                                            <div class="icon-bg">In 3 h</div>
                                                                                                                        </li>
                                                                                                                        <li>
                                                                                                                            <div class="icon-bg">Tomorrow</div>
                                                                                                                        </li>
                                                                                                                        <li>
                                                                                                                            <div class="icon-bg">Next Week</div>
                                                                                                                        </li>
                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                
                                                                                                            </div>
                                                                                                            </div> 
                                                                                                        </div>
                                                                                                    </div>  
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="done">
                                                                                            <div class="row">
                                                                                                    <div class="col-md-12 col-12">
                                                                                                        <div class="planner-head">
                                                                                                            <h5>Done</h5>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="call-area">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-11">
                                                                                                            <div class="main-timeline call meeting">
                                                                                                                <div class="timeline active">
                                                                                                                    <a href="#" class="timeline-content">
                                                                                                                        <input type="radio" id="call" name="call" value="call" />
                                                                                                                        <label for="call">Meeting</label><br/>
                                                                                                                    </a>
                                                                                                                    <ul>
                                                                                                                        <li>Wednesday</li>
                                                                                                                        <li>Marco</li>
                                                                                                                    </ul>
                                                                                                                </div>
                                                                                                            </div> 
                                                                                                        </div>
                                                                                                    </div>  
                                                                                                </div>       
                                                                                            </div>

                                                                                            <div class="lead-created">
                                                                                                <div class="call-area">
                                                                                                    <div class="row">
                                                                                                        <div class="col-md-11">
                                                                                                            <div class="main-timeline call created">
                                                                                                                <div class="timeline active">
                                                                                                                    <a href="#" class="timeline-content">
                                                                                                                        <label for="call">Lead Created</label><br/>
                                                                                                                        <p class="lead-info">March 17, 2021 at 1:09 PM·Marco</p>
                                                                                                                    </a>                       
                                                                                                                </div>
                                                                                                            </div> 
                                                                                                        </div>
                                                                                                    </div>  
                                                                                                </div>       
                                                                                            </div>

                                                                                        </div>
                                                                                </div>
                                                                           </div>
                                                                        </div>
                                                            
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                </Modal.Body>

                                                
                                                <Modal.Footer>
                                                    <div class="fotercontent">
                                                        <div class="rest">
                                                            <a href="/#"><span><i class="far fa-redo"></i></span>Reset</a>
                                                        </div>
                                                        <div class="footersingbtn">
                                                            <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
                                                        </div>
                                                    </div>

                                                </Modal.Footer>
                                            </Modal>
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