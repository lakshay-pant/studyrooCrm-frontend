import "./allStudentStyle.css";
import {InquiryRecieved} from "../../components/allStudentTemplates/InquiryRecieved"
import {Counselling} from "../../components/allStudentTemplates/Counselling"
import {QuotationSent} from "../../components/allStudentTemplates/QuotationSent"
import {Application} from "../../components/allStudentTemplates/Application"
import {WaitingForLoo} from "../../components/allStudentTemplates/WaitingForLoo"
import {PaymentPending} from "../../components/allStudentTemplates/PaymentPending"
import {WaitingForCoE} from "../../components/allStudentTemplates/WaitingForCoE"
import {ApplyForVisa} from "../../components/allStudentTemplates/ApplyForVisa"
import {WaitingForVisaRequirement} from "../../components/allStudentTemplates/WaitingForVisaRequirements"
import {WaitingForVisa} from "../../components/allStudentTemplates/WaitingForVisa"
import {VisaGranted} from "../../components/allStudentTemplates/VisaGranted"
import {CourseInProgress} from "../../components/allStudentTemplates/CourseInProgress"

import {Link} from "react-router-dom"


 const AllStudent = () => {
    return(
        <div className="content-wrapper">
            <div className="maincontent-rightside student-view add-student">
               
            <section className="maincontent">
                <div className="container-fluid">
                    <div className="row">
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

            <section className="student-data">
                <div className="container">

                    <div className="student-filter">
                        <div class="row">
                            <div class="col-md-9 col-sm-6 col-12">
                                <div class="headingdiv">I need help with students & leads</div>
                            </div>
                            <div class="col-md-3 col-sm-6 col-12">
                                <div class="filter-area">
                                    <select name="students" id="students">
                                        <option value="new">import</option>
                                        <option value="new">New Student</option>
                                        <option value="exisitng">Existing Student</option>  
                                    </select>
                                    <div class="st-filter">
                                        <p><i class="fa fa-buffer"></i>Filter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="student-collection">
                        <div class="row">
                           <InquiryRecieved/>
                              <Counselling/>
                            
                            <QuotationSent/>
                            <Application/>
                            <WaitingForLoo/>
                            <PaymentPending/>
                        <WaitingForCoE/>
                            <ApplyForVisa/>

                            <WaitingForVisaRequirement/>
                            <WaitingForVisa/>
<VisaGranted/>
<CourseInProgress/>
                            

                            
                            
                        
                            
                            
                            
                    

                           

                          


                          

                           
                        </div>
                    </div>    
                </div>        
            </section>
                
        </div>
    </div>

    )
}

export default AllStudent;