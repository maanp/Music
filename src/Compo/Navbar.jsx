import React from 'react'
import logo from '../pic/Male User.svg';
import downarrow from '../pic/downa.svg';
const Navbar = () => {
    return (
        <header>
            <nav className="bg-black w-10/12 float-right h-16 text-white" style={{width: '1126px'}}>
                <div className="flex justify-end items-center h-full">
                    <div className="User__Profile flex float-right w-56 bg-gray-400 rounded-2xl mr-6 h-12 items-center">
                        <div className="User__pic ml-4">
                            <img src={logo} alt="" />
                            {/* user */}
                        </div>
                        <div className="User__Name ml-4 flex">
                            <p className="w-32 h-7 text-2xl text-black"> Meshv Patel   </p>
                            <div className="flex items-center justify-center ">
                                {/* <div className="w-3.5 h-2 bg-pink-900 bg-opacity-50 border-2 rounded-full border-blue-400"/> */}
                            <img src={downarrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
