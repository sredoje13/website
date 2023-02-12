import Navbar from "./Navbar";
import classes from './Navbar.module.css'
import Topbar from "./topbar";

import { useSelector } from "react-redux";

const Layout=()=>{
   
    const selectstore=useSelector((state)=>state.chamgeclassonscroll.setclassname)
    
   
  
    return(
<div className={classes.layout} style={selectstore?{display:"none"}:{position:"fixed" }}>
    <Topbar/>
    <Navbar />
    </div>

    )
}
export default Layout