import React from 'react'
import "./dashboard.style.css"
import {Link} from "react-router-dom"

export const Dashboard = () => {
  
  return (
    <div className="html "> <div id="page-top" className="hold-transition sidebar-mini layout-fixed">
     

    <div className="wrapper">
    
      
    
      
    
      {/*-- Content Wrapper. Contains page content */}
      <div className="content-wrapper ">
        {/*-- Content Header (Page header) */}
        {/*-- /.content-header */}
    
        {/*-- Main content */}
    <div className="maincontent-rightside">
        <section className="maincontent">
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-12">
                  <div className="wel-admin">
                                <h2>Welcome, Artur. </h2>
                                <span>What would you like to do?</span>
                       </div>
              </div>
          </div>
      </div>
    </section>
    {/*-- boxese section */}
    <section className="allboxes">
        <div className="container-fluid">
           <div className="boxese-ul">
           <ul className="list-unstyled">
              <li>   <a>
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <Link to="/add-student">  <p className="mb-0">Add New Student</p></Link>
            </a>
         
              </li>
              <li>
               <a href="#">
                <span>
                   <i className="fal fa-tasks"></i>
                </span>
                <Link to="/add-task">  <p className="mb-0">Add New Task</p></Link>
            </a>
              </li>
              <li>
               <a href="#">
                <span>
                    <i className="fal fa-usd-circle"></i>
                </span>
                <p className="mb-0">See Agency Revenue</p>
            </a>
              </li>
              <li>
                <a href="#">
                <span>
                    <i className="fal fa-chart-pie-alt"></i>
                </span>
                <p className="mb-0">See Agency Performance</p>
            </a>
              </li>
              <li>
                <a href="#">
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p className="mb-0">Student Portal</p>
            </a>
              </li>
           </ul>
        </div>
        </div>
    </section>
    {/*-- boxese section */}
    
    {/*-- pending task section */}
    <section className="pendingtask">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="headingdiv">You have 8 tasks pending</div>
            <div className="client-mett table-responsive">
             <table className="table table-hover">
      
      <tbody>
        <tr>
          <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
        <tr>
            <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
         <tr>
              <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
      </tbody>
    </table>
            </div>
          </div>
    
          <div className="col-md-3">
             <div className="headingdiv">You have 8 tasks pending</div>
            <div className="progress-box">
             <div className="defult-progress">
                <span>
                Total<br/>
                task 08
              </span>
             </div>
             <div className="task-className">
               <ul className="list-unstyled"><li>
                 <a href="#"><i className="far fa-circle nav-icon"></i>Urgent</a>
               </li>
               <li>
                 <a href="#"><i className="far fa-circle nav-icon"></i>Normal</a>
               </li></ul>
             </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="headingdiv">Application Reminders</div>
            <div className="client-mett table-responsive clintmat2">
             <table className="table table-hover">
      
      <tbody>
        <tr>
          <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
        <tr>
            <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
         <tr>
              <td>Client Meeting<br/>
            <span>Created by: Artur Szulakowski.</span></td>
          <td>02 Dec 2020</td>
        </tr>
      </tbody>
    </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*-- pending task section  end*/}
    
    {/*-- activities section  */}
    <section className="activities">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="all-activity-button">
              <form className="activform ml-auto">
      <div className="form-row">
        <div className="form-group">
        <div className="activi-inputs">
             <label className="labelheade">View</label>
         <select className="form-control" id="exampleFormControlSelect1">
          <option>My Organization</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
      </div>
      <div className="form-group">
        <div className="activi-inputs m-0">
          <label  className="labelheade">Activities</label>
          <select className="form-control" id="exampleFormControlSelect1">
          <option>All</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
      </div>
      </div>
    </form>
            </div>
            <div className="headingdiv">Activities</div>
          </div>
          <div className="col-md-3">
            <div className="activity-boxmain">
             
              <div className="activi-content">
                   <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p>Students Added<small>last 30 days</small></p>
                
              </div>
              <div className="activi-value">
                <span>00</span>
              </div>
            </div>
          </div>
    
          <div className="col-md-3">
            <div className="activity-boxmain">
             
              <div className="activi-content">
                   <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p>Sales Added<small>last 30 days</small></p>
                
              </div>
              <div className="activi-value">
                <span>00</span>
              </div>
            </div>
          </div>
    
          <div className="col-md-3">
            <div className="activity-boxmain">
             
              <div className="activi-content">
                   <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p>Tasks Added<small>last 30 days</small></p>
                
              </div>
              <div className="activi-value">
                <span>00</span>
              </div>
            </div>
          </div>
    
          <div className="col-md-3">
            <div className="activity-boxmain">
             
              <div className="activi-content">
                   <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p>Task Completed<small>last 30 days</small></p>
                
              </div>
              <div className="activi-value">
                <span>00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*-- activities section  end*/}
    
    {/*-- graph section */}
    <section className="graph-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="garph">
              <img src="images/graph.jpg" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*-- graph section and here */}
    
  
    
    
    </div>
        {/*-- /.content */}
      </div>
      {/*-- /.content-wrapper */}
    
    
      {/*-- Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/*-- Control sidebar content goes here */}
      </aside>
      {/*-- /.control-sidebar */}
    </div>
    {/*-- ./wrapper */}
    
       
        </div></div>
   
   
  )
}

