import React from 'react'
import { Bottombar } from './Bottombar'
import Navbar from './Navbar'
import { SideNav } from './SideNav'
import { Allsongs } from './Allsongs'

// import { MusicState } from './context/MusicState';
import '../css/layout.css';
import { MusicState } from '../context/MusicState'
export const Layout = () => {
    return (
        <div className="layout grid">
            <MusicState > 
            <SideNav />
            <div className="flex flex-col bg-dark">
            <Navbar />
            <Allsongs />
            </div>
            <Bottombar /> 
            </MusicState>   
        </div>
    )
}
