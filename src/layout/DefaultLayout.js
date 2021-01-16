import React from 'react'
import {SideBar} from "./sidebar/SideBar"

export const DefaultLayout = ({children}) => {
    return (
        <div>
            <SideBar/>
            <main>{children}</main>
           
        </div>
    )
}
