import React , {useContext} from 'react'
import  home from '../pic/home.svg'
import  collection from '../pic/collection.svg'
import  search from '../pic/search.svg'
import '../SideNav.css'
import previous from '../pic/previous.svg'
import logo from '../pic/logo.svg'
import  MusicContext  from "../context/MusicContext";

export const SideNav = () => {
    const context = useContext(MusicContext);
    const { show ,setShow } = context;
    // const [show, setShow] = useState(false);
    let handleShow = ()=>{
        setShow(!show)
        console.log(show)

    } 

    return (
        <>
                <nav className={`bg-black h-screen ${!show ? "w-60" : "w-28"} text-white sticky top-0 border-r border-gray-700`} style={{transition : ".5s ease all"}}>
                <div className="logo flex justify-center border-b border-black bg-gray-400">
                        <img src={logo} alt="" className={`${show ? "w-20" : "w-36"}`} style={{height: '73px',padding: '7px'}}/>
                        <img src={previous} alt="" className={`transform ${show ?"rotate-180" : ""}`} style={{transition : ".5s ease all"}} role="button" onClick={handleShow}/>
                    </div>
                    <div className="All__side_panels">
                        <div className={`home flex ${show ? "justify-center": ""} items-center h-16 border-b border-gray-400`} role="button">
                            <img src={home} alt="" className={`${!show ? "ml-7": ""}`} />
                           {!show? <span className="ml-9 text-xl">Home</span> : ""}
                        </div>
                        <div className={`Collection flex ${show ? "justify-center": ""}  items-center h-16 border-b border-gray-400`} role="button">
                            <img src={collection} alt="" className={`${!show ? "ml-7": ""}`} />
                            {!show ? <span className="ml-4 text-xl">Your Collections</span>:""}
                        </div>
                        <div className={`search flex ${show ? "justify-center": ""}  items-center h-16 border-b border-gray-400`} role="button">
                            <img src={search} alt="" className={`${!show ? "ml-7": ""}`} />
                            {!show ?<span className="ml-9 text-xl">Search</span>:""}
                        </div>
                    </div>
                </nav>
        </>
    )
}
