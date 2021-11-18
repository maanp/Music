import React, {useState , useEffect ,useContext } from 'react'
import next_btn from '../pic/next_music.svg';
import previous_btn from '../pic/previous_music.svg';
import play from '../pic/play.svg';
import forward10 from '../pic/forward10.svg';
import replay10 from '../pic/replay10.svg';
import UpArrow from '../pic/UpArrow.svg';
import '../bottmbar.css';
import  MusicContext  from "../context/MusicContext";

export const Bottombar = () => {
    let [count, setCount] = useState(0);
    const context = useContext(MusicContext);
    const { playingsong , setPlayingsong , allSongs , hindisongs } = context;
    const [current, setCurrent] = useState(0)
    const [pop, setPop] = useState("");
    useEffect(() => {
        setPop(false);
        console.log(playingsong)
        // eslint-disable-next-line
    }, [])
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
    const [au, setAu] = useState("")
    let playmusic = async () => {
        console.log("playing" , playingsong.url)
         let a = new Audio(playingsong.url);
         a.addEventListener('timeupdate',()=>{
             setCurrent(a.currentTime)
         })
        setAu(a);
        console.log( "the audio :", await au.duration)
        console.log( "the type is :" ,typeof( au.duration + ""))
        if (a.paused) {
            a.play();
        }
        else {
            console.log("pasusing")
            a.pause();
        }
    }
    let playNextMusic = ()=>{
        setCount(count +1);
        // console.log(count);
        setPlayingsong(hindisongs.songs[count+1])
    }
    let playPreviousMusic = ()=>{
        console.log("decreasing")
        setCount(count - 1);
        // console.log(count);
        setPlayingsong(hindisongs.songs[count-1])
    }
    return (
        <div className="bottom">
            <div className={`Bottom_music_bar ${pop ? 'hidden' : 'fixed'} bottom-0 left-0 text-white bg-black h-28 w-screen flex z-10`}>
                <div className="Music__img flex items-center">
                    <div className="w-32 rounded flex justify-center">
                        <img className="h-24 rounded-2xl" src={playingsong.image} alt="" /></div></div>
                <div className="Music__Name  flex flex-col w-44 ml-12">
                    <div className={`Music__name__title mt-6 text-3xl  ${playingsong.name.length >= 9 ? 'marquee' : ""}`}>
                        {/* {playingsong.name.length >8 ? `<span>${playingsong.name}</span>` :playingsong.name} */}
                        <span>{playingsong.name}</span>
                    </div>
                    <div className="Music__singer text-indigo-500 mt-2">
                        {playingsong.artist}
                    </div>
                </div>
                <div className="Music__controls  w-7/12 flex flex-col">
                    <div className="Music__btns flex justify-between px-32 mt-2">
                        <img src={previous_btn} alt="" onClick={playPreviousMusic} role="button"/>
                        <img src={replay10} alt="" />
                        <img src={play} alt="" onClick={playmusic} role="button"/>
                        <img src={forward10} alt="" />
                        <img src={next_btn} alt="" onClick={playNextMusic} role="button"/>
                    </div>
                    <div className="Music__bar flex justify-between px-10 mt-2">
                        <span className="time">{((current/60)+"").slice(0,3)}</span>
                        {/* <input type="range" min="0" max="100" value="50" className="accent w-4/5 border-indigo-500 w-40 border" /> */}
                        {/* <span className="border-indigo-500 w-40 border"></span> */}
                        <meter value="10" max="100" min="0" className="accent w-4/5 border-indigo-500 w-40 border"></meter>
                        <span className="time">{au.duration ?((au.duration/60)+"").slice(0,4) : "10"}</span>
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
                        <img className="h-44 w-44 rounded-2xl" src={playingsong.image} alt="" />
                    </div>
                </div>
                <div className="Music__Name  flex flex-col items-center w-44 ml-12">
                    <div className="Music__name__title mt-6 text-3xl text-white">
                        {playingsong.name}
                    </div>
                    <div className="Music__singer text-indigo-500 mt-2">
                        {playingsong.artist}
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
