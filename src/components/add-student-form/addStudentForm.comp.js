import React,{useState,useEffect} from 'react'
import "./addStudent.style.css"
import {useDispatch, useSelector} from "react-redux"
import {
  Spinner,Alert
} from "react-bootstrap";

import {addStudent} from "./addStudentAction"

import {fetchAllStudents} from "../../pages/allStudents/allStudentAction"



export const AddStudentForm = () => {
  const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchAllStudents());
      }, [dispatch]);
    

  const { isLoading, status, message } = useSelector(
    (state) => state.addStudent
  );





  
 

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [birthday, setBirthday] = useState("");
const [gender, setGender] = useState("Male");
const [nationality, setNationality] = useState("Indian");
const [onShorePhone, setOnShorePhone] = useState("");
const [offShorePhone, setOffShorePhone] = useState("");
  const [email, setEmail] = useState("");
  const [salesPipeline, setSalesPipeline] = useState("OnShore");
  const [salesStatus, setSalesStatus] = useState("Inquiry Recieved");
  const [heatLevel, setHeatLevel] = useState("Very Hot");
  const [note, setNote] = useState("");
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

        case "middleName":
        setMiddleName(value);
        break;

        case "lastName":
        setLastName(value);
        break;

        case "birthday":
        setBirthday(value);
        break;

        case "gender":
        setGender(value);
        break;

        case "nationality":
          setNationality(value);
          break;

          case "onShorePhone":
            setOnShorePhone(value);
            break;

            case "offShorePhone":
            setOffShorePhone(value);
            break;

      case "email":
        setEmail(value);
        break;

      case "salesPipeline":
      setSalesPipeline(value);
      break;

      case "salesStatus":
      setSalesStatus(value);
      break;

      case "heatLevel":
      setHeatLevel(value);
      break;

      case "note":
      setNote(value);
      break;



    

      

       

      default:
        break;
    }
  };

  

  const handleOnStudentSubmit=async(e)=>{
    e.preventDefault()
    console.log(nationality)
    if (!firstName || !middleName||!lastName||!email||!gender||!nationality||!salesPipeline||!salesStatus||!heatLevel||!note||!onShorePhone||!offShorePhone||!birthday) {
      return alert("Fill up all the form!");
      
    }
    const newStudent = {
      firstName,middleName,lastName,email,gender,nationality,salesPipeline,salesStatus,heatLevel,note,onShorePhone,offShorePhone,birthday
    };
    dispatch(addStudent(newStudent));
    
    console.log(firstName,lastName,email,birthday,middleName,gender,nationality,onShorePhone,offShorePhone,note,salesPipeline,salesStatus,heatLevel)
  }

    return (
      <div className="content-wrapper">
    <div class="maincontent-rightside add-student">  
    <section class="maincontent">
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-12">
            <div class="add-student">
              <div class="add-text">
                <div class="add-round">
                <span><i class="fa fa-user-graduate"></i></span>
              </div>
            <small>  Add Student</small>
            </div>
            </div>
          </div>
        
      </div>
  </div>
</section>
<section class="student-from">
  <div class="container-fluid">
  <div class="student-bg">
  {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
            <form onSubmit={handleOnStudentSubmit} >
      <div class="col-md-12">    
      <div class="headingdiv">Personal</div>
      <div class="form-bgclr">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>First Name*</label>
              
              <input type="text" class="form-control" placeholder="" name="firstName" value={firstName} onChange={handleOnChange} />
            </div>
             <div class="form-group col-md-4">
              <label>Middle name</label>
              <input type="text" class="form-control" placeholder="" name="middleName" value={middleName} onChange={handleOnChange}/>
            </div>
             <div class="form-group col-md-4">
              <label>Last name*</label>
              <input type="text" class="form-control" placeholder="" name="lastName" value={lastName} onChange={handleOnChange}/>
            </div>
            
             <div class="form-group col-md-4">
              <label>Birthday</label>
              <input type="date" class="form-control" placeholder="" name="birthday" value={birthday} onChange={handleOnChange}/>
            </div>
             <div class="form-group col-md-4">
              <label>Gender</label>
             <select class="form-control" name="gender" id="cars" onChange={handleOnChange} value={gender}>
              <option >Male</option>
              <option >Female</option>
             
            </select>
            </div>
            
             <div class="form-group col-md-4">
              <label>Nationality</label>
             <select class="form-control" name="nationality" id="cars" onChange={handleOnChange} value={nationality}>
              <option >Indian</option>
              
            </select>
            </div>
          </div>
      </div>
    </div>


    <div class="col-md-12">
      <div class="headingdiv">Contact</div>
      <div class="form-bgclr">
       
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="" name="email" value={email} onChange={handleOnChange}/>
            </div>
             <div class="form-group col-md-4">
              <label>Onshore phone</label>
              <input type="text" class="form-control" placeholder="" name="onShorePhone" value={onShorePhone} onChange={handleOnChange}/>
            </div>
             <div class="form-group col-md-4">
              <label>Offshore phone</label>
              <input type="text" class="form-control" placeholder="" name="offShorePhone" value={offShorePhone} onChange={handleOnChange}/>
            </div>
            
          </div>
        
      </div>
    </div>

    <div class="col-md-12">
      <div class="headingdiv">CRM</div>
      <div class="form-bgclr">
      
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Sales pipeline *</label>
              <select class="form-control" name="salesStatus" id="cars" onChange={handleOnChange} value={salesPipeline}>
              <option >OnShore</option>
              <option >OffShore</option>
              
            </select>
            </div>
             <div class="form-group col-md-4">
              <label>Sale status *</label>
             <select class="form-control" name="salesStatus" id="cars" onChange={handleOnChange} value={salesStatus}>
              <option >Inquiry Recieved</option>
              <option >Counselling</option>
              <option >Quotation Sent</option>
              <option >Application</option>
              <option >Waiting for Loo</option>
              <option >Payment Pending</option>
              <option >Waiting for CoE</option>
              <option >Apply for Visa</option>
              <option >Waiting for Visa Requirement</option>
              <option >Waiting for Visa</option>
              <option >Visa Granted</option>
              <option >Course in Progress</option>
            </select>
            </div>
             <div class="form-group col-md-4">
              <label>Heat level</label>
             <select class="form-control" name="heatLevel" id="cars" onChange={handleOnChange} value={heatLevel}>
              <option >Very Hot</option>
              <option >Hot</option>
              <option >Warm</option>
              <option >Cold</option>
            </select>
            </div>
            
          </div>
          {isLoading && <Spinner variant="primary" animation="border" />}
       
      </div>
    </div>

     <div class="col-md-12">
      <div class="headingdiv">Add a note</div>
      <div class="form-bgclr">
     
          <div class="form-row">
            <div class="form-group col-md-12">
             <textarea class="form-control" rows="5" placeholder="Onshore" name="note" value={note} onChange={handleOnChange}></textarea>
              
            </div>
           
            
          </div>
          <div class="footersingbtn">
             <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
           </div>
       
      </div>
    </div>
        </form>
      </div>
    </div>
</section>
</div>   
</div>

    )
}

