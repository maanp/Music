import React, {useState} from 'react'
import next_btn from '../pic/next_music.svg';
import previous_btn from '../pic/previous_music.svg';
import play from '../pic/play.svg';
import forward10 from '../pic/forward10.svg';
import replay10 from '../pic/replay10.svg';
import UpArrow from '../pic/UpArrow.svg';
import '../bottmbar.css';

export const Bottombar = () => {

    const [pop, setPop] = useState(false)
    let handlepop = ()=>{
        if(pop){
            setPop(false)
            document.body.style.overflowY = "auto"
        }
        else{
            setPop(true)
            document.body.style.overflowY = "clip"
        }
    }

    let playmusic = () => {
        let a = new Audio('https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3');
        if (a.paused) {
            a.play();
        }
        else {
            a.pause();
        }
    }

    return (
        <div className="bottom">
            <div className={`"Bottom_music_bar ${pop ? 'hidden' : 'fixed'} bottom-0 text-white bg-black h-28 w-screen flex z-10"`}>
                <div className="Music__img flex items-center">
                    <div className="w-32 rounded flex justify-center">
                        <img className="h-24 rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeFK-MdK9iHYuDxh8O5KOj-1C3x49BUaftQ&usqp=CAU" alt="" /></div></div>
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
                        <img src={play} alt="" onClick={playmusic} />
                        <img src={forward10} alt="" />
                        <img src={next_btn} alt="" />
                    </div>
                    <div className="Music__bar flex justify-between px-10 mt-2">
                        <span className="time">5:00</span>
                        <input type="range" min="0" max="100" value="50" className="accent w-4/5 border-indigo-500 w-40 border" />
                        {/* <span className="border-indigo-500 w-40 border"></span> */}
                        <span className="time">10:00</span>
                    </div>
                </div>
                <div className="Music__up  ml-36 float-right">
                    <div className="Up__icon float-right items-center justify-center mt-3" role="button" onClick={handlepop}>
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
            </div>



            <div className={`Popup__music ${pop ? 'Popup_active bg-black' :"" } py-5`}>
                <div className="Music__img flex items-center">
                    <div className="w-44 rounded flex justify-center">
                        <img className="h-44 w-44 rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeFK-MdK9iHYuDxh8O5KOj-1C3x49BUaftQ&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="Music__Name  flex flex-col items-center w-44 ml-12">
                    <div className="Music__name__title mt-6 text-3xl text-white">
                        On My Way
                    </div>
                    <div className="Music__singer text-indigo-500 mt-2">
                        Alan Walker
                    </div>
                </div>
                <div className="Music__controls  w-10/12 flex flex-col my-2 py-3">
                    <div className="Music__btns flex justify-between px-32 mt-2">
                        <img src={previous_btn} alt="" />
                        <img src={replay10} alt="" />
                        <img src={play} alt="" onClick={playmusic} />
                        <img src={forward10} alt="" />
                        <img src={next_btn} alt="" />
                    </div>
                    <div className="Music__bar flex justify-between px-10 mt-5">
                        <span className="time text-white">5:00</span>
                        <input type="range" min="0" max="100" value="50" className="accent w-4/5 border-indigo-500 w-40 border" />
                        {/* <span className="border-indigo-500 w-40 border"></span>  */}
                        <span className="time text-white">10:00</span>
                    </div>
                </div>
                <div className="Music__up  float-right">
                    <div className="Down__icon float-right items-center justify-center mt-3" role="button" onClick={handlepop}>
                        <img src={UpArrow} alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}
