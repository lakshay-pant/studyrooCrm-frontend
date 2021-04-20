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

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  };

  

  return (
    <div className="content-wrapper">
      <div className="maincontent-rightside student-view add-student uncategorized">

        <section class="maincontent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5 col-12">
                <div class="wel-admin">
                  <h5>Students overview</h5>
                </div>
              </div>
              <div class="col-lg-7 col-12">
                <div class="add-student-button">
                  <label>Import from spreadsheet</label>
                  <Link to="/addstudent">
                    <i class="fal fa-user-graduate"></i>
                        Add New Student
                    <span><i class="fal fa-plus"></i></span>
                  </Link>
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
                        <th>DATES</th>
                        <th>VISA</th>
                        <th>Sale status</th>
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
                              <td>{(Moment(item.addedAt).format('DD/MM/YYYY'))}</td>
                              <td></td>
                              <td>{item.salesStatus}</td>
                              <td>{item.userName}</td>
                              

                              <td>
                                  <div class="action">
                                      <a href="#"><i class="fas fa-pen"></i></a>
                                  </div>
                                                </td>
                              <td />
                             
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