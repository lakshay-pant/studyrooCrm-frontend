import React from 'react';
import * as s from "./App.styles";
import SideBar from "./sidebar/SideBar"
import * as Palette from './colors'


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
        <s.App>
            <SideBar backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.brown}/>
            <main>{children}</main>
           
        </s.App>
    )
}
