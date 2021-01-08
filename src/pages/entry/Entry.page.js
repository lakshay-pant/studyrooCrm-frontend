import React,{useState} from 'react'
import "./entry.style.css";
import {Login} from "../../components/login/Login.comp"
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import {Signup} from "../../components/signup/Signup.comp" 


export const EntryPage = () => {
  const [frmLoad, setFrmLoad] = useState("SignUp");
  const [email, setEmail] = useState("");
    
  
    const handleOnChange = (e) => {
      const { name, value } = e.target;
  
      switch (name) {
       

        case "email":
          setEmail(value);
          break;
  
      
        default:
          break;
      }
    };

    
  
    
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
          
          formSwitcher={formSwitcher}
         
        

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