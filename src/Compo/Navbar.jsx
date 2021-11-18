import React from 'react'
import User from '../pic/Male User.svg';
import downarrow from '../pic/downa.svg';

const Navbar = () => {
    return (
        <>
            <nav className="bg-black sticky top-0 h-16 text-white z-50 border-b border-gray-800" >
                <div className="flex justify-end items-center h-full">
            
                    <div className="User__Profile flex float-right w-56 bg-gray-400 rounded-2xl mr-6 h-12 items-center">
                        <div className="User__pic ml-4">
                            <img src={User} alt="" />
                            {/* user */}
                        </div>
                        <div className="User__Name ml-4 flex">
                            <p className="w-32 h-7 text-2xl text-black"> Meshv Patel </p>
                            <div className="flex items-center justify-center ">
                                {/* <div className="w-3.5 h-2 bg-pink-900 bg-opacity-50 border-2 rounded-full border-blue-400"/> */}
                            <img src={downarrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
