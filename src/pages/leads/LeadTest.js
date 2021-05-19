import "./LeadsStyle.css";
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import { Tabs, Tab } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';

const LeadTest = () => {
    
    const [ key, setKey ] = useState('home'); 
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    
    const showModal = () => {
        setIsOpen(true);
    }

    const showModal2 = () => {
        setIsOpen2(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    };
    const hideModal2 = () => {
        setIsOpen2(false);
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
                                            <small>Leads</small>
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

                                    <select class="form-control filter-box" onClick={showModal2}>
                                        <option >Add Lead</option>
                                    </select>
                                </div>

                                {/*modal-body--*/}
                                <div class="modal fade filters-modal show" id="task" aria-modal="true">
                                    <Modal show={isOpen2} onHide={hideModal2}>
                                        <Modal.Body>

                                        <div class="modal-dialog modal-lg add-leads" role="document">
                                            <div class="modal-content ">
                                                <div class="modal-top leads-top">
                                                    <h5>Add Lead</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={hideModal2}>
                                                        &times;
                                                    </button>
                                                </div>
                                                                    
                                                <div class="modal-body">
                                                    <div class="student-filter-area">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-12">
                                                                <div class="update-crm add-leads">
                                                                    <div class="row">
                                                                        <div class="col-md-6 col-12">
                                                                            <div class="form-row">
                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Contact Person</label>
                                                                                    <div class="input-icons">
                                                                                        <i class="fa fa-user icon"></i>
                                                                                        <input type="text" class="form-control input-field" placeholder="" name="" />
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Organization</label>
                                                                                    <div class="input-icons">
                                                                                        <i class="fa fa-building icon" aria-hidden="true"></i>
                                                                                        <input type="text" class="form-control input-field" placeholder="" name="" />
                                                                                    </div>
                                                                                </div>
                                                                                                
                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Title</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="" />
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <div class="form-row">
                                                                                        <div class="form-group col-md-6 col-6">
                                                                                            <label>Value</label>
                                                                                            <input type="text" class="form-control" placeholder="" name="" value=""/>
                                                                                        </div>
                                                                                        <div class="form-group col-md-6 col-6">
                                                                                            <select class="form-control" name="cars" id="cars">
                                                                                                <option value="allstudent">Indian Rupee</option>
                                                                                                <option value="europeans">Europeans</option>
                                                                                                <option value="allstudent">All Student</option>
                                                                                                <option value="europeans">Europeans</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Labels</label>
                                                                                    <select class="form-control" name="cars" id="cars">
                                                                                        <option value="allstudent">Hot</option>
                                                                                        <option value="europeans">Cold</option>
                                                                                        <option value="allstudent">Warm</option>
                                                                                        <option value="europeans">Europeans</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Owner</label>
                                                                                    <select class="form-control" name="cars" id="cars" value="you">
                                                                                        <option value="allstudent">Hot</option>
                                                                                        <option value="europeans">Cold</option>
                                                                                        <option value="allstudent">Warm</option>
                                                                                        <option value="europeans">Europeans</option>
                                                                                    </select>
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                    <label>Visible To</label>
                                                                                    <div class="input-icons">
                                                                                        <i class="fa fa-th icon" aria-hidden="true"></i>
                                                                                        <select class="form-control input-field" name="cars" id="cars" >
                                                                                                <option value="allstudent"></option>
                                                                                                <option value="europeans">Cold</option>
                                                                                                <option value="allstudent">Warm</option>
                                                                                                <option value="europeans">Europeans</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-6 col-12 person-area">
                                                                            <div class="person">
                                                                                <div class="heading">
                                                                                <i class="fa fa-user"></i>
                                                                                <span>Person</span>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="form-group col-md-6 col-6 left">
                                                                                    <label>Phone</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="" />
                                                                                </div>
                                                                                <div class="col-md-6 col-6 form-group right">
                                                                                    <label>Work</label>
                                                                                    <select class="form-control" name="cars" id="cars" value="Work">
                                                                                        <option value="allstudent">Hot</option>
                                                                                        <option value="europeans">Cold</option>
                                                                                        <option value="allstudent">Warm</option>
                                                                                        <option value="europeans">Europeans</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="form-group col-md-6 col-6 left">
                                                                                    <label>Email</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="" />
                                                                                </div>
                                                                                <div class="col-md-6 col-6 form-group right">
                                                                                    <label>Work</label>
                                                                                    <select class="form-control" name="cars" id="cars" value="Work">
                                                                                        <option value="allstudent">Hot</option>
                                                                                        <option value="europeans">Cold</option>
                                                                                        <option value="allstudent">Warm</option>
                                                                                        <option value="europeans">Europeans</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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

                                                </div>{/*<!-- Modal -->*/}
                                            </div>
                                        </div>
                                    </div>
                                       </Modal.Body>
                                    </Modal>
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
                            <div class="modal fade filters-modal show" id="task" aria-modal="true">
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
                                                                                    <button type="button" class="btn btn-convert">Convert to deal</button>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <div class="col-lg-8 col-12">
                                                                    <div>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="notes-area">

                                                                                            {/* tabs start*/}
                                                                                            <div className="tab-wrapper">
                                                                                    <div className='container-fluid' >
                                                                                        <div className="row">
                                                                                        <div className="col-sm-12">

                                                                                            <Tabs defaultActiveKey="profile">
                                                                                            <Tab eventKey="home" title="Home">
                                                                                                <div className="tab-item-wrapper">
                                                                                                <h5>Home Dashbord</h5>
                                                                                                <p>At vero eos et accusamus et iusto odio dignissimos</p>
                                                                                                </div>
                                                                                            </Tab>

                                                                                            <Tab eventKey="profile" title="Profile">
                                                                                                <div className="tab-item-wrapper">
                                                                                                <h5>Profile Details</h5>
                                                                                                <p>At vero eos et accusamus et iusto odio dignissimos</p>
                                                                                                </div>
                                                                                            </Tab>

                                                                                            <Tab eventKey="contact" title="Contact">
                                                                                                <div className="tab-item-wrapper">
                                                                                                <h5>Contact Info</h5>
                                                                                                <p>At vero eos et accusamus et iusto odio dignissimos</p>
                                                                                                </div>
                                                                                            </Tab>
                                                                                            </Tabs>

                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>

                                                                                    {/*tabs end */}


                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            
                                                            </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                                       
                        </div>
                    </div>
                </div>
            </div>

            
            </div>
        </div>

)
}

export default LeadTest;