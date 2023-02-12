import background from "./finally.jpg"
import classes from "./shitch.module.css"
import Aos from "aos"
import 'aos/dist/aos.css'
import {IoHome} from 'react-icons/io5'

const Base=(props)=>{
    Aos.init()
    Aos.refresh()
    return(<div style={{backgroundImage:  `url(${background})` ,
    height:'100%',
    width:"100%",
    marginTop:'7%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   

    }}><h1 className={classes.h1}>{props.h1}</h1>
    <h2 className={classes.h2}>
     <IoHome/> OSTVARITE SVOJE ZELJE! UZ NASU POMOC!
    </h2>
    <div className={classes.div1}>
   Projektovanju prostora pristupamo i srcem i razumom. Svesni smo da prostor u kome stanujete i radite mora da bude odraz vaše ličnosti, ali i da zadovolji sve standarde u pogledu komfora i eknomičnosti.
     
    </div>
    <div className={classes.imgdiv}>
        <div className={classes.imgp}>
        <img style={{marginRight:"30px"}}
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-duration="1000"  className={classes.img}src={props.slika} alt="slika"/>
        <p className={classes.p}>{props.img1description}</p></div>
      <div className={classes.imgp}  style={{marginBottom:"30px"}} >
         <p className={classes.p}>{props.img2description}</p> 
         <img style={{marginLeft:"30px"}}
          data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" 
          className={classes.img}
          src={props.slika1} alt="slika1"/>
     
      </div> 
    </div>
    </div>)
}

export default Base