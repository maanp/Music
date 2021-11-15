import React from 'react'
import  home from '../pic/home.svg'
import  collection from '../pic/collection.svg'
import  search from '../pic/search.svg'
export const SideNav = () => {
    return (
        <div>
            <header>
                <nav className="bg-black h-screen w-60 text-white" >
                    
                    <div className="All__side_panels">
                        <div className="home flex  items-center h-16 border-b border-gray-400" role="button">
                            <img src={home} alt="" className="ml-7" />
                            <span className="ml-9 text-xl">Home</span>
                        </div>
                        <div className="Collection flex  items-center h-16 border-b border-gray-400" role="button">
                            <img src={collection} alt="" className="ml-7" />
                            <span className="ml-4 text-xl">Your Collections</span>
                        </div>
                        <div className="search flex  items-center h-16 border-b border-gray-400" role="button">
                            <img src={search} alt="" className="ml-7" />
                            <span className="ml-9 text-xl">Search</span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
