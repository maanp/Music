import './App.css';
import { Bottombar } from './Compo/Bottombar';
import { Main } from './Compo/Main';
import Navbar from './Compo/Navbar';
import { SideNav } from './Compo/SideNav';
// import {Sec} from './Compo/Sec';

function App() {
  return (
    <>
      <Navbar />
      <SideNav />
      <Main />
      <Bottombar />
          {/*  <Sec /> */}
    </>
  );
}

export default App;
