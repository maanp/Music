import React , {useContext , useEffect} from 'react'
import '../AllSongs.css';
import  MusicContext  from "../context/MusicContext";
import { Songitem } from './Songitem';
// import play from '../pic/play.svg';

export const Allsongs = () => {
    const context = useContext(MusicContext);
    const { allSongs,  setPlayingsong ,hindisongs  , show } = context;
    // let s = [1, 0, 12, 3,4,55,6,5,10,111];
    let song ;
    song = allSongs.track;
    let hsong ;
    hsong = hindisongs.songs;
    useEffect(() => {
            console.log(allSongs)
        // eslint-disable-next-line
    }, [])
    const handlePlaythisMusic = (currentSong)=>{
        console.log(currentSong.url)
        setPlayingsong(currentSong)
    }

    // let songs = document.querySelector("#so");
    // let mouseDown = false;
    // let startX, scrollLeft;

    // let startDragging = function (e) {
    // mouseDown = true;
    // startX = e.pageX - songs.offsetLeft;
    // scrollLeft = songs.scrollLeft;
    // };
    // let stopDragging = function (event) {
    // mouseDown = false;
    // };

    // songs.addEventListener('mousemove', (e) => {
    // e.preventDefault();
    // if(!mouseDown) { return; }
    // const x = e.pageX - songs.offsetLeft;
    // const scroll = x - startX;
    // songs.scrollLeft = scrollLeft - scroll;
    // });
    // songs.addEventListener('mousedown', startDragging, false);
    // songs.addEventListener('mouseup', stopDragging, false);
    // songs.addEventListener('mouseleave', stopDragging, false); 

    return (
        <>
            <div className="AllSongs bg-black mb-28" style={{maxWidth : `${show ? "1222px" : "1090px"}`}}>
                <div className="SongsPoster  rounded my-1">
                    <div className="heading my-2 mx-10 text-4xl text-indigo-500">Top Treading</div>
                    <div className="songs flex ">
                        {
                            song.map((e) => {
                                return (
                                    <Songitem  key={e.artist} songs={e}  handlePlaythisMusic={handlePlaythisMusic}  />
                                );
                            })
                        }
                    </div> <hr />
                </div>
                <div className="Songs  rounded my-1">
                    <div className="heading my-2 mx-10 text-4xl text-indigo-500">Top Hindi 2021</div>
                    <div className="songs flex" id="so">
                        {
                            hsong.map((e) => {
                                return (
                                    <Songitem key={e.id} songs={e}  handlePlaythisMusic={handlePlaythisMusic} />

                                    // <div className="hSong  p-1 " key={e}>
                                    //     <div className="poster m-2 mb-0 bg-gray-100"><img className="hsong rounded-xl" src={e.image} alt="" />
                                    //         <div className="playbtn rounded-full bg-indigo-700">
                                    //             <img src={play} alt=""  />
                                    //         </div>
                                    //     </div>
                                    //     <div className="songname text-center mx-2 bg-gray-400 rounded text-base text-indigo-700 font-bold px-1">{e.name}</div>
                                    // </div>
                                );
                            })
                        }
                    </div> <hr />
                </div>
            </div>
        </>
    )
}
