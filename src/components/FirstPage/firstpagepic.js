import Image2 from '../../slika2.jpg'
import Image1 from '../slika3.jpg'
import Image3 from '../slika4.jpg'
import Image4 from '../../slika1.jpg'
import Image5 from '../steel-bar-site-construction.jpg'
import classes from './firstpage.module.css'
import { motion } from 'framer-motion'
import { useCallback, useEffect,useRef,useState } from 'react'
import { addindex } from '../store/reduxstore'
import { getclass } from '../store/reduxstore'
import { useDispatch,useSelector } from 'react-redux'

const Firstpageimage=()=>{
  const movepic=useSelector(state=>state.movenav.moving)
  const duration=5;
 
  const selectheight=useSelector((state)=>state.chamgeclassonscroll.getnavheight)
  const [scrollPosition, setScrollPosition] = useState(0);
  const refdiv=useRef(null)
  const[currentelscroll,setcurrsclroll]=useState(0)
  const dispatch=useDispatch()
  const handleScroll =useCallback (() => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setcurrsclroll(refdiv.current.scrollHeight)
      const refvalue=scrollPosition+selectheight-currentelscroll
     
      if(refvalue>0){
     
        dispatch(getclass.changeclass())
      }
      else {dispatch(getclass.nochangeclass())}
  },[currentelscroll, scrollPosition, selectheight,dispatch])
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };}, [handleScroll]);
  


     useEffect(() => {
        const interval = setInterval(() => {
         dispatch(addindex.indexplus())
        }, [duration*1000]);
        return () =>{ clearInterval(interval)    
        };
      }, [dispatch]); 


    const imgindeex=useSelector((state=>state.imgindex.index))
  
    const images=[Image1,Image2, Image3, Image4,Image5]


    return(

        <div ref={refdiv} className={classes.imgdiv}  style={movepic?{marginTop:"100px", transition:"margin 500ms"}:{
          marginTop:"0px", transition:"margin 300ms"
        }}>
            <div className={classes.logo}>Jovanovic gradnja</div>
<motion.img 
 initial={{ opacity: 1 }}
 animate={{ opacity: 0 }}
 transition={{
   duration:duration,
   repeat: Infinity 
   
 }}
className={classes.img} src={images[imgindeex]} alt="slikaa"/>
        </div>
    )
}
export default Firstpageimage