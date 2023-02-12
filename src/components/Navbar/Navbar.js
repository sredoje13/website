import NAvbarlist from "./NAvbarlist"
import classes from './Navbar.module.css'
import { useEffect,useRef,useState,useCallback } from "react"
import { useDispatch } from "react-redux"
import { getclass } from "../store/reduxstore"
import {FiMenu} from 'react-icons/fi'
import { movenavig } from "../store/reduxstore"
import { useSelector } from "react-redux"
import {IoArrowBackCircle} from 'react-icons/io5'
let size=false
function getWindowDimensions() {

    const { innerWidth: width, innerHeight: height } = window;
    if(width<400){
        size=true
        console.log(size)
    }
    else size=false
    return {
      width,
      height
    };
  }

const Navbar=()=>{

    const[show,setshow]=useState(false)
    const [getwidth,setgetwidth]=useState(null);
    const ref=useRef(null)
   
    const dispatch=useDispatch()
    const selectnav=useSelector((state)=>state.swichpage.switch)
  console.log(selectnav)

    const[currentref,setcurrentref]=useState(0)
    useEffect(()=>{
       
        setcurrentref(ref.current.clientHeight)   
        dispatch(getclass.getheight(currentref))
        
        function handleResize() {
            setshow(false)
            setgetwidth(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);

    },[currentref, dispatch])

    const showitems=()=>{
      dispatch(movenavig.move())
  setshow((prevval)=>!prevval)
    }
  const classnavbar=size?classes.sizenavbar:classes.navbar
    const araay=!selectnav?[{name:"Delatnosti", id:"a1",scrollto:"i0"},
    {name:"O nama", id:"a2",scrollto:"onama"},
    {name:"Projekti", id:"a3",scrollto:"Projects"},
    {name:"Kontakt", id:"a4",scrollto:"Contact"}]:[ {name:"Kontakt", id:"a4",scrollto:"Contact"}]
    const listofitems=araay.map((item)=>
(<NAvbarlist item={item.name}
   key={item.id} className={classes.navbaritems}
    scrollto={item.scrollto}/>)
    )
    const validation=size&&show
  const validation2=size&&!show
  console.log(window.location.hostname)
  console.log(window.location.origin)
return(

    <div ref={ref} className={classnavbar} 
    style={validation?{paddingBottom:"120px", transition:"padding 500ms "}:
    validation2?{paddingBottom:"0px", transition:"padding 300ms "}:{}}>
        {size&&<p style={{marginTop:"0px"}}><FiMenu  onClick={showitems}/></p>}
        {selectnav&&<a className={classes.ahref} href={`${window.location.origin}`}>
          <IoArrowBackCircle/></a>}
{listofitems}
    </div>
)
}
export default Navbar