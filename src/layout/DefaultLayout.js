import React from 'react';
import * as s from "./App.styles";
import SideBar from "./sidebar/SideBar"
import * as Palette from './colors'
import "./defaultLayout.style.css"


export const DefaultLayout = ({children}) => {
    const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Yo Yo Travel',
    shortName: 'YO'
  };
  const menuItems = [
    {name: 'Dashboard', to: '/dashboard', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'Students', to: '/dashboard', icon: '/icons/about.svg', subMenuItems: [{ name: 'All Students', to: ''},        
    { name: 'Mandarian Speaking', to: ''},
    { name: 'Portoguese Speaking', to: ''},
    { name: 'Europeans', to: ''},
    { name: 'Test', to: ''},
    { name: 'Uncatorized', to: ''}] },
    {name: 'Tasks', to: '', icon: '/icons/destinations.svg', 
      subMenuItems: [
      ] },
    {name: 'Courses', to: '/dashboard', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Insurance', to: '/dashboard', icon: '/icons/services.svg', subMenuItems: [{ name: 'Quote and Buy', to: '/canada'},        
    { name: 'Students', to: '/brazil'},
    { name: 'Agent Voices', to: '/india'},
    { name: 'Commission and Invoices', to: '/australia'},
    { name: 'Credit and Card Payments', to: '/kenya'},
    ] },
    {name: 'Enroll & Book', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [] },
    {name: 'Accounting', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [{ name: 'Payments', to: '/canada'},        
    { name: 'Invoices', to: '/brazil'},
    { name: 'Refunds', to: '/india'},
    { name: 'Sub-Agents', to: '/australia'},
    { name: 'Intl. Transfer', to: '/kenya'},
    { name: 'Credit Card Payouts', to: '/moldova'}] },
    {name: 'Marketing', to: '/contacts', icon: '/icons/contacts.svg', subMenuItems: [{ name: 'Payments', to: '/canada'},        
    { name: 'Forms', to: '/brazil'},
    { name: 'Templates', to: '/india'},
    { name: "Automation", to: '/australia'},
    { name: 'Website', to: '/kenya'},
    { name: 'Goals', to: '/moldova'},{ name: 'Segments', to: '/moldova'}] },
    {name: 'Reports', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    {name: 'Analytics', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    
    
  ];

  const fonts = {
    header: 'Roboto Slab',
    menu: 'Roboto Slab'
  }
    return (
      <div><nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/*-- Left navbar links - */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
       
      </ul>
  
      {/*-- SEARCH FORM -*/}
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
  
           {/*-- Right navbar links -*/}
         <ul className="navbar-nav topiconsbar">
          {/*-- Notifications Dropdown Menu -*/}
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
    <div><s.App>
    <SideBar backgroundImage={backgroundImage}
sidebarHeader={sidebarHeader}
menuItems={menuItems}
fonts={fonts}
colorPalette={Palette.brown}/>
    <main>{children}</main>
   
</s.App></div>
      
      {/*-- more features -*/}
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
</section></div>
      
      
    )
}