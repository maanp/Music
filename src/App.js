import './App.css';
import { Bottombar } from './Compo/Bottombar';
import { Main } from './Compo/Main';
import Navbar from './Compo/Navbar';

/*
    Using Grid
    logo+sideBar   navbar
    sideBar        mainSection
            bottomBar
             meshv
*/

function App() {
  return (
    <>

      <Navbar />
      <Main />
      <Bottombar />
          {/*  <Sec /> */}
    </>
  );
}

export default App;
