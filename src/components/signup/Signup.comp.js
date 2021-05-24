import React,{useState} from 'react'
import usePasswordToggle from "../../hooks/usePasswordToggle"
import useConfirmPasswordToggle from "../../hooks/useConfirmPasswordToggle"
import {useDispatch, useSelector} from "react-redux"
import {
    Spinner,Alert
  } from "react-bootstrap";
import {newUserRegistration} from "./UserSignUpAction"
import "./registration.style.css"
import {Link} from "react-router-dom"

export const Signup = () => {
    const [PasswordInputType,ToggleIcon]=usePasswordToggle()
    const [ConfirmPasswordInputType,ConfirmToggleIcon]=useConfirmPasswordToggle()
    const dispatch=useDispatch()
    const { isLoading, status, message } = useSelector(
      (state) => state.signUp
    );

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthdate, setDate] = useState("");
    const [tele, setTel] = useState("");
    const [gender, setGender] = useState("");
  
    const [isError, setIsError] = useState("");
    const [isChecked, setIsChecked] = useState(false);
  
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
      switch (name) {
        case "firstName":
          setFirstName(value);
          break;
  
        case "lastName":
          setLastName(value);
          break;
  
        case "birthdate":
          setDate(value);
          break;
  
        case "tele":
          setTel(value);
          break;
  
  
        case "gender":
          setGender(value);
          break;
  
        case "email":
          setEmail(value);
          break;
  
        case "password":
          setPassword(value);
          break;
  
  
  
  
  
        default:
          break;
      }
    };
      

    const handleOnSignUpSubmit=async(e)=>{
      e.preventDefault()
      if (!firstName || !password||!lastName||!email) {
        return alert("Fill up all the form!");
        
      }
      if(!isChecked){
        return alert("Accept the Terms of use & Privacy Policy");
      }
      
      const newRegistration = {
        firstName,lastName,email,password,tele,birthdate,gender,
      };
      dispatch(newUserRegistration(newRegistration));
    }

    const checkValidation=(e)=>{
      setConfirmPassword(e.target.value)
      if(password!==confirmPassword){
setIsError("Confirm Password should match with Password")}else{
  setIsError()
}}

    return (
      <div className="body">
        <div className="mainlogin">
           <div id="signup">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column">
                    <div className="login-box">
                    
                        <form className="login-form form"  action="" method="post" onSubmit={handleOnSignUpSubmit} autoComplete="off">
                        {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
                      
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
                                <input id="loginpassword-cnrm"  type ={ConfirmPasswordInputType} name="confirmPassword" placeholder="Enter your Confirm Password" id="password" className="form-control" onChange={(e)=>checkValidation(e)} value={confirmPassword} required/>
                                <span className="toggle-password field-icon">{ConfirmToggleIcon}</span>
                                {<span style={{ fontSize: 14,color: "#5c5d5d"}}>{isError}</span>}
                            </div>
                            <div className="form-group row">

<div class="form-group col-md-6">
  <label>Birthday</label>
  <input type="" class="form-control" placeholder="" name="birthdate" onChange={handleOnChange} value={birthdate} required/>
</div>
<div class="form-group col-md-6">
  <label>Phone Number</label>
  <input type="" class="form-control" placeholder="" name="tele" onChange={handleOnChange} value={tele} required/>
</div>
</div>
<div class="form-group col-md-6">
<label>Gender</label>
<select class="form-control" name="gender" onChange={handleOnChange} value={gender} required>
  <option value="allstudent">Male</option>
  <option value="europeans">Female</option>
  <option value="allstudent">Other</option>
</select>
</div>
                            <div className="form-group resiterlink">
                              <div className="chck">
                                <input type="checkbox" id="box-2" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
                              <label for="box-2">I Accept the Terms of use & Privacy Policy. </label>
                              </div>
                               
                            
                            </div>
                         
                             <div className="footersingbtn">
                               <input type="submit" name="submit" className="btn getin-btn" value="Sign Up"/>
                             </div>
                               <p>Already have an account? <Link to="/"><a className="forgettext"> Sign In</a></Link></p>
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

