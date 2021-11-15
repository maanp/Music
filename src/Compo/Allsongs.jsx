import React from 'react'
import '../AllSongs.css';
export const Allsongs = () => {

    let song = [1, 0, 12, 3,4,55,6,5,10,111];


    return (
        <div>
            <div className="AllSongs mb-28">
                <div className="SongsPoster  rounded my-1">
                    <div className="heading my-2 mx-10 text-4xl text-indigo-500">Top Treading</div>
                    <div className="songs flex ">
                        {
                            song.map((e) => {
                                return (
                                    <div className="song  p-1 " key={e}>
                                        <div className="poster m-2 mb-0 bg-gray-100"><img className="rounded-xl song" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeFK-MdK9iHYuDxh8O5KOj-1C3x49BUaftQ&usqp=CAU" alt="" /></div>
                                        <div className="songname text-center mx-2 bg-gray-400 rounded text-base text-indigo-700 font-bold px-1">On My Way</div>
                                    </div>
                                );
                            })
                        }
                    </div> <hr />
                </div>
                <div className="Songs  rounded my-1">
                    <div className="heading my-2 mx-10 text-4xl text-indigo-500">Top English 2021</div>
                    <div className="songs flex ">
                        {
                            song.map((e) => {
                                return (
                                    <div className="song  p-1 " key={e}>
                                        <div className="poster m-2 mb-0 bg-gray-100"><img className="rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeFK-MdK9iHYuDxh8O5KOj-1C3x49BUaftQ&usqp=CAU" alt="" /></div>
                                        <div className="songname text-center mx-2 bg-gray-400 rounded text-base text-indigo-700 font-bold px-1">On My Way</div>
                                    </div>
                                );
                            })
                        }
                    </div> <hr />
                </div>
            </div>
        </div>
    )
}
