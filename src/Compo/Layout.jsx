import React from 'react'
import { Bottombar } from './Bottombar'
import Navbar from './Navbar'
import { SideNav } from './SideNav'
import { Allsongs } from './Allsongs'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

// import { MusicState } from './context/MusicState';
import '../css/layout.css';
import { MusicState } from '../context/MusicState'
import { Collection } from './Collection'
export const Layout = () => {
    return (
        <Router>
        <div className="layout grid">
            <MusicState > 
            <SideNav />
            <div className="flex flex-col bg-dark">
            <Navbar />
            <Switch>
            <Route exact path="/">
            <Allsongs />
            </Route>
            <Route exact path="/collection">
            <Collection />
            </Route>
            </Switch>
            </div>
            <Bottombar /> 
            </MusicState>   
        </div>
        </Router>
    )
}
