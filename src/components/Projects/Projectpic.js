import { useDispatch,useSelector } from 'react-redux'
import { zoomimage } from '../store/reduxstore'

const Projectlist=(props)=>{
    const {id,src}=props
    const dispatch=useDispatch()
    const zoomimages=(x)=>{

        dispatch(zoomimage.zoom({id,src}))
         
         }
    return(
      
<div>
    <img style={props.style} onClick={zoomimages} src={props.src} alt="" className={props.className}/>
</div>

    )
}
export default Projectlist