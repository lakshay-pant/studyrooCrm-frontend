import React from 'react'
import "./dashboard.style.css"

export const Dashboard = () => {
  return (
    
    <div className="html "> <div id="page-top" className="hold-transition sidebar-mini layout-fixed">
     

    <div className="wrapper">
    
      {/*-- Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/*-- Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
         
        </ul>
    
        {/*-- SEARCH FORM */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
    
        {/*-- Right navbar links */}
        <ul className="navbar-nav topiconsbar">
            {/*-- Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
             <i className="fal fa-bell"></i>
              <span className="badge badge-warning navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">3 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              
              <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fal fa-cog"></i>
             
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
             
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </a>
              
            <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Settings
                                    </a>
    
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                     <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
            </div>
          </li>
         
          
          
        </ul>
      </nav>
      {/*-- /.navbar */}
    
      
    
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
              <li>
            <a href="#">
                <span>
                    <i className="fal fa-user-graduate"></i>
                </span>
                <p className="mb-0">Add New Student</p>
            </a>
              </li>
              <li>
               <a href="#">
                <span>
                   <i className="fal fa-tasks"></i>
                </span>
                <p className="mb-0">Add New Task</p>
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
    
    {/*-- more features */}
    <section className="morefeatures-section">
      <div className="container-fluid">
        <div className="headingdiv">More features to help you</div>
       <div className="row">
          <div className="col-md-3">
         <a href="#">
              <div className="morefeature-box">
              <span>
                <i className="fas fa-quote-right"></i>
              </span>
              <div className="qutemsg">
                <small>Quotes</small>
                <p>Send courses, insurance, accommodation, etc, to the student.</p>
              </div>
            </div>
         </a>
          </div>
           <div className="col-md-3">
          <a href="#">
              <div className="morefeature-box">
              <span>
           <i className="fal fa-tasks"></i>
              </span>
              <div className="qutemsg">
                <small>Tasks</small>
                <p>Reminders, tasks and your to-do list so you stay organized.</p>
              </div>
            </div>
          </a>
          </div>
           <div className="col-md-3">
          <a href="#">  <div className="morefeature-box">
              <span>
              <i className="fas fa-rss-square"></i>
              </span>
              <div className="qutemsg">
                <small>News Feed</small>
                <p>Price, college and course updates in one place.</p>
              </div>
            </div></a>
          </div>
           <div className="col-md-3">
           <a href="#">
              <div className="morefeature-box">
              <span>
                <i className="fas fa-envelope-open-text"></i>
              </span>
              <div className="qutemsg">
                <small>Templates</small>
                <p>Quickly send emails and quotes with one click.</p>
              </div>
            </div>
           </a>
          </div>
        </div>
      </div>
    </section>
    {/*-- more features end*/}
    
    
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

