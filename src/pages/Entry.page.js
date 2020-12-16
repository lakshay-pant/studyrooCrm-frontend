import React,{useState} from 'react'
import "./entry.style.css";
import {Login} from "../components/login/Login.comp"


export const EntryPage = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleOnChange=e=>{
        const {name,value}=e.target
        console.log(name,value)

        switch(name){
            case "email":
                setEmail(value)
                break

                case "password":
                    setPassword(value)
                    break

            default:
                break
                }

    }
    
    
    return (<div>
        <Login handleOnChange={handleOnChange} email={email} pass={password}/>
    </div>
            
        
    )
}
