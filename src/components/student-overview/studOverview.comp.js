import React, { useEffect,useState } from 'react';
import "./studOverview.style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { fetchAllStudents } from "../../pages/allStudents/allStudentAction";
import { filterSearchUser, fetchAllUsers } from "../getAllTheUsers/getUsersAction";
import Moment from 'moment';
import axios from "axios"
import { Accordion } from 'react-bootstrap';
import {editStudent} from "./studentOverviewAction"

import {deleteStudent} from "./studentOverviewDeleteAction"

export const UncategorizedStudents = () => {
 

  const dispatch = useDispatch();
  const { students } = useSelector(
    (state) => state.allStudent
  );
 

  const [studentUserName,setStudentUserName]=useState("")
  const [cliId,setCliId]=useState("")
  useEffect(() => {
    if (!students.length) {
      dispatch(fetchAllStudents());
    }
  }, [students, dispatch]);

  const { users } = useSelector(
    (state) => state.getUser
  );

  console.log("users", users)


  
  
  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
  }, [users, dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [ID, setID] = useState("");
  const [userName, setUserName] = useState("");
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

        case "userName":
        setUserName(value);
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
    console.log(nation)
    
    const newStudent = {
      firstName,middleName,lastName,email,genders,nation,salesPipeline,salesStatus,heatLevel,note,onShorePhone,offShorePhone,birthday,onShoreCurrentLocation,offShoreCurrentLocation,onShoreAddress,onShoreLocation,unitNumber,streetNumber,streetName,city,country,zipCode,offShoreAdress,offShoreLocation,offShoreUnitNumber,offShoreStreetNumber,streetNa,offShoreCity,offShoreCountry,offShoreZipCode,usi,educationLevel,instituteName,gpa,yearLevel,schoolCurriculum,schoolCurriculumDetails,passNumber,passNationality,passIssueDate,passExpiryDate,passComments,grantDate,visaExpiryDate,visaType,visaComments,insuranceStartDate,insuranceExpiryDate,insuranceType,insuranceNumber,insuranceComment,otherComments,locationStatus,referalSource
    };
    console.log(ID)
    dispatch(editStudent(newStudent,ID));
    
    console.log(firstName,lastName,email,birthday,middleName,genders,nation,onShorePhone,offShorePhone,note,salesPipeline,salesStatus,heatLevel,onShoreCurrentLocation,offShoreCurrentLocation,onShoreAddress,onShoreLocation,unitNumber,streetNumber,streetName,city,country,zipCode,offShoreAdress,offShoreLocation,offShoreUnitNumber,offShoreStreetNumber,streetNa,offShoreCity,offShoreCountry,offShoreZipCode,usi,educationLevel,instituteName,gpa,yearLevel,schoolCurriculum,schoolCurriculumDetails,passNumber,passNationality,passIssueDate,passExpiryDate,passComments,grantDate,visaExpiryDate,visaType,visaComments,insuranceStartDate,insuranceExpiryDate,insuranceType,insuranceNumber,insuranceComment,otherComments,locationStatus,referalSource)
  }

  const showModal = () => {
    setIsOpen(true);
  }

  const showModal2 = (item) => {
    console.log(item._id)
    
    setID(item._id)
    setSalesPipeline(item.salesPipeline)
    setSalesStatus(item.salesStatus)
    setHeatLevel(item.heatLevel)
    setOtherComments(item.otherComments)
    setLocationStatus(item.locationStatus)
    setFirstName(item.firstName)
    setReferalSource(item.referalSource)
    setUserName(item.userName)
    setNote(item.note)
    setLastName(item.lastName)
    setBirthday(item.birthday)
    setGenders(item.genders)
    setNation(item.nation)
    setEmail(item.email)
    setOnShorePhone(item.onShorePhone)
    setOffShorePhone(item.offShorePhone)
    setVisaType(item.visaType)
    setVisaExpiryDate(item.visaExpiryDate)



    
    setIsOpen2(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };


  const deleteStudentRecord = () => {

    dispatch(deleteStudent(ID))
    
  };

  

  return (
    <div className="content-wrapper">
      <div className="maincontent-rightside student-view add-student uncategorized">

        <section class="maincontent">
          <div class="container-fluid">
            <div class="row">
              <div className="col-md-6">
                <div className="add-student">
                    <div className="add-text">
                        <div className="add-round">
                          <span><i className="fa fa-tasks"></i></span>
                        </div>
                        <small>All Students</small>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="import-from">
                  <p>Import from spreadsheet</p>
                  <div className="st-file-upload">
                  <Link to="/addstudent"><label for="file-upload" className="custom-file-upload">
                  <i className="fa fa-user-graduate"></i> Add New Student
                  <span>+</span>
                  </label></Link>

                  <input id="file-upload" type="file"/>
                </div>       
              </div>
            </div>
          </div>
        </div>
      </section>


        {/*--student-leads start --*/}
        <div class="student-leads">
          <div class="container-fluid">
            <div class="leads">
              <div class="headingdiv">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="student-lead ">
                      <p>I need help with students & leads</p>
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <form class="activform ml-auto">
                      <div class="form-row">
                        <div class="form-group">
                          <div class="activi-inputs">
                            <div class="filter">
                              <div class="view">
                                <Link to="/student-overview">
                                  <i class="fas fa-th"></i>
                                  <label class="labelheade">View as pipelines</label>
                                </Link>
                              </div>
                            </div>
                            <select class="form-control filter-box">
                              <option>Import</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            <div class="filter">
                              <button onClick={showModal}>
                                <i class="fas fa-filter"></i>
                                <label class="labelheade">Filters</label>
                              </button>
                              <div class="modal fade filters-modal show" id="update" aria-modal="true">
                                <Modal show={isOpen} onHide={hideModal}>
                                  <Modal.Body>
                                    <div class="fl-head">
                                      <h5><span><i class="fal fa-filter"></i></span> Filters</h5>
                                      <button onClick={hideModal} className="close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="fl-form">
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label>List</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Visa expiring</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Courses ending</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Offers</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Status</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sale</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Referal source</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Next follow up date</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Heat level</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sort by</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="fotercontent">
                                          <div class="rest">
                                            <a href="#"><span><i class="far fa-redo"></i></span> Reset</a>
                                          </div>
                                          <div class="footersingbtn">
                                            <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Modal.Body>

                                  <Modal.Footer>

                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </div>

                            <div class="modal fade filters-modal" id="filters" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">

                                <div class="modal-content">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>

                                  <div class="modal-body">
                                    <div class="fl-head">
                                      <h5><span><i class="fal fa-filter"></i></span> Filters</h5>
                                    </div>
                                    <div class="fl-form">
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label>List</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Visa expiring</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Courses ending</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Offers</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Status</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sale</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Referal source</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Next follow up date</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Heat level</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sort by</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="fotercontent">
                                          <div class="rest">
                                            <a href="#"><span><i class="far fa-redo"></i></span> Reset</a>
                                          </div>
                                          <div class="footersingbtn">
                                            <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--student-leads end --*/}

        {/*-- commantable --*/}
        <div class="commantablesection uncategorized-list">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="stuednttable table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>CREATED DATES</th>
                        <th>INFO</th>
                        <th>HEAT LEVEL</th>
                        <th>VISA</th>
                        <th>SALE STATUS</th>
                        <th>ASSIGNED TO</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        students.slice(0).reverse().map( (item)=>(
                            <tr key={item.id}>
                              <td>{item.firstName}</td>
                              <td>{(Moment(item.addedAt).format('DD/MM/YYYY'))}</td>
                              <td>{item.email}</td>
                              <td>{item.heatLevel}</td>
                              <td>{item.visaType}<br/>Exp:<br/>{item.visaExpiryDate}</td>
                              <td>{item.salesStatus}</td>
                              <td>{item.userName}</td> 
                              <td>{item.userName}</td>   
                                        
                              <td>
                                  <div class="action">
                                      <a onClick={()=>showModal2(item)}><i class="fas fa-pen"></i></a>
                                  </div>
                                  <div class="modal fade filters-modal show" aria-modal="true">
                                      <Modal show={isOpen2} onHide={hideModal2}>
                                    <div id="studentFilter">
                                      <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-top">
                                              <h5>Update Student</h5>
                                              <button type="button" onClick={hideModal2} class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                              </button>
                                            </div>
                                          <Modal.Body>
                                            <form onSubmit={handleOnStudentSubmit} >  <div class="student-filter-area">

<div class="row">

  <div class="col-lg-7 col-12">

      <div class="update-crm">
        <div class="headingdiv">CRM</div>
        <div class="crm-form">
          <div class="form-row">

              <div class="form-group col-md-6 col-12">
                <label>Sales Pipeline<p>*</p></label>
                <select class="form-control" name="salesPipeline" id="cars" onChange={handleOnChange} value={salesPipeline}>
                  <option >OnShore</option>
                  <option >OffShore</option>
                </select>
              </div>

              <div class="form-group col-md-6 col-12">
                <label>Sale Status<p>*</p></label>
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

              <div class="form-group col-md-6 col-12">
                <label>Heat Level</label>
                <select class="form-control" name="heatLevel" id="cars" onChange={handleOnChange} value={heatLevel}>
                                                                                      <option >Very Hot</option>
                                                                                      <option >Hot</option>
                                                                                      <option >Warm</option>
                                                                                      <option >Cold</option>
                </select>
              </div>

              <div class="form-group col-md-12 col-12">
                <label>Other comments (remarks)</label>
                <textarea  rows="5" class="form-control" placeholder="insert text here" value={otherComments} name="otherComments" onChange={handleOnChange}></textarea>
              </div>      
          </div>
        </div>
      </div>
      

      <div class="others">
        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div class="card">
                <div class="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                    <div class="headingdiv">Others <i class="fas fa-angle-down rotate-icon"></i></div>
                  </a>
                </div>
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                    data-parent="#accordionEx">
                    <div class="card-body">
                        <div class="crm-form">
                          <div class="form-row">

                              <div class="form-group col-md-4 col-12">
                                <label>Status <p>*</p></label>
                                <select class="form-control" name="locationStatus" value={locationStatus} id="cars" onChange={handleOnChange}>
                                  <option >Onshore</option>
                                  <option >Offshore</option>
                                </select>
                              </div>

                              <div class="form-group col-md-4 col-12">
                                <label>Referral source <p>*</p></label>
                                <select class="form-control" name="referalSource" value={referalSource} onChange={handleOnChange} id="cars">
                                  <option >unknown</option>
                                  <option >Youtube</option>
                                  <option >Instagram</option>
                                  <option >Facebook</option>
                                  <option >Google</option>
                                </select>
                              </div>

                        
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="counsellor">
        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div class="card">
                <div class="card-header" role="tab" id="headingOne2">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne2" aria-expanded="true"
                    aria-controls="collapseOne2">
                    <div class="headingdiv">Counsellors <i class="fas fa-angle-down rotate-icon"></i></div>
                  </a>
                </div>
                <div id="collapseOne2" class="collapse show" role="tabpanel" aria-labelledby="headingOne2"
                    data-parent="#accordionEx">
                  <div class="card-body">
                    <div class="crm-form">
                      <div class="form-row">

                          <div class="form-group col-md-12 col-12">
                            <label>Counsellor 1</label>
                            <input type="text" class="form-control" placeholder="" name="userNmae" value={userName} onChange={handleOnChange} />
                          </div>

                          
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>


      <div class="notes">
          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              <div class="card">
                  <div class="card-header" role="tab" id="headingOne3">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true"
                      aria-controls="collapseOne3">
                      <div class="headingdiv">Add a note <i class="fas fa-angle-down rotate-icon"></i></div>
                    </a>
                  </div>
                  <div id="collapseOne3" class="collapse show" role="tabpanel" aria-labelledby="headingOne3"
                      data-parent="#accordionEx">
                    <div class="card-body">
                      <div class="crm-form">
                        <div class="form-row">

                            <div class="form-group col-md-12 col-12">
                              <textarea name="note" value={note} rows="4" class="form-control" placeholder="Add a Note" onChange={handleOnChange}></textarea>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="update-student">
          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              <div class="card">
                  <div class="card-header" role="tab" id="headingOne4">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne4" aria-expanded="true"
                      aria-controls="collapseOne4">
                      <div class="headingdiv">Personal <i class="fas fa-angle-down rotate-icon"></i></div>
                    </a>
                  </div>
                  <div id="collapseOne4" class="collapse show" role="tabpanel" aria-labelledby="headingOne4"
                      data-parent="#accordionEx">
                      <div class="card-body">
                          <div class="crm-form">
                              <div class="form-row">

                                  <div class="form-group col-md-4 col-12">
                                    <label>First Name<p>*</p></label>
                                    <input type="text" class="form-control" placeholder="" name="firstName" value={firstName} onChange={handleOnChange}/>
                                  </div>

                                  <div class="form-group col-md-4 col-12">
                                    <label>Last Name<p>*</p></label>
                                    <input type="text" class="form-control" placeholder="" name="lastName" value={lastName} onChange={handleOnChange}/>
                                  </div>

                                  <div class="form-group col-md-4 col-12">
                                    <label>Birthday<p>*</p></label>
                                    <input type="date" class="form-control" placeholder="" name="birthday" value={birthday} onChange={handleOnChange}/>
                                  </div>

                                
                                  <div class="form-group col-md-4 col-12">
                                    <label>Gender</label>
                                    <select class="form-control" name="genders" value={genders} onChange={handleOnChange}>
                                      <option >Male</option>
                                      <option >Female</option>
                                      <option >Other</option>
                                    </select>
                                  </div>

                                  

                                  <div class="form-group col-md-4 col-12">
                                    <label>Nationality</label>
                                    <select class="form-control" name="nation" value={nation} onChange={handleOnChange}>
                                      <option >Poland</option>
                                      <option >Peru</option>
                                      <option >Norway</option>
                                      <option >Ghana</option>
                                    </select>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>


      <div class="contact">
         <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div class="card">
                <div class="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne5" aria-expanded="true"
                    aria-controls="collapseOne5">
                    <div class="headingdiv">Contact <i class="fas fa-angle-down rotate-icon"></i></div>
                  </a>
                </div>
                <div id="collapseOne5" class="collapse show" role="tabpanel" aria-labelledby="headingOne5"
                    data-parent="#accordionEx">
                    <div class="card-body">
                        <div class="crm-form">
                            <div class="form-row">

                              <div class="form-group col-md-12 col-12">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="" name="email" value={email} onChange={handleOnChange}/>
                              </div>

                              <div class="form-group col-md-12 col-12">
                                <label>Onshore phone</label>
                                <input type="text" class="form-control" placeholder="" name="onShorePhone" value={onShorePhone} onChange={handleOnChange}/>
                              </div>

                              <div class="form-group col-md-12 col-12">
                                <label>Offshore phone</label>
                                <input type="text" class="form-control" placeholder="" name="offShorePhone" value={offShorePhone} onChange={handleOnChange}/>
                              </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="visa">
          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              <div class="card">
                  <div class="card-header" role="tab" id="headingOne6">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne6" aria-expanded="true"
                      aria-controls="collapseOne6">
                      <div class="headingdiv">Visa <i class="fas fa-angle-down rotate-icon"></i></div>
                    </a>
                  </div>
                  <div id="collapseOne6" class="collapse show" role="tabpanel" aria-labelledby="headingOne6"
                      data-parent="#accordionEx">
                        <div class="card-body">
                          <div class="crm-form">
                            <div class="form-row">

                                <div class="form-group col-md-4 col-12">
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

                                <div class="form-group col-md-4 col-12">
                                  <label>Visa expire date</label>
                                  <input type="date" class="form-control" placeholder="" name="visaExpiryDate" value={visaExpiryDate} onChange={handleOnChange} />
                                </div>
                          </div>
                        </div>
                  </div>
              </div>
              </div>
          </div>
       </div>
  </div>                                                
  
</div>
</div>





<div class="fotercontent">      
<div class="form-buttons-w">
<div className="row">
   <div className="col-md-9">
      <button type="button" onClick={()=>deleteStudentRecord()} class="btn btn-danger btn-secondary"/>
   </div>
   <div className="col-md-3">
      
   <input type="submit" name="Save" class="btn float-right btn-primary getin-btn" value="Save"/>
   </div>
</div>      
</div>          
</div>
</form>

                                              
                                            </Modal.Body>
                                          </div>
                                      </div>
                                    </div>
                                    </Modal>
                                    
                                  </div>
                              </td>
                             
                            </tr>
                          )
                        )
                      }



                      {/* <tr>
                                                    <td>Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="action">
                                                            <a href="#"><i class="fas fa-pen"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td>Adam Malkowski</td>
                                                <td>01/02/2021</td>
                                                <td>adams258@o2.pl
                                                    Predicted income: A$21,600.00</td>
                                                <td>01/04/2021</td>
                                                <td>500
                                                    Exp: 03/06/2022
                                                </td>
                                                <td>Course in progress</td>
                                                <td>
                                                    <div class="assign">
                                                        <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                        </div>
                                                        <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="action">
                                                        <a href="#"><i class="fas fa-pen"></i></a>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="action">
                                                            <a href="#"><i class="fas fa-pen"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2 Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                                <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                                <p class="name">Artur Szulakowski</p>
                                                                <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div class="action">
                                                        <a href="#"><i class="fas fa-pen"></i></a>
                                                    </div>
                                                    </td>
                                                </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- commantable end here --*/}

      </div>
    </div>

  );

};