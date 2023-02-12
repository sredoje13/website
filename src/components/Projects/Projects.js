
import Projectlist from './Projectpic'
import { MdChevronLeft } from 'react-icons/md'
import { MdChevronRight } from 'react-icons/md'
import classes from './project.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { zoomimage } from '../store/reduxstore'
import { images1 } from './allpic'
import { images2,images3,images4 } from './allpic'
import { ProjectButtons } from './Projectlist'
import { useEffect,useRef,useCallback } from 'react'
const Projects=()=>{
    const btnsstatus=useSelector(state=>state.projectpic)
    
    const refdiv=useRef(null)
    const scrollitem=useSelector((state)=>state.scrollTo.scrolling)
    const executeScroll =useCallback( () =>{
        if(scrollitem.scrollto==="Projects"){
            refdiv.current.scrollIntoView({ behavior: 'smooth', block: 'start'}) 
           
          }},[scrollitem])
       useEffect(()=>{
        executeScroll()
       },[executeScroll])
    
 
const allimagess=
[{src:images1,id:"im1",name:"Enterijer"},
{src:images2,id:"im2", name:"Eksterijer"},
{src:images3,id:"im3",name:"Zavrsni radovi"},
{src:images4,id:"im4",name:"Izgradnja"},
]
const diiv=useSelector((state)=>state.projectpic.picdiv)
const falsediv=useSelector((state)=>state.projectpic.firstdiv)
const selectzoom=useSelector((state)=>state.zoomimg.itemimage)
const zoom=useSelector((state)=>state.zoomimg.setzoom)
const imagee=allimagess.filter((item)=>item.id===diiv.id)


const finallyimage=imagee.map((item)=>(
    item.src
))  

const imgnew=finallyimage[0].map((item,i)=>(
    <Projectlist style={zoom?{filter:"blur(8px)"}:{}} className= {classes.img} src={item} key={i} id={i}/>
))

/* console.log(finallyimage) */
const dispatch=useDispatch()

    const slideLeft=()=>{
        dispatch(zoomimage.close())
 var slider=document.getElementById('slider');
 slider.scrollLeft=slider.scrollLeft-1200
    }
    const slideRight=()=>{
        dispatch(zoomimage.close())
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+1200
    }
 const buttons=allimagess.map((item)=>(
    <ProjectButtons className={classes.btns}  id={item.id}
    key={item.id}
    name={item.name}/>
 ))
   
console.log(buttons)
    const closezum=()=>{
       dispatch( zoomimage.close())
    }
const first=btnsstatus.firstdiv?classes.active:classes.none
const sec=btnsstatus.secdiv?classes.active:classes.none
const third=btnsstatus.thirddiv?classes.active:classes.none
const fourth=btnsstatus.fourdiv?classes.active:classes.none





    return(
    
    <div ref={refdiv} className={classes.project}>
     <div className={classes.btndiv}> 
      <div className={first} >{buttons[0]}</div>
        <div className={sec}>{buttons[1]}</div>
        <div className={third}>{buttons[2]}</div>
        <div className={fourth}>{buttons[3]}</div></div> 
        
        <div  className={classes.box}><MdChevronLeft className={classes.btn} onClick={slideLeft} size={40}/>
            <div id='slider' className={classes.slider}  >
{imgnew}</div>

<MdChevronRight className={classes.btn} onClick={slideRight}  size={40}/>
        </div>
        {zoom&&<div className={classes.zoomdiv}>
    <img onClick={closezum} className={classes.zoomimg} src={selectzoom.src} alt="zoom"/>
    </div>}
        </div>
    )
}
export default Projects