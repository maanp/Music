import './App.css';
// import Navbar from './Compo/Navbar';
// import { Bottombar } from './Compo/Bottombar';
// import { Main } from './Compo/Main';
import { Layout } from './Compo/Layout';

/*
    Using Grid
    logo+sideBar   navbar
    sideBar        mainSection
            bottomBar
             layout
*/

function App() {
  return (
    <>
      <Layout />
      {/* <Navbar />
      <Main />
      <Bottombar /> */}
          {/*  <Sec /> */}
    </>
  );
}

export default App;
