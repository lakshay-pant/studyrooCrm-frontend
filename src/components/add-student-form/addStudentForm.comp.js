import React,{useState} from 'react'
import "./addStudent.style.css"
import {useDispatch, useSelector} from "react-redux"
import {addStudentPending,addStudentSuccess,addStudentFail} from "./addStudentSlice"
import {
  Spinner,Alert
} from "react-bootstrap";
import {createNewStudent} from "../../api/studentApi"


export const AddStudentForm = () => {
  const dispatch=useDispatch()
 

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [birthday, setBirthday] = useState("");
const [gender, setGender] = useState("Male");
const [nationality, setNationality] = useState("Indian");
const [onShorePhone, setOnShorePhone] = useState("");
const [offShorePhone, setOffShorePhone] = useState("");
  const [email, setEmail] = useState("");
  const [salesPipeline, setSalesPipeline] = useState("");
  const [salesStatus, setSalesStatus] = useState("Volvo");
  const [heatLevel, setHeatLevel] = useState("Mercedes");
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
  
    
    dispatch(addStudentPending())

    try{

const isAuth=await createNewStudent({firstName,lastName,email,birthday,middleName,gender,nationality,onShorePhone,offShorePhone,note,salesPipeline,salesStatus,heatLevel})
console.log(isAuth)
if(isAuth.status=="error"){
return dispatch(addStudentFail(isAuth.message))
}
dispatch(addStudentSuccess())

    }catch(error){
dispatch(addStudentFail(error.message))

    }
    console.log(firstName,lastName,email,birthday,middleName,gender,nationality,onShorePhone,offShorePhone,note,salesPipeline,salesStatus,heatLevel)
  }

    return (
<div className="content-wrapper">
           <section class="student-from">
            <div class="container-fluid">
              <div class="student-bg">
                <div class="col-md-12">
                    <div class="headingdiv">Personal</div>
                    <div class="form-bgclr">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label>First Name*</label>
                        <input type="text" class="form-control" placeholder="" name=""/>
                      </div>
                      <div class="form-group col-md-4">
                        <label>Middle name</label>
                        <input type="text" class="form-control" placeholder="" name=""/>
                      </div>
                      <div class="form-group col-md-4">
                        <label>Last name*</label>
                        <input type="text" class="form-control" placeholder="" name=""/>
                      </div>
                      <div class="form-group col-md-4">
                        <label>Birthday</label>
                        <input type="text" class="form-control" placeholder="" name=""/>
                      </div>
                      <div class="form-group col-md-4">
                        <label>Gender</label>
                      <select class="form-control" name="cars" id="cars">
                        <option value="volvo">Male</option>
                        <option value="saab">Female</option>
                      
                      </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label>Nationality</label>
                      <select class="form-control" name="cars" id="cars">
                        <option value="volvo">Indian</option>
                        
                      </select>
                      </div>
                    </div>
                  </form>
                </div>
                </div>

                <div class="col-md-12">
                  <div class="headingdiv">Contact</div>
                  <div class="form-bgclr">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Email</label>
                          <input type="text" class="form-control" placeholder="" name=""/>
                        </div>
                        <div class="form-group col-md-4">
                          <label>Onshore phone</label>
                          <input type="text" class="form-control" placeholder="" name=""/>
                        </div>
                        <div class="form-group col-md-4">
                          <label>Offshore phone</label>
                          <input type="text" class="form-control" placeholder="" name=""/>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="headingdiv">CRM</div>
                  <div class="form-bgclr">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Sales pipeline *</label>
                          <input type="text" class="form-control" placeholder="All Students" name=""/>
                        </div>
                        <div class="form-group col-md-4">
                          <label>Sale status *</label>
                        <select class="form-control" name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                        </div>
                        <div class="form-group col-md-4">
                          <label>Heat level</label>
                        <select class="form-control" name="cars" id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                        </div>
                        
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="headingdiv">Add a note</div>
                  <div class="form-bgclr">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                        <textarea class="form-control" rows="5" placeholder="Onshore"></textarea>
                          
                        </div>
                      
                        
                      </div>
                      <div class="footersingbtn">
                                          <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
                                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        </div>

    )
}

