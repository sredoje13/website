import classes from './Aboutus.module.css'
import Image1 from './pexels-nao-triponez-129205.jpg'
import Aos from 'aos'
import { useEffect,useCallback,useRef } from 'react'
import { useSelector } from 'react-redux'
import 'aos/dist/aos.css'
import Image2 from './working-construction-tool-builder-s-accessories-house-house-renovation-concept.jpg'
const Aboutus=()=>{
    const refdiv=useRef(null)
    const scrollitem=useSelector((state)=>state.scrollTo.scrolling)
   
    Aos.init();
    Aos.refresh()
    const executeScroll =useCallback( () =>{
        if(scrollitem.scrollto==="onama"){
            refdiv.current.scrollIntoView({ behavior: 'smooth', block: 'start'}) 
           
          }},[scrollitem])
       useEffect(()=>{
        executeScroll()
       },[executeScroll])
        
    return(

        <div ref={refdiv} className={classes.aboutus}>
<div className={classes.div1}>
<h2>
<b>JOVANOVIC GRADNJA-GRADJEVINSKA FIRMA</b></h2>
<div  className={classes.textdiv} style={{borderBottom:"1px solid rgb(171, 232, 171)", paddingBottom:"15px"}}>
Opremljeni smo kompletnom opremom za izgradnju, kao i teretnim programom motornih vozila, kamionima, kamionskim dizalicama, rovokopačima i dr.
Zahvaljujući savremenoj mehanizaciji, garanciji za naše radove, renomiranim dobavljačima, te vijernim korisnicima naših usluga, poslujemo uspješno već dugi niz godina. [...]
</div>
<div  className={classes.textdiv} style={{marginTop:"15px"}}>
Mi smo velika firma koja se bavi izgradnjom poslovnih i stambenih objekata-zgrada,
 novogradnjom, gradnjom ključ u ruke, pratećim inžinjeringom i projektima. Možemo prihvatiti poslove srednjeg i velikog opsega. Radimo na području Tuzlanske općine, ali po dogovoru radimo na cijeloj teritoriji Bosne i Hercegovine. Dogovorenih rokova se pridržavamo, kao što vodimo računa o kvaliteti naših usluga. Za više informacija, slobodno nas pozovite [...]
</div>
</div>
<div className={classes.divimg}>
    <img data-aos="fade-up"
    data-aos-duration="500"
     className={classes.img} src={Image1} alt="slikica"/>
    <img 
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="300"
    className={classes.img2} src={Image2} alt="slikica"/>
</div>
        </div>
    )
}
export default Aboutus