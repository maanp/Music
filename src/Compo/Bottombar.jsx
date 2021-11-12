import React from 'react'
import next_btn from '../pic/next_music.svg';
import previous_btn from '../pic/previous_music.svg';
import play from '../pic/play.svg';
import forward10 from '../pic/forward10.svg';
import replay10 from '../pic/replay10.svg';
import UpArrow from '../pic/UpArrow.svg';
export const Bottombar = () => {
    return (
        <div>
            <div className="Bottom_music_bar fixed bottom-0 text-white bg-black h-28 w-screen flex">
                <div className="Music__img flex items-center">
                    <div className="w-32 rounded flex justify-center">
                    <img className="h-24 rounded-2xl" src="data:image/jpeg;base64,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" alt="" /></div></div>
                <div className="Music__Name  flex flex-col w-44 ml-12">
                    <div className="Music__name__title mt-6 text-3xl">
                        On My Way
                    </div>
                    <div className="Music__singer text-indigo-500 mt-2">
                        Alan Walker
                    </div>
                </div>
                <div className="Music__controls  w-7/12 flex flex-col">
                    <div className="Music__btns flex justify-between px-32 mt-2">
                        <img src={previous_btn} alt="" />
                        <img src={replay10} alt="" />
                        <img src={play} alt="" />
                        <img src={forward10} alt="" />
                        <img src={next_btn} alt="" />
                    </div>
                    <div className="Music__bar flex justify-between px-10 mt-2">
                        <span className="time">5:00</span>
                        <input type="range" min="0" max="100" value="50" className="w-4/5 border-indigo-500 w-40 border"/>
                        {/* <span className="border-indigo-500 w-40 border"></span> */}
                        <span className="time">10:00</span>
                    </div>
                </div>
                <div className="Music__up  ml-36 float-right">
                    <div className="Up__icon float-right items-center justify-center mt-3">
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
