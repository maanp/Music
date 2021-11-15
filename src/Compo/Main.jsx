import React from 'react'
import { Allsongs } from './Allsongs'
// import { Bottombar } from './Bottombar'
import { SideNav } from './SideNav'

export const Main = () => {
    return (
        <div className="Main__sec  flex bg-gray-800 text-white">
            <SideNav />
            <Allsongs />
            {/* <Bottombar /> */}
        </div>
    )
}
