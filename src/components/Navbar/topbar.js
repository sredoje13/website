import {MdOutlineMail} from 'react-icons/md'
import {SiInstagram} from 'react-icons/si'
import {SiFacebook} from 'react-icons/si'
import classes from './Navbar.module.css'
const Topbar=()=>{
return (
    <div className={classes.ontopnav}>
        <a href="*" className={classes.aspan}> kanc@jovanovicgradnja.com</a>
      
        
        <a href="*" className={classes.igfb}><SiInstagram/></a>
        <a href="*" className={classes.igfb}><SiFacebook/></a>
    </div>
)
}
export default Topbar