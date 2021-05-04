import React from 'react';
import './profile.style.css';

export const Profile = () => {
    return(
        <div className="content-wrapper profile-page">
           <div className="maincontent-rightside student-view add-student uncategorized">
              
              <section class="maincontent"></section>
              
              <div class="container">
                <div class="profile-page-content">
                    <div class="row">

                        <div class="col-md-3 col-12">
                            <div class="profile">
                                <div class="profile-img">
                                <img src="images/admin.svg" class="img-fluid" alt="profile" />
                                </div>
                                <div class="profile-intro">
                                <p class="name">Artur Szulakowski </p>
                                <span>MANAGING DIRECTOR</span>
                                </div>
                                <div class="profile-status">
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-9 col-12">
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
                                    <input type="submit" name="Save" class="btn getin-btn" value="Change Email Address"/>
                              </div>
                          </div>     
                        </div>

                        <div class="profile-details">
                          <div class="headingdiv">Your Password</div>
                          <div class="change-email">
                            <p>You can change your password at any time.</p>
                            <div class="footersingbtn">
                                <input type="submit" name="Save" class="btn getin-btn" value="Change Password"/>
                            </div>
                          </div>
                        </div>

                        <div class="profile-details">
                          <div class="headingdiv">Connect To Facebook</div>
                            <p>You can change your password at any time.</p>
                            <div class="change-email facebook-psw">
                              <p>Forgot your password?</p>
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
