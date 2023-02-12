import { useDispatch } from "react-redux"
import { scrolltoel } from "../store/reduxstore"
const NAvbarlist=(props)=>{
    const {scrollto}=props
    const dispatch=useDispatch()
    const scrolling=()=>{
        dispatch(scrolltoel.scrolling({scrollto}))
        
    }
return(
    
    <div className={props.className} onClick={scrolling}>
       {props.item} 
    </div>
)
}
export default NAvbarlist