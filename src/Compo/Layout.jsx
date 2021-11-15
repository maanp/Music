import React from 'react'
import Navbar from './Navbar'
import { SideNav } from './SideNav'

export const Layout = () => {
    return (
        <div className="layout grid">
            <SideNav />
            <Navbar />
                            
        </div>
    )
}
