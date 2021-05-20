import React,{useState,useEffect} from 'react'
import "./addStudent.style.css"
import {useDispatch, useSelector} from "react-redux"
import {
  Spinner,Alert
} from "react-bootstrap";

import {addStudent} from "./addStudentAction"

import { Accordion } from 'react-bootstrap';



export const AddStudentForm = () => {
  const dispatch=useDispatch()

    
    

  const { isLoading, status, message } = useSelector(
    (state) => state.addStudent
  );





  
 

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [birthday, setBirthday] = useState("");
const [genders, setGenders] = useState("Male");
const [nation, setNation] = useState("indian");
const [onShorePhone, setOnShorePhone] = useState("");
const [offShorePhone, setOffShorePhone] = useState("");
  const [email, setEmail] = useState("");
  const [salesPipeline, setSalesPipeline] = useState("OnShore");
  const [salesStatus, setSalesStatus] = useState("Inquiry Recieved");
  const [heatLevel, setHeatLevel] = useState("Very Hot");
  const [note, setNote] = useState("");
  const [visaExpiryDate, setVisaExpiryDate] = useState("");
  const [visaType, setVisaType] = useState("Any");
  const [visaComments, setVisaComments] = useState("");
  const [insuranceStartDate, setInsuranceStartDate] = useState("");
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("");
  const [insuranceType, setInsuranceType] = useState("Single(Just for the student)");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [insuranceComment, setInsuranceComment] = useState("");
  const [otherComments, setOtherComments] = useState("");
  const [referalSource, setReferalSource] = useState("Unkown");
  const [instituteName, setInstituteName] = useState("");
  const [gpa, setGpa] = useState("");
  const [yearLevel, setYearLevel] = useState("");
  const [schoolCurriculum, setSchoolCurriculum] = useState("");
  const [schoolCurriculumDetails, setSchoolCurriculumDetails] = useState("");
  const [passNumber, setPassNumber] = useState("");
  const [passNationality, setPassNationality] = useState("");
  const [passIssueDate, setPassIssueDate] = useState("");
  const [passExpiryDate, setPassExpiryDate] = useState("");
  const [grantDate, setGrantDate] = useState("");
  const [offShoreAdress, setOffShoreAdress] = useState("");
  const [offShoreLocation, setOffShoreLocation] = useState("");
  const [offShoreUnitNumber, setOffShoreUnitNumber] = useState("");
  const [offShoreStreetNumber, setOffShoreStreetNumber] = useState("");
  const [streetNa, setStreetNa] = useState("");
  const [passComments, setPassComments] = useState("");
  const [locationStatus, setLocationStatus] = useState("onShore");
 
  const [offShoreCity, setOffShoreCity] = useState("XYZ");
  const [offShoreCountry, setOffShoreCountry] = useState("India");
  const [offShoreZipCode, setOffShoreZipCode] = useState("");
  const [usi, setUsi] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [offShoreCurrentLocation, setOffShoreCurrentLocation] = useState("");
  const [onShoreAddress, setOnShoreAddress] = useState("");
  const [onShoreLocation, setOnShoreLocation] = useState("");
  const [onShoreCurrentLocation, setOnShoreCurrentLocation] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("XYZ");
  const [country, setCountry] = useState("India");
  const [zipCode, setZipCode] = useState("");

  




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

        case "genders":
        setGenders(value);
        break;

        case "nation":
          setNation(value);
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

      case "visaExpiryDate":
        setVisaExpiryDate(value);
        break;

        case "visaType":
          setVisaType(value);
          break;

          case "visaComments":
            setVisaComments(value);
            break;

            case "insuranceStartDate":
            setInsuranceStartDate(value);
            break;

            case "insuranceExpiryDate":
            setInsuranceExpiryDate(value);
            break;

            case "insuranceType":
            setInsuranceType(value);
            break;

            case "insuranceNumber":
            setInsuranceNumber(value);
            break;

            case "insuranceComment":
              setInsuranceComment(value);
              break;

              case "otherComments":
              setOtherComments(value);
              break;

              case "referalSource":
              setReferalSource(value);
              break;

              case "instituteName":
                setInstituteName(value);
                break;

                

                  case "gpa":
                    setGpa(value);
                    break;

                    case "yearLevel":
                      setYearLevel(value);
                      break;
                    
                     

                
                        case "schoolCurriculum":
                          setSchoolCurriculum(value);
                          break;

                          case "schoolCurriculumDetails":
                            setSchoolCurriculumDetails(value);
                            break;

                            case "passNumber":
                              setPassNumber(value);
                              break;


                              case "passNationality":
                                setPassNationality(value);
                                break;

                            

                                  case "passIssueDate":
                                    setPassIssueDate(value);
                                    break;

                                    case "passExpiryDate":
                                    setPassExpiryDate(value);
                                    break;

                                    case "grantDate":
                                    setGrantDate(value);
                                    break;

                                    case "offShoreAdress":
                                    setOffShoreAdress(value);
                                    break;

                                    case "offShoreLocation":
                                    setOffShoreLocation(value);
                                    break;

                                    case "offShoreUnitNumber":
                                    setOffShoreUnitNumber(value);
                                    break;

                                    case "offShoreStreetNumber":
                                    setOffShoreStreetNumber(value);
                                    break;

                                    case "streetNa":
                                    setStreetNa(value);
                                    break;

                                    case "offShoreCity":
                                    setOffShoreCity(value);
                                    break;

                                    case "offShoreCountry":
                                    setOffShoreCountry(value);
                                    break;

                                    case "offShoreZipCode":
                                    setOffShoreZipCode(value);
                                    break;

                                    case "usi":
                                    setUsi(value);
                                    break;

                                    case "educationLevel":
                                    setEducationLevel(value);
                                    break;

                                    case "educationLevel":
                                      setEducationLevel(value);
                                      break;

                                      case "offShoreCurrentLocation":
                                      setOffShoreCurrentLocation(value);
                                      break;

                                      case "onShoreAddress":
                                        setOnShoreAddress(value);
                                        break;

                                        case "onShoreLocation":
                                          setOnShoreLocation(value);
                                          break;

                                          case "onShoreCurrentLocation":
                                            setOnShoreCurrentLocation(value);
                                            break;

                                            case "unitNumber":
                                            setUnitNumber(value);
                                            break;

                                            case "streetNumber":
                                            setStreetNumber(value);
                                            break;

                                            case "streetName":
                                            setStreetName(value);
                                            break;


                                            case "city":
                                              setCity(value);
                                              break;

                                              case "country":
                                              setCountry(value);
                                              break;

                                              case "zipCode":
                                              setZipCode(value);
                                              break;

                                              case "passComments":
                                                setPassComments(value);
                                                break;

                                                case "locationStatus":
                                                  setLocationStatus(value);
                                                  break;








    

      

       

      default:
        break;
    }
  };

  

  const handleOnStudentSubmit=async(e)=>{
    e.preventDefault()
   

    
    const newStudent = {
      firstName,middleName,lastName,email,genders,nation,salesPipeline,salesStatus,heatLevel,note,onShorePhone,offShorePhone,birthday,onShoreCurrentLocation,offShoreCurrentLocation,onShoreAddress,onShoreLocation,unitNumber,streetNumber,streetName,city,country,zipCode,offShoreAdress,offShoreLocation,offShoreUnitNumber,offShoreStreetNumber,streetNa,offShoreCity,offShoreCountry,offShoreZipCode,usi,educationLevel,instituteName,gpa,yearLevel,schoolCurriculum,schoolCurriculumDetails,passNumber,passNationality,passIssueDate,passExpiryDate,passComments,grantDate,visaExpiryDate,visaType,visaComments,insuranceStartDate,insuranceExpiryDate,insuranceType,insuranceNumber,insuranceComment,otherComments,locationStatus,referalSource
    };
    dispatch(addStudent(newStudent));
    
    console.log(firstName,lastName,email,birthday,middleName,genders,nation,onShorePhone,offShorePhone,note,salesPipeline,salesStatus,heatLevel,onShoreCurrentLocation,offShoreCurrentLocation,onShoreAddress,onShoreLocation,unitNumber,streetNumber,streetName,city,country,zipCode,offShoreAdress,offShoreLocation,offShoreUnitNumber,offShoreStreetNumber,streetNa,offShoreCity,offShoreCountry,offShoreZipCode,usi,educationLevel,instituteName,gpa,yearLevel,schoolCurriculum,schoolCurriculumDetails,passNumber,passNationality,passIssueDate,passExpiryDate,passComments,grantDate,visaExpiryDate,visaType,visaComments,insuranceStartDate,insuranceExpiryDate,insuranceType,insuranceNumber,insuranceComment,otherComments,locationStatus,referalSource)
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
            <form onSubmit={handleOnStudentSubmit}  >
                                                        <div class="col-md-12">  
                                                              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="personal">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#personal1" aria-expanded="true"
                                                                          aria-controls="personal1">
                                                                          <div class="headingdiv">Personal <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="personal1" class="collapse show" role="tabpanel" aria-labelledby="personal"
                                                                          data-parent="#accordionEx">
                                                                          <div class="card-body">
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
                                                                                      <select class="form-control" name="genders" id="cars" onChange={handleOnChange} value={genders}>
                                                                                        <option >Male</option>
                                                                                        <option >Female</option>
                                                                                      
                                                                                      </select>
                                                                                      </div>
                                                                                      
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Nationality</label>
                                                                                      <select class="form-control" name="nation" id="cars" onChange={handleOnChange} value={nation}>
                                                                                        <option >Indian</option>
                                                                                        
                                                                                      </select>
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Email</label>
                                                                                        <input type="text" class="form-control" placeholder="" name="email" value={email} onChange={handleOnChange}/>
                                                                                      </div>
                                                                                      
                                                                                    </div>
                                                                                </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>


                                                        <div class="col-md-12">
                                                              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="location">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#location1" aria-expanded="true"
                                                                          aria-controls="location1">
                                                                          <div class="headingdiv">Applicant Current Location <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="location1" class="collapse show" role="tabpanel" aria-labelledby="location"
                                                                          data-parent="#accordionEx">
                                                                          <div class="card-body">
                                                                          <div class="form-bgclr">
                                                                                <div class="form-row">
                                                                                    <div class="form-group col-md-4">
                                                                                      <label>Onshore (In Australia)</label>
                                                                                      <input type="text" class="form-control" placeholder="" name="onShoreCurrentLocation" value={onShoreCurrentLocation} onChange={handleOnChange}/>
                                                                                    </div>
                                                                                    <div class="form-group col-md-4">
                                                                                      <label>Offshore (Overseas)</label>
                                                                                      <input type="text" class="form-control" placeholder="" name="offShoreCurrentLocation" value={offShoreCurrentLocation} onChange={handleOnChange}/>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                         </div>
    
                                                            <div class="col-md-12"> 
                                                                  <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                          <div class="card">
                                                                              <div class="card-header" role="tab" id="onshore">
                                                                                <a data-toggle="collapse" data-parent="#accordionEx" href="#onshore1" aria-expanded="true"
                                                                                  aria-controls="onshore1">
                                                                                  <div class="headingdiv">Onshore Information <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                                </a>
                                                                              </div>
                                                                              <div id="onshore1" class="collapse show" role="tabpanel" aria-labelledby="onshore"
                                                                                  data-parent="#accordionEx">
                                                                                  <div class="card-body">
                                                                                  <div class="form-bgclr">
                                                                                        <div class="form-row">
                                                                                        <div class="form-row">
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Phone</label>    
                                                                                                <input type="text" class="form-control" placeholder="" name="onShorePhone" value={onShorePhone} onChange={handleOnChange} />
                                                                                              </div>
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Address</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="onShoreAddress" value={onShoreAddress} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Enter a location</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="onShoreLocation" value={onShoreLocation} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Unit number</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="unitNumber" value={unitNumber} onChange={handleOnChange}/>
                                                                                              </div>

                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Street number</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="streetNumber" value={streetNumber} onChange={handleOnChange}/>
                                                                                              </div>

                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Street Name</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="streetName" value={streetName} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>City</label>
                                                                                                <select class="form-control" name="city" value={city} id="cars" onChange={handleOnChange} >
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>   
                                                                                                  <option>XYZ</option>
                                                                                                </select>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Country</label>
                                                                                                <select class="form-control" name="country" value={country} id="cars" onChange={handleOnChange} >
                                                                                                  <option >India</option>
                                                                                                </select>
                                                                                              </div>

                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Zipcode</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="zipCode" value={zipCode} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                  </div>
                                                            </div>

                                                            <div class="col-md-12">
                                                                  <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                          <div class="card">
                                                                              <div class="card-header" role="tab" id="offshore2">
                                                                                <a data-toggle="collapse" data-parent="#accordionEx" href="#offshore3" aria-expanded="true"
                                                                                  aria-controls="location1">
                                                                                  <div class="headingdiv">Offshore Information <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                                </a>
                                                                              </div>
                                                                              <div id="offshore3" class="collapse show" role="tabpanel" aria-labelledby="offshore2"
                                                                                  data-parent="#accordionEx">
                                                                                  <div class="card-body">
                                                                                  <div class="form-bgclr">
                                                                                        <div class="form-row">
                                                                                        <div class="form-group col-md-4">
                                                                                                <label>Phone</label>    
                                                                                                <input type="text" class="form-control" placeholder="" name="offShorePhone" value={offShorePhone} onChange={handleOnChange} />
                                                                                              </div>
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Address</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="offShoreAdress" value={offShoreAdress} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Enter a location</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="offShoreLocation" value={offShoreLocation} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Unit number</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="offShoreUnitNumber" value={offShoreUnitNumber} onChange={handleOnChange}/>
                                                                                              </div>

                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Street number</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="offShoreStreetNumber" value={offShoreStreetNumber} onChange={handleOnChange}/>
                                                                                              </div>

                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Street Name</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="streetNa" value={streetNa} onChange={handleOnChange}/>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>City</label>
                                                                                                <select class="form-control" name="offShoreCity" id="cars" onChange={handleOnChange} value={offShoreCity}>
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>
                                                                                                  <option>XYZ</option>   
                                                                                                  <option>XYZ</option>
                                                                                                </select>
                                                                                              </div>
                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Country</label>
                                                                                                <select class="form-control" name="offShoreCountry" id="cars" onChange={handleOnChange} value={offShoreCountry}>
                                                                                                  <option >India</option>
                                                                                                </select>
                                                                                              </div>

                                                                                              
                                                                                              <div class="form-group col-md-4">
                                                                                                <label>Zipcode</label>
                                                                                                <input type="text" class="form-control" placeholder="" name="offShoreZipCode" value={offShoreZipCode} onChange={handleOnChange}/>
                                                                                              </div>
                    
                                                                                          </div>
                                                                                        </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                            </div>

      
                                                           <div class="col-md-12">
                                                              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="education">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#education1" aria-expanded="true"
                                                                          aria-controls="education1">
                                                                          <div class="headingdiv">Education Details <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="education1" class="collapse show" role="tabpanel" aria-labelledby="education"
                                                                          data-parent="#accordionEx">
                                                                          <div class="card-body">
                                                                             <div class="form-row">
                                                                                <div class="form-group col-md-4">
                                                                                  <label>USI (Unique Student Number)</label>              
                                                                                  <input type="text" class="form-control" placeholder="" name="usi" value={usi}  onChange={handleOnChange} />
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                  <label>Education Level</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="educationLevel" value={educationLevel}  onChange={handleOnChange}/>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                  <label>Institute Name</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="instituteName" value={instituteName}  onChange={handleOnChange}/>
                                                                                </div>        
                                                                                <div class="form-group col-md-4">
                                                                                  <label>GPA</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="gpa" value={gpa}  onChange={handleOnChange} />
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                  <label>Year level</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="yearLevel" value={yearLevel}  onChange={handleOnChange} />
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                  <label>School curriculum</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="schoolCurriculum" value={schoolCurriculum} onChange={handleOnChange}/>
                                                                                </div>
                                                                                <div class="form-group col-md-4">
                                                                                  <label>School curriculum details</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="schoolCurriculumDetails" value={schoolCurriculumDetails} onChange={handleOnChange}/>
                                                                                </div>
                                                                          
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                            </div>
                                                          </div>


      
                                                          <div class="col-md-12">
                                                              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="passport">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#passport1" aria-expanded="true"
                                                                          aria-controls="passport1">
                                                                          <div class="headingdiv">Passports <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="passport1" class="collapse show" role="tabpanel" aria-labelledby="passport"
                                                                          data-parent="#accordionEx">
                                                                          <div class="card-body">
                                                                              <div class="form-bgclr">
                                                                               <div class="form-row">
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Number</label>              
                                                                                    <input type="text" class="form-control" placeholder="" name="passNumber" value={passNumber}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Nationality</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="passNationality" value={passNationality}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Issue Date</label>
                                                                                    <input type="date" class="form-control" placeholder="" name="passIssueDate" value={passIssueDate}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Expiry Date</label>
                                                                                    <input type="date" class="form-control" placeholder="" name="passExpiryDate" value={passExpiryDate}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Comments</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="passComments" value={passComments}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                          </div>
                                                                       </div>
                                                                  </div>
                                                              </div>
                                                          </div> 
     

                                                        <div class="col-md-12"> 
                                                           <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="visa">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#visa1" aria-expanded="true"
                                                                          aria-controls="visa1">
                                                                          <div class="headingdiv">Visas <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="visa1" class="collapse show" role="tabpanel" aria-labelledby="visa"
                                                                          data-parent="#accordionEx">
                                                                            <div class="card-body">
                                                                              <div class="form-bgclr">
                                                                                <div class="form-row">
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Grant date</label>
                                                                                    <input type="date" class="form-control" placeholder="" name="grantDate" value={grantDate}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Expiry Date</label>
                                                                                    <input type="date" class="form-control" placeholder="" name="visaExpiryDate" value={visaExpiryDate}   onChange={handleOnChange} />
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Type</label>
                                                                                    <select class="form-control" name="visaType" id="cars" onChange={handleOnChange} value={visaType}>
                                                                                    <option >Any</option>
                                                                                    <option >Student visa</option>
                                                                                    <option >Working holiday</option>
                                                                                    <option >Work & holiday</option>
                                                                                    <option >Citizenship</option>
                                                                                    <option >other</option>
                                                                                  </select>
                                                                                  </div>
                                                                                  <div class="form-group col-md-4">
                                                                                    <label>Other comments (remarks)</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="visaComments" value={visaComments}  onChange={handleOnChange} />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                           </div>
                                                                      </div>
                                                                  </div>
                                                           </div>
                                                        </div>
        
     
                                                          <div class="col-md-12">
                                                               <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                  <div class="card">
                                                                      <div class="card-header" role="tab" id="date">
                                                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#date1" aria-expanded="true"
                                                                          aria-controls="date1">
                                                                          <div class="headingdiv">Start date <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                        </a>
                                                                      </div>
                                                                      <div id="date1" class="collapse show" role="tabpanel" aria-labelledby="date"
                                                                          data-parent="#accordionEx">
                                                                          <div class="card-body">
                                                                              <div class="form-bgclr">
                                                                                  <div class="form-row">
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Start Date</label>
                                                                                        <input type="date" class="form-control" placeholder="" name="insuranceStartDate" value={insuranceStartDate}  onChange={handleOnChange} />
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Expiry Date</label>
                                                                                        <input type="date" class="form-control" placeholder="" name="insuranceExpiryDate" value={insuranceExpiryDate }   onChange={handleOnChange} />
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Type</label>
                                                                                        <select class="form-control" name="insuranceType" id="cars" onChange={handleOnChange} value={insuranceType}>
                                                                                            <option >Single(Just for the student)</option>
                                                                                            <option >Couple(Just for the student)</option>
                                                                                            <option >Single parent(Student and their kid)</option>
                                                                                            <option >Family(Student,partner and Kid)</option>
                                                                                        </select>
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Number</label>
                                                                                        <input type="text" class="form-control" placeholder="" name="insuranceNumber" value={insuranceNumber}   onChange={handleOnChange}/>
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Other comments (remarks)</label>
                                                                                        <input type="text" class="form-control" placeholder="" name="insuranceComment" value={insuranceComment}  onChange={handleOnChange} />
                                                                                      </div>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                               </div>
                                                          </div>
      


                                                          <div class="col-md-12">
                                                                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                    <div class="card">
                                                                        <div class="card-header" role="tab" id="crm">
                                                                          <a data-toggle="collapse" data-parent="#accordionEx" href="#crm1" aria-expanded="true"
                                                                            aria-controls="crm1">
                                                                            <div class="headingdiv">CRM<i class="fas fa-angle-down rotate-icon"></i></div>
                                                                          </a>
                                                                        </div>
                                                                        <div id="crm1" class="collapse show" role="tabpanel" aria-labelledby="crm"
                                                                            data-parent="#accordionEx">
                                                                              <div class="card-body">
                                                                                <div class="form-bgclr">
                                                                                  <div class="form-row">
                                                                                    <div class="form-group col-md-4">
                                                                                      <label>Sales pipeline<p>*</p></label>
                                                                                      <select class="form-control" name="salesPipeline" id="cars" onChange={handleOnChange} value={salesPipeline}>
                                                                                        <option >OnShore</option>
                                                                                        <option >OffShore</option>
                                                                                      </select>
                                                                                    </div>
                                                                                    <div class="form-group col-md-4">
                                                                                      <label>Sale status<p>*</p></label>
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
                                                                                      <label>Lead level</label>
                                                                                       <select class="form-control" name="heatLevel" id="cars" onChange={handleOnChange} value={heatLevel}>
                                                                                      <option >Very Hot</option>
                                                                                      <option >Hot</option>
                                                                                      <option >Warm</option>
                                                                                      <option >Cold</option>
                                                                                    </select>
                                                                                    </div>
                                                                                    <div class="form-group col-md-4">
                                                                                      <label>Other comments (remarks)</label>
                                                                                      <input type="text" class="form-control" placeholder="" name="otherComments" value={otherComments}  onChange={handleOnChange} />
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                {isLoading && <Spinner variant="primary" animation="border" />}
                                                                              </div>
                                                                        </div>
                                                                     </div>
                                                                </div>
                                                           </div>
     
                                                           <div class="col-md-12">
                                                                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                    <div class="card">
                                                                        <div class="card-header" role="tab" id="location">
                                                                          <a data-toggle="collapse" data-parent="#accordionEx" href="#documents1" aria-expanded="true"
                                                                            aria-controls="documents1">
                                                                            <div class="headingdiv">Documents<i class="fas fa-angle-down rotate-icon"></i></div>
                                                                          </a>
                                                                        </div>
                                                                        <div id="documents1" class="collapse show" role="tabpanel" aria-labelledby="documents1"
                                                                            data-parent="#accordionEx">
                                                                            <div class="card-body">
                                                                                <div class="form-bgclr">
                                                                                    <div class="form-row">
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Passport</label>
                                                                                        <input type="file"  />
                                                                                      </div>
                                                                                      <div class="form-group col-md-4">
                                                                                        <label>Certificate</label>
                                                                                        <input type="file" />
                                                                                      </div>            
                                                                                    </div>
                                                                                    {isLoading && <Spinner variant="primary" animation="border" />}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                          </div>
      
                                                          <div class="col-md-12">
                                                                <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                    <div class="card">
                                                                        <div class="card-header" role="tab" id="others">
                                                                          <a data-toggle="collapse" data-parent="#accordionEx" href="#others1" aria-expanded="true"
                                                                            aria-controls="others1">
                                                                            <div class="headingdiv">Others<i class="fas fa-angle-down rotate-icon"></i></div>
                                                                          </a>
                                                                        </div>
                                                                        <div id="others1" class="collapse show" role="tabpanel" aria-labelledby="others"
                                                                            data-parent="#accordionEx">
                                                                             <div class="card-body">
                                                                                <div class="form-bgclr">
                                                                                   <div class="form-row">

                                                                                      <div class="form-group col-md-4 col-12">
                                                                                        <label>Status <p>*</p></label>
                                                                                        <select class="form-control" name="locationStatus" value={locationStatus} onChange={handleOnChange} id="cars">
                                                                                          <option >Onshore</option>
                                                                                          <option >Offshore</option>
                                                                                        </select>
                                                                                      </div>

                                                                                      <div class="form-group col-md-4 col-12">
                                                                                        <label>Referral source <p>*</p></label>
                                                                                        <select class="form-control" name="referalSource" value={referalSource} id="cars" onChange={handleOnChange}>
                                                                                          <option >unknown</option>
                                                                                          <option >Youtube</option>
                                                                                          <option >Instagram</option>
                                                                                          <option >Facebook</option>
                                                                                          <option >Google</option>
                                                                                        </select>
                                                                                      </div>

                                                                                     
                                                                                   </div>


                                                                                    {isLoading && <Spinner variant="primary" animation="border" />}
                                                                                </div>
                                                                             </div>
                                                                         </div>
                                                                    </div>
                                                                </div>
                                                           </div>
      
                                                          

                                                           <div class="col-md-12">
                                                              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                    <div class="card">
                                                                        <div class="card-header" role="tab" id="note">
                                                                          <a data-toggle="collapse" data-parent="#accordionEx" href="#note1" aria-expanded="true"
                                                                            aria-controls="note1">
                                                                            <div class="headingdiv">Add a Note <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                          </a>
                                                                        </div>
                                                                        <div id="note1" class="collapse show" role="tabpanel" aria-labelledby="note"
                                                                            data-parent="#accordionEx">
                                                                            <div class="card-body">
                                                                            <div class="form-bgclr">
                                                                                  <div class="form-row">
                                                                                      <div class="form-group col-md-12">
                                                                                        <textarea class="form-control" rows="5" placeholder="Add a note" name="note" value={note}  onChange={handleOnChange}></textarea>          
                                                                                        </div>
                                                                                    </div>
                                                                                  </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
      
                                                              <div class="footersingbtn">
                                                                <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
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