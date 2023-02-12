import Image1 from './builder (1).png'
import Image2 from './builder.png'
import Image3 from './architecture.png'
import Image4 from './construction.png'
import Delaylist from './Delaylist'
import classes from './Delay.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useRef,useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
const Delay=(props)=>{
    const refdiv=useRef(null)
    const scrollitem=useSelector((state)=>state.scrollTo.scrolling)
   

    Aos.init();
    Aos.refresh()
    const images=[{name:Image1,
    id:"i0",
    description:"Enterijer",
    to:"c0"
    },
    {name:Image2,
        id:"i1",
        description:"Zavrsni radovi",
        to:"c1"
        },
    {name:Image3,
        id:"i2",
        description:"Izgradnja",
        to:"c2"
        },
    {name:Image4,
        id:"i3",
        description:"Eksterijer",
        to:"c3"
         },]
     
    const imglist=images.map((item)=>(
        <Delaylist
        className={classes.img} src={item.name} key={item.id}
        description={item.description} id={item.id}
        to={item.to}
        />
    ))
    const executeScroll =useCallback( () =>{
    if(scrollitem.scrollto==="i0"){
        refdiv.current.scrollIntoView({ behavior: 'smooth', block: 'start'}) 
       
      }},[scrollitem])
   useEffect(()=>{
    executeScroll()
   },[executeScroll])
     
  
    return(
        <div  ref={refdiv}  data-aos="zoom-out"
        data-aos-delay="300" className={classes.delay}>
   {imglist}
        </div>

    )
}
export default Delay