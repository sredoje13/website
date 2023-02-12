import { useCallback,useEffect,useRef } from "react"
import { useSelector } from "react-redux"
import classes from './Contact.module.css'
import {BsPhoneVibrate} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

import{FiMapPin} from 'react-icons/fi'
import Footer from "../footer/standardfooter"

import { location } from "../store/reduxstore"
import { useDispatch}from "react-redux"
const Contact=()=>{
    const islocation=useSelector((state)=>state.addmaplocation.addloc)
    const dispatch=useDispatch()
    const refdiv=useRef(null)
    const scrollitem=useSelector((state)=>state.scrollTo.scrolling)
    const executeScroll =useCallback( () =>{
        if(scrollitem.scrollto==="Contact"){
            refdiv.current.scrollIntoView({ behavior: 'smooth', block: 'start'}) 
           
          }},[scrollitem])
       useEffect(()=>{
        executeScroll()
       },[executeScroll])
       const addlocation=()=>{
        dispatch(location.addlocation())
       }
       return(
        <div className={classes.footerandcontact}>
            <Footer/>
        {!islocation&&<div ref={refdiv} className={classes.kontakt}>
       <div className={classes.divv}>
        <div className={classes.icon}><BsPhoneVibrate/></div>
        <div className={classes.div2}>
        <h5><b>TELEFON </b></h5>
        <p>
        +38165458454</p>
       </div></div>
       <div className={classes.divv}>
        <div className={classes.icon}><GrMail/></div>
        <div className={classes.div2}>
     <h5> <b>E-MAIL </b></h5>
      <p> xxxxxxx@gmail.com</p>
       </div></div>
       <div className={classes.divv}>
        <div className={classes.icon}> <FiMapPin/></div>
        <div className={classes.div2} onClick={addlocation}>
      <h5> <b>ADRESA </b></h5>
       
       <p> Petra Petrovica 85 Pancevo</p></div>
       </div>
        </div>}
       
        </div>
       )
}
export default Contact