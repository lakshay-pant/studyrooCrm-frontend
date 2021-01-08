import React,{useState} from 'react'
import PropTypes from "prop-types"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import useConfirmPasswordToggle from "../../hooks/useConfirmPasswordToggle"
import {signUpPending,signUpSuccess,signUpFail} from "./signupSlice"
import {useDispatch, useSelector} from "react-redux"
import {
    Spinner,Alert
  } from "react-bootstrap";
import {userSignUp} from "../../api/userApi"

export const Signup = ({formSwitcher}) => {
    const [PasswordInputType,ToggleIcon]=usePasswordToggle()
    const [ConfirmPasswordInputType,ConfirmToggleIcon]=useConfirmPasswordToggle()
    const dispatch=useDispatch()
    const {isLoading,isStore,error}=useSelector(state=>state.signUp)

    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
      switch (name) {
        case "firstName":
          setFirstName(value);
          break;

          case "lastName":
          setLastName(value);
          break;

        case "email":
          setEmail(value);
          break;
  
        case "password":
          setPassword(value);
          break;

          case "confirmPassword":
          setConfirmPassword(value);
          break;
  
         

        default:
          break;
      }
    };

    const handleOnSignUpSubmit=async(e)=>{
      e.preventDefault()
      if (!firstName || !password||!lastName||!confirmPassword) {
        return alert("Fill up all the form!");
        
      }
      dispatch(signUpPending())

      try{

const isAuth=await userSignUp({firstName,lastName,email,password})
console.log(isAuth)
if(isAuth.status=="error"){
return dispatch(signUpFail(isAuth.message))
}
dispatch(signUpSuccess())

      }catch(error){
dispatch(signUpFail(error.message))

      }
      console.log(firstName,password,lastName,confirmPassword)
    }
    return (
      <div className="body">
        <div className="mainlogin">
           <div id="signup">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column">
                    <div className="login-box">
                    {error && <Alert variant="danger">{error}</Alert>}
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
                                <input id="newpassword" type={PasswordInputType} name="password" placeholder="Enter your  Password" id="password" className="form-control" onChange={handleOnChange} value={password} required/>
                                <span className="toggle-password field-icon">{ToggleIcon}</span>
                            </div>
                            {isLoading && <Spinner variant="primary" animation="border" />}
                              <div className="form-group">
                                <label for="password" className="text-lb">Confirm Password</label><br/>
                                <input id="loginpassword-cnrm"  type ={ConfirmPasswordInputType} name="confirmPassword" placeholder="Enter your Confirm Password" id="password" className="form-control" onChange={handleOnChange} value={confirmPassword} required/>
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
  formSwitcher: PropTypes.func.isRequired,

}