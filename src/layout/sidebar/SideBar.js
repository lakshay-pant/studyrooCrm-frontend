import React from 'react'
import "./sidebar.style.css"

export const SideBar = () => {
    return (<div className="sidebar-mini layout-fixed">
        {/*-- Main Sidebar Container */}
      <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
 {/*-- Brand Logo */}
 <a href="index3.html" className="brand-link">
   <img src="images/logo.png" alt="Studyroo-logo" className="img-fluid"
      />
  
 </a>

 {/*-- Sidebar */}
 <div className="sidebar">
   {/*-- Sidebar user panel (optional) */}
   <div className="user-panel ">
     <div className="image">
       <img src="images/admin.svg" className="img-circle elevation-2" alt="User Image"/>
     </div>
     <div className="info">
       <a href="#" className="d-block">Artur Szulakowski </a>
       <span>MANAGING DIRECTOR</span>
     </div>
   </div>

   {/*-- Sidebar Menu */}
   <nav className="mt-2">
     <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       {/*-- Add icons to the links using the .nav-icon className
            with font-awesome or any other icon font library */}
       <li className="nav-item">
         <a href="#" className="nav-link active">
           <i className="nav-icon fas fa-tachometer-alt"></i>
           <p>
             Dashboard
           </p>
         </a>
        
       </li>
     
       <li className="nav-item has-treeview">
         <a href="#" className="nav-link">
          <i className="fal fa-user-graduate"></i>
           <p>
              Students
             <i className="fas fa-angle-left right"></i>
             
           </p>
         </a>
         <ul className="nav nav-treeview">
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Top Navigation</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Top Navigation</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Boxed</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Fixed Sidebar</p>
             </a>
           </li>
          
         </ul>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="fal fa-tasks"></i>
           <p>
             Task
           </p>
         </a>
       </li>
        <li className="nav-item">
         <a href="#" className="nav-link">
              <i className="fas fa-rss-square"></i>
           <p>
             News Feed
           </p>
         </a>
       </li>
        <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="fal fa-book-alt"></i>
           <p>
             Courses
           </p>
         </a>
       </li>
       <li className="nav-item has-treeview">
         <a href="#" className="nav-link">
           <i className="fal fa-house-flood"></i>
           <p>
             Insurance
             <i className="fas fa-angle-left right"></i>
           </p>
         </a>
         <ul className="nav nav-treeview">
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>General</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Icons</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Buttons</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Sliders</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Modals & Alerts</p>
             </a>
           </li>
          
         </ul>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link">
          <i className="far fa-window-restore"></i>
           <p>
             Accommodation
           </p>
         </a>
       </li>
        <li className="nav-item">
         <a href="#" className="nav-link">
         <i className="fas fa-book"></i>
           <p>
            Enroll Book
           </p>
         </a>
       </li>

       <li className="nav-item has-treeview">
         <a href="#" className="nav-link">
         <i className="far fa-calculator"></i>
           <p>
            Accounting
             <i className="fas fa-angle-left right"></i>
           </p>
         </a>
         <ul className="nav nav-treeview">
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>General Elements</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Advanced Elements</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Editors</p>
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Validation</p>
             </a>
           </li>
         </ul>
       </li>
      
       <li className="nav-item has-treeview">
         <a href="#" className="nav-link">
          <i className="fas fa-laptop-code"></i>
           <p>
             Marketing
             <i className="right fas fa-angle-left"></i>
           </p>
         </a>
         <ul className="nav nav-treeview">
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Level 2</p>
             </a>
           </li>
           <li className="nav-item has-treeview">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>
                 Level 2
                 <i className="right fas fa-angle-left"></i>
               </p>
             </a>
             <ul className="nav nav-treeview">
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon"></i>
                   <p>Level 3</p>
                 </a>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon"></i>
                   <p>Level 3</p>
                 </a>
               </li>
               <li className="nav-item">
                 <a href="#" className="nav-link">
                   <i className="far fa-dot-circle nav-icon"></i>
                   <p>Level 3</p>
                 </a>
               </li>
             </ul>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link">
               <i className="far fa-circle nav-icon"></i>
               <p>Level 2</p>
             </a>
           </li>
         </ul>
       </li>
      
 
     </ul>
   </nav>
   {/*-- /.sidebar-menu */}
 </div>
 {/*-- /.sidebar */}
</aside>
 </div>
 </div>
    )
}