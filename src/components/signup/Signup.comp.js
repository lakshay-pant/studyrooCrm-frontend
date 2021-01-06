import React from 'react'
import PropTypes from "prop-types"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import useConfirmPasswordToggle from "../../hooks/useConfirmPasswordToggle"

export const Signup = ({handleOnChange,email,pass,firstName,lastName,handleOnSignUpSubmit,formSwitcher,confirmPass}) => {
    const [PasswordInputType,ToggleIcon]=usePasswordToggle()
    const [ConfirmPasswordInputType,ConfirmToggleIcon]=useConfirmPasswordToggle()
    return (
      <div className="body">
        <div className="mainlogin">
           <div id="signup">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column">
                    <div className="login-box">
                        <form className="login-form form"  action="" method="post" onSubmit={handleOnSignUpSubmit} autoComplete="off">
                            <div className="logoimg text-center">
                              <img  alt="studyroo logo" src={process.env.PUBLIC_URL + '/images/logo.png'} className="img-fluid"></img>            
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                  <label for="firstname" className="text-lb">First Name</label><br/>
                                <input  type="text" name="firstName" placeholder="Enter First Name" id="firstname" className="form-control" onChange={handleOnChange} value={firstName} required/>
                                </div>
                                 <div className="col-md-6">
                                  <label for="lastname" className="text-lb">Last Name</label><br/>
                                <input  type="text" name="lastName" placeholder="Enter Last Name" id="username" className="form-control" onChange={handleOnChange} value={lastName} required />
                                </div>
                            </div>
                            <div className="form-group">
                              <label for="mail" className="text-lb">Email</label><br/>
                              <input type="email" name="email" placeholder="Enter your Email" id="username" className="form-control" onChange={handleOnChange} value={email} required></input>
                            </div>

                            <div className="form-group">
                                <label for="password" className="text-lb">Password</label><br/>
                                <input id="newpassword" type={PasswordInputType} name="password" placeholder="Enter your  Password" id="password" className="form-control" onChange={handleOnChange} value={pass} required/>
                                <span className="toggle-password field-icon">{ToggleIcon}</span>
                            </div>
                              <div className="form-group">
                                <label for="password" className="text-lb">Confirm Password</label><br/>
                                <input id="loginpassword-cnrm"  type ={ConfirmPasswordInputType} name="confirmPassword" placeholder="Enter your Confirm Password" id="password" className="form-control" onChange={handleOnChange} value={confirmPass} required/>
                                <span className="toggle-password field-icon">{ConfirmToggleIcon}</span>
                            </div>
                            <div className="form-group resiterlink">
                              <div className="chck">
                                <input type="checkbox" id="box-2"/>
                              <label for="box-2">I Accept the Terms of use & Privacy Policy. </label>
                              </div>
                               
                            
                            </div>
                         
                             <div className="footersingbtn">
                               <input type="submit" name="submit" className="btn getin-btn" value="Sign Up"/>
                             </div>
                               <p>Already have an account? <a  onClick={() => formSwitcher("login")}> Sign In</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </div>
        </div>
    )
}

Signup.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired,
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    confirmPass:PropTypes.string.isRequired

}