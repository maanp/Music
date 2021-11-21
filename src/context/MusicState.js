import React , {useState } from 'react'
import MusicContext from "./MusicContext";

export const MusicState = (props) => {
   

    let allSongs = {
        "track": [
            {
                "artist": "Alan walker",
                "listeners": "3030889",
                "name": "On My Way",
                "scrobbles": "554964947",
                "weight": 41690,
                "artist_url": "https://www.last.fm/music/Taylor+Swift",
                "url": "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeFK-MdK9iHYuDxh8O5KOj-1C3x49BUaftQ&usqp=CAU"
            },
            {
                "artist": "Taylor Swift",
                "listeners": "3030889",
                "name": "All Too Well (10 Minute Version) (Taylor's Version) (From The Vault)",
                "scrobbles": "554964947",
                "weight": 41690,
                "artist_url": "https://www.last.fm/music/Taylor+Swift",
                "url": "https://www.last.fm/music/Taylor+Swift/_/All+Too+Well+(10+Minute+Version)+(Taylor%27s+Version)+(From+The+Vault)",
                "image": "https://lastfm.freetls.fastly.net/i/u/174s/e85cd97c43f7bd03c70a66c2fe538a6c.png"
            },
            {
                "artist": "Coldplay",
                "listeners": "6090266",
                "name": "My Universe",
                "scrobbles": "428606717",
                "weight": 25125,
                "artist_url": "https://www.last.fm/music/Coldplay",
                "url": "https://www.last.fm/music/Coldplay/_/My+Universe",
                "image": "https://lastfm.freetls.fastly.net/i/u/174s/437f6985558a59550cbf739c0d800e76.png"
            },
            {
                "artist": "JIN",
                "listeners": "134621",
                "name": "Yours",
                "scrobbles": "3493776",
                "weight": 23922,
                "artist_url": "https://www.last.fm/music/JIN",
                "url": "https://www.last.fm/music/JIN/_/Yours",
                "image": "https://lastfm.freetls.fastly.net/i/u/174s/e38d0cc000a46f9e3fc0c5d387f516e6.png"
            },
            {
                "artist": "Kanye West",
                "listeners": "5199239",
                "name": "Life Of The Party (with André 3000)",
                "scrobbles": "469921327",
                "weight": 19326,
                "artist_url": "https://www.last.fm/music/Kanye+West",
                "url": "https://www.last.fm/music/Kanye+West/_/Life+Of+The+Party+(with+Andr%C3%A9+3000)",
                "image": "https://lastfm.freetls.fastly.net/i/u/174s/e8276aafbc0aad9863ef0d8e6af12606.png"
            },
            {
                "artist": "Bruno Mars",
                "listeners": "2574541",
                "name": "Leave The Door Open",
                "scrobbles": "82034257",
                "weight": 14475,
                "artist_url": "https://www.last.fm/music/Bruno+Mars",
                "url": "https://www.last.fm/music/Bruno+Mars/_/Leave+The+Door+Open",
                "image": "https://lastfm.freetls.fastly.net/i/u/174s/fd4428b2b43d778ddebaec3ee0bc43b8.png"
            }
        ]
    };

    let hindisongs = {
       "songs": [
            {
                id:1,
                name:"Kusu Kusu",
                url:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kusu-kusu-satyameva-jayate-2-128-kbps-sound.mp3",
                artist:' Japanese singers ',
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWr2ywHrUTywSjULcIBsDbLzfyV7tsMRdetA&usqp=CAU'
            },
            {
                id:2,
                name:"Tip Tip",
                url:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tip-tip-sooryavanshi-128-kbps-sound.mp3",
                artist:'Udit Narayan, Alka Yagnik',
                image:'https://pagalnew.com/coverimages/tip-tip-sooryavanshi-500-500.jpg'
            },
            {
                id:3 ,
                name:"Tattoo Waaliye",
                url:"https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tattoo-waaliye-bunty-aur-babli-2-128-kbps-sound.mp3",
                artist:'Neha Kakkar, Pardeep Sran',
                image:'https://pagalnew.com/coverimages/tattoo-waaliye-bunty-aur-babli-2-500-500.jpg'
            },
            {
                id:4,
                name:"High Rated Gabru",
                url:"https://pagalnew.com/mp3-songs/punjabi-mp3-songs/high-rated-gabru-guru-randhawa-128-kbps-sound.mp3",
                artist:'Guru Randhawa',
                image:'https://pagalnew.com/coverimages/High-Rated-Gabru-Guru-Randhawa-500-500.jpg'
            },
            {
                id:5,
                name:"Lahore",
                url:"https://pagalnew.com/mp3-songs/punjabi-mp3-songs/lahore-guru-randhawa-128-kbps-sound.mp3",
                artist:'Guru Randhawa',
                image:'https://pagalnew.com/coverimages/Lahore-Guru-Randhawa-500-500.jpg'
            },
            {
                id:6,
                name:"Baby Girl",
                url:"https://pagalnew.com/mp3-songs/punjabi-mp3-songs/baby-girl-guru-randhawa-128-kbps-sound.mp3",
                artist:'Guru Randhawa',
                image:'https://pagalnew.com/coverimages/Baby-Girl-Guru-Randhawa-500-500.jpg'
            },
            {
                id:7,
                name:"Made In India",
                url:"https://pagalnew.com/mp3-songs/punjabi-mp3-songs/made-in-india-guru-randhawa-128-kbps-sound.mp3",
                artist:'Guru Randhawa',
                image:'https://pagalnew.com/coverimages/Made-In-India-Guru-Randhawa-500-500.jpg'
            },
            
        ]
    }
    const [playingsong, setPlayingsong] = useState(hindisongs.songs[0]);
    const [show, setShow] = useState(false);
    const [hasplay, setHasplay] = useState(false)
    


    return (
        <MusicContext.Provider value={{hasplay ,setHasplay , allSongs,hindisongs , playingsong , setPlayingsong , show , setShow }}>
            {props.children}
        </MusicContext.Provider>
    );
}
