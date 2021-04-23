import React,{useState,useEffect} from 'react'
import "./addStudent.style.css"
import {useDispatch, useSelector} from "react-redux"
import {
  Spinner,Alert
} from "react-bootstrap";

import {addStudent} from "./addStudentAction"




export const AddStudentForm = () => {
  const dispatch=useDispatch()

    
    

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
  const [visaExpiryDate, setVisaExpiryDate] = useState("");
  const [visaType, setVisaType] = useState("");
  const [visaComments, setVisaComments] = useState("");
  const [insuranceStartDate, setInsuranceStartDate] = useState("");
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [insuranceComment, setInsuranceComment] = useState("");
  const [otherComments, setOtherComments] = useState("");
  const [referalSource, setReferalSource] = useState("");
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
 
  const [offShoreCity, setOffShoreCity] = useState("");
  const [offShoreCountry, setOffShoreCountry] = useState("");
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
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
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

                case "instituteName":
                  setInstituteName(value);
                  break;

                  case "gpa":
                    setGpa(value);
                    break;

                    case "yearLevel":
                      setYearLevel(value);
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
      firstName,middleName,lastName,email,gender,nationality,salesPipeline,salesStatus,heatLevel,note,onShorePhone,offShorePhone,birthday,onShoreCurrentLocation,offShoreCurrentLocation,onShorePhone,onShoreAddress,onShoreLocation,unitNumber,streetNumber,streetName,city,country,zipCode,offShorePhone,offShoreAdress,offShoreLocation,offShoreUnitNumber,offShoreStreetNumber,streetNa,offShoreCity,offShoreCountry,offShoreZipCode,usi,educationLevel,instituteName,gpa,yearLevel,schoolCurriculum,schoolCurriculumDetails,passNumber,passNationality,passIssueDate,passExpiryDate,passComments,grantDate,visaExpiryDate,visaType,visaComments,insuranceStartDate,insuranceExpiryDate,insuranceType,insuranceNumber,insuranceComment,otherComments,status,referalSource
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
            <div class="form-group col-md-4">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="" name="email" value={email} onChange={handleOnChange}/>
            </div>
            
          </div>
      </div>
    </div>


    <div class="col-md-12">
      <div class="headingdiv">Applicant Current Location</div>
      <div class="form-bgclr">
       
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Onshore (In Australia)</label>
              <input type="text" class="form-control" placeholder="" name="onShoreLocation" value={onShoreCurrentLocation} onChange={handleOnChange}/>
            </div>
             <div class="form-group col-md-4">
              <label>Offshore (Overseas)</label>
              <input type="text" class="form-control" placeholder="" name="offShoreLocation" value={offShoreCurrentLocation} onChange={handleOnChange}/>
            </div>
          </div>
        
      </div>
    </div>
    
    <div class="col-md-12">    
      <div class="headingdiv">Onshore Information</div>
      <div class="form-bgclr">
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
              <select class="form-control" name="city" value={city} id="cars" onChange={handleOnChange} value={nationality}>
                 <option>XYZ</option>
                 <option>XYZ</option>
                 <option>XYZ</option>
                 <option>XYZ</option>   
                 <option>XYZ</option>
              </select>
            </div>
            
            <div class="form-group col-md-4">
              <label>Country</label>
              <select class="form-control" name="country" value={country} id="cars" onChange={handleOnChange} value={nationality}>
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
    <div class="col-md-12">    
      <div class="headingdiv">Offshore Information</div>
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

    <div class="col-md-12">    
      <div class="headingdiv">Education Details</div>
      <div class="form-bgclr">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>USI (Unique Student Number)</label>              
              <input type="text" class="form-control" placeholder="" name="usi" value={usi} />
            </div>
             <div class="form-group col-md-4">
              <label>Education Level</label>
              <input type="text" class="form-control" placeholder="" name="educationLevel" value={educationLevel}/>
            </div>
             <div class="form-group col-md-4">
              <label>Institute Name</label>
              <input type="text" class="form-control" placeholder="" name="instituteName" value={instituteName}/>
            </div>
            
            <div class="form-group col-md-4">
              <label>GPA</label>
              <input type="text" class="form-control" placeholder="" name="gpa" value={gpa} />
            </div>
            <div class="form-group col-md-4">
              <label>Year level</label>
              <input type="text" class="form-control" placeholder="" name="yearLevel" value={yearLevel} />
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

    <div class="col-md-12">    
      <div class="headingdiv">Passports</div>
      <div class="form-bgclr">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Number</label>              
              <input type="text" class="form-control" placeholder="" name="passNumber" value={passNumber} />
            </div>
            <div class="form-group col-md-4">
              <label>Nationality</label>
              <input type="text" class="form-control" placeholder="" name="passNationality" value={passNationality} />
            </div>
            <div class="form-group col-md-4">
              <label>Issue Date</label>
              <input type="date" class="form-control" placeholder="" name="passIssueDate" value={passIssueDate}  />
            </div>
            <div class="form-group col-md-4">
              <label>Expiry Date</label>
              <input type="date" class="form-control" placeholder="" name="passExpiryDate" value={passExpiryDate} />
            </div>
            <div class="form-group col-md-4">
              <label>Comments</label>
              <input type="text" class="form-control" placeholder="" name="passComments" value={passComments} />
            </div>
          </div>
      </div>
    </div>

    <div class="col-md-12">    
      <div class="headingdiv">Visas</div>
      <div class="form-bgclr">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Grant date</label>
              <input type="date" class="form-control" placeholder="" name="grantDate" value={grantDate} />
            </div>
            <div class="form-group col-md-4">
              <label>Expiry Date</label>
              <input type="date" class="form-control" placeholder="" name="visaExpiryDate" value={visaExpiryDate}  />
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
              <input type="text" class="form-control" placeholder="" name="visaComments" value={visaComments}  />
            </div>
          </div>
      </div>
    </div>

    <div class="col-md-12">    
      <div class="headingdiv">Insurance</div>
      <div class="form-bgclr">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Start date</label>
              <input type="date" class="form-control" placeholder="" name="insuranceStartDate" value={insuranceStartDate} />
            </div>
            <div class="form-group col-md-4">
              <label>Expiry Date</label>
              <input type="date" class="form-control" placeholder="" name="insuranceExpiryDate" value={insuranceExpiryDate}  />
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
              <input type="text" class="form-control" placeholder="" name="insuranceNumber" value={insuranceNumber}  />
            </div>
            <div class="form-group col-md-4">
              <label>Other comments (remarks)</label>
              <input type="text" class="form-control" placeholder="" name="insuranceComment" value={insuranceComment}  />
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
              <input type="text" class="form-control" placeholder="" name="otherComments" value={otherComments}  />
            </div>
          </div>
          {isLoading && <Spinner variant="primary" animation="border" />}
       
      </div>
    </div>

    <div class="col-md-12">
      <div class="headingdiv">Documents</div>
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

    <div class="col-md-12">
      <div class="headingdiv">Others</div>
      <div class="form-bgclr">
      
          <div class="form-row">
            <div class="form-group col-md-4">
              <label>Status </label>
              <select class="form-control" name="status" id="cars" onChange={handleOnChange} value={status}>
              <option >onShore</option>
              <option >offShore</option>
            
            </select>
            </div>
            <div class="form-group col-md-4">
              <label>Referral source </label>
              <select class="form-control" name="referalSource" id="cars" onChange={handleOnChange} value={referalSource}>
              <option >Unknown</option>
              <option >Youtube</option>
              <option >Instagram</option>
              <option >Facebook</option>
              <option >Google</option>
              <option >Social Networks</option>
              <option >Staff</option>
              <option >Seminar</option>
              <option >Client referal</option>
              <option >Freind referal</option>
              <option >Immigration agnet</option>
              <option >Local event</option>
            </select>
            </div>
             
          </div>
          {isLoading && <Spinner variant="primary" animation="border" />}
       
      </div>
    </div>

     <div class="col-md-12">
      <div class="headingdiv">Counsellors</div>
      <div class="form-bgclr">
     
          <div class="form-row">
            <div class="form-group col-md-12">
             <textarea class="form-control" rows="5" placeholder="Add a note" name="note" value={note} ></textarea>
              
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

