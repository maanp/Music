import React , {useContext} from 'react'
import play from '../pic/play.svg';
import pause from '../pic/pause.svg';

import MusicContext from "../context/MusicContext";

export const Songitem = (props) => {
    let {songs , handlePlaythisMusic } =  props;
    const context = useContext(MusicContext);
    const { setPlayingsong , setHasplay , hasplay } = context;

    let getSongsDetails = ()=>{
        setPlayingsong(songs)
        setHasplay(true)
        handlePlaythisMusic(songs)
    }
    return (
        <div>
            <div className="song  p-1 " >
                <div className="poster m-2 mb-0 bg-gray-100"><img className="rounded-xl song" src={songs.image} alt="" />
                    <div className="playbtn rounded-full bg-indigo-700" role="button" onClick={getSongsDetails}>
                        <img src={!hasplay ? play : pause} alt="" />
                    </div>
                </div>
                <div className="songname text-center mx-2 bg-gray-400 rounded text-base text-indigo-700 font-bold px-1">{songs.name}</div>
            </div>
        </div>
    )
}
