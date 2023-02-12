import classes from './Delay.module.css'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useState } from 'react';
const Delaylist=(props)=>{
const [winndowloc,setwindowloc]=useState("")

  Aos.init();
  Aos.refresh()
    const divvar={
        hover:{
          scale:1.1,
          transition:{
            duration:0.3,
            repeat:2,
            repeatType: "reverse",
          }
        }
    }
 
   const changenav=()=>{
   props.onchangenav()
   

   } 
   
return (<motion.div variants={divvar}
whileHover="hover"
className={props.className}
id={props.id}

>
  <img  src={props.src} alt="slikee"/>
  <a onClick={changenav} href={`${winndowloc}${props.to}`} className={classes.p}>{props.description}</a>
  </motion.div>
)
}
export default Delaylist