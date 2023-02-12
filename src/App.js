import './App.css';
import Layout from './components/Navbar/Layout';
import Switchcomp from './swichcomponents';
import Contact from './components/contact/COntact';
import Stayfooter from './components/footer/stayfooter.js/stayfooter';
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { switchi } from './components/store/reduxstore';
import Adress from './components/contact/adress';
function App() {


  const islocation=useSelector((state)=>state.addmaplocation.addloc)
  const dispatch=useDispatch()
  const [path, setPath] =useState(window.location.pathname);

  const listenToPopstate = () => {
    const winPath = window.location.pathname;
    setPath(winPath);
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  console.log(path);
  if(path!=="/"){
    console.log("extraa")
dispatch(switchi.unswitch())
  }
  else{
    console.log("neee")
    dispatch(switchi.switching())
  }
  return (<>
    <div  className="App" style={islocation?{WebkitFilter:"blur(9px)"}:{}} >
   
      <Layout/>
      <Switchcomp style={islocation?{display:"none"}:{}}/>
 <Contact/>
 <Stayfooter/>

<div>
  
</div>

    </div>
    <div style={{ height:"auto", width:"100%", marginTop:"-250px"}} className="adressdiv">
{islocation&&<Adress/>}
    </div>
    </>
  );
}

export default App;
