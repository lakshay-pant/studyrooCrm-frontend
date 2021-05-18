import React, {useState} from 'react';
import './profile.style.css';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";

export const Profile = () => {
   
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
        <div className="content-wrapper profile-page">
           <div className="maincontent-rightside student-view add-student uncategorized">
              
              <section class="maincontent"></section>
              
              <div class="container">
                <div class="profile-page-content">
                    <div class="row">

                        <div class="col-md-4 col-12">
                            <div class="profile">
                                <div class="profile-img">
                                <img src="images/admin.svg" class="img-fluid" alt="profile" />
                                </div>
                                <div class="profile-intro">
                                <p class="name">Artur Szulakowski </p>
                                <span>MANAGING DIRECTOR</span>
                                </div>
                                <i class="fas fa-pen"></i>
                                <div class="profile-status">
                                </div>
                            </div>
                        </div>

                        

                        <div class="col-sm-8 col-12">
                        <div class="profile-detail">
                           <div class="headingdiv">Personal</div>
                           <form>
                              <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>First Name*</label>
                                    <input type="text" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Last Name*</label>
                                    <input type="text" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Birthday</label>
                                    <input type="date" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Phone Number</label>
                                    <input type="tel" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-4">
                                    <label>Gender</label>
                                    <select class="form-control" name="gender" id="">
                                      <option value="allstudent">Male</option>
                                      <option value="europeans">Female</option>
                                      <option value="allstudent">Other</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">                                    
                                    <label>Position</label>
                                    <input type="text" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-12">                                    
                                    <label>Email Signature</label>
                                    <textarea name="email-signature" rows="5" class="form-control" placeholder=""></textarea>
                                </div>
                                <div class="footersingbtn">
                                    <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
                                </div>

                                

                              </div>
                           </form>
                        </div>

                        <div class="profile-details">
                              <div class="headingdiv">Your Email</div>
                                <p>This is the email of your user on EducationLink. Use this email to login. You may receive notifications and alerts on this email, so make sure to check the spam folder. </p>
                                <div class="change-email">
                                    <p>Your current email address: office@studyroo.com.au</p>
                                    <div class="footersingbtn">
                                          <input type="submit" name="Save" class="btn getin-btn" value="Change Email Address" onClick={showModal}/>
                                    </div>
                                </div>
                                <Modal show={isOpen} onHide={hideModal}>
                                    <div id="emailupdate">
                                       <Modal.Body>
                                            <div class="fl-head">
                                              <h5>Change your email address</h5>
                                              <button onClick={hideModal} className="close">
                                                <span aria-hidden="true">&times;</span>
                                              </button>
                                            </div>
                                            <div class="change-bg">
                                               <div class="form-row">
                                                  <div class="form-group col-md-12 col-12">
                                                    <label>Your new email address</label>
                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                    <div class="alert alert-warning borderless mt-3">
                                                    <p>
                                                      Your current email address will be removed from your account once this new 
                                                      address is verified.
                                                    </p>
                                                  </div>
                                                  </div>
                                                  <div class="fotercontent">
                                                     
                                                      <div class="footersingbtn">
                                                        <input type="submit" name="Reset" class="btn getin-btn re" value="Cancel" />
                                                      </div>
                                                      <div class="footersingbtn">
                                                        <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                                      </div>
                                                  </div>
                                                  
                                                </div>
                                            </div>
                                       </Modal.Body>
                                    </div>
                                </Modal>
                         </div>

                        <div class="profile-details">
                          <div class="headingdiv">Your Password</div>
                            <p>You can change your password at any time.</p>
                              <div class="change-email facebook-psw">
                                <p>Forgot your password?</p>
                                <div class="footersingbtn">
                                    <input type="submit" name="Save" class="btn getin-btn" value="Change Password" onClick={showModal2}/>
                                </div>
                          </div>
                            
                          <Modal show={isOpen2} onHide={hideModal2}>
                                    <div id="emailupdate" class="pswupdate">
                                       <Modal.Body>
                                            <div class="fl-head">
                                              <h5>Change Password</h5>
                                              <button onClick={hideModal2} className="close">
                                                <span aria-hidden="true">&times;</span>
                                              </button>
                                            </div>
                                            <div class="change-bg">
                                               <div class="form-row">
                                                  <div class="form-group col-md-12 col-12">
                                                    <label>Current Password <p>*</p></label>
                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                  </div>
                                                  <div class="form-group col-md-12 col-12">
                                                    <label>New Password <p>*</p></label>
                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                  </div>
                                                  <div class="form-group col-md-12 col-12">
                                                    <label>Confirm New Password  <p>*</p></label>
                                                    <input type="text" class="form-control" placeholder="" name="" value="" />
                                                  </div>
                                                  <div class="fotercontent">
                                                     
                                                      <div class="footersingbtn">
                                                        <input type="submit" name="Reset" class="btn getin-btn re" value="Cancel" />
                                                      </div>
                                                      <div class="footersingbtn">
                                                        <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                                      </div>
                                                  </div>
                                                  
                                                </div>
                                            </div>
                                       </Modal.Body>
                                    </div>
                                </Modal>
                        </div>

                        <div class="profile-details">
                          <div class="headingdiv">Connect To Facebook</div>
                            <div class="change-email facebook-psw">
                              <p class="light">Login with your Facebook account, and manage your Pages' Leads by syncing them to 
                                EducationLink with our special Facebook Leads Ads add-on for free.</p>
                              <div class="footersingbtn">
                                  <input type="submit" name="Save" class="btn getin-btn" value="Connect to facebook"/>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>

                    </div>
                </div>
              </div>

           </div>
    );
};
