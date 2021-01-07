import React,{useState} from 'react'
import "./entry.style.css";
import {Login} from "../../components/login/Login.comp"
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import {Signup} from "../../components/signup/Signup.comp" 


export const EntryPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("SignUp");
  
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

    const handleOnSignUpSubmit=(e)=>{
      e.preventDefault()
      if (!firstName || !password||!lastName||!confirmPassword) {
        return alert("Fill up all the form!");
        
      }
      console.log(firstName,password,lastName,confirmPassword)
    }
  
    
    const handleOnResetSubmit = (e) => {
      e.preventDefault();
  
      if (!email) {
        return alert("Please enter the email!");
      }
  
      //TODO call api to submit the form
      console.log(email);
    };
  
    const formSwitcher = (frmType) => {
      setFrmLoad(frmType);
    };
    
    
    return (  <div>
{frmLoad === "SignUp" && (
        <Signup
          handleOnChange={handleOnChange}
          handleOnSignUpSubmit={handleOnSignUpSubmit}
          formSwitcher={formSwitcher}
          email={email}
          pass={password}
          firstName={firstName}
          lastName={lastName}
          confirmPass={confirmPassword}
        

        />
      )}


      {frmLoad === "login" && (
        <Login
          
          formSwitcher={formSwitcher}

        />
      )}

      {frmLoad === "rest" && (
        <ResetPassword
         // handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email={email}
        />
      )}

  </div>
            
        
    )
}