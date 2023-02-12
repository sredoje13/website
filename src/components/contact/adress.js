
import classes from './Contact.module.css'
import { useDispatch } from 'react-redux'
import {AiFillCloseCircle} from 'react-icons/ai'
import { location } from '../store/reduxstore'
const Adress=()=>{
    const dispatch=useDispatch()
    const closeloc=()=>{
      dispatch(location.unlocation())
        
        }


    return (<div >
        <p onClick={closeloc}><AiFillCloseCircle/></p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.434336925269!2d20.644584614825646!3d44.87380928066449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7eec37399d85%3A0xf536dc5ec09c5553!2sZmaj%20Jove%20Jovanovi%C4%87a%2C%20Pan%C4%8Devo!5e0!3m2!1sbs!2srs!4v1674494087803!5m2!1sbs!2srs"
title="addloc"
className={classes.map}
 
    loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"></iframe>"


    </div>)
}
export default Adress