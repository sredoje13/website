import { useDispatch } from "react-redux"
import { choosedivpic } from "../store/reduxstore"
import { useSelector } from "react-redux"
import { zoomimage } from "../store/reduxstore"
const ProjectButtons=(props)=>{
    const diiv=useSelector((state)=>state.projectpic.picdiv)
   
    console.log(diiv)
    const dispatch=useDispatch()
    const choosepicdiv=()=>{
        dispatch(zoomimage.close())
        dispatch( choosedivpic.chosediv({name,id}))
    }
    const {name,id}=props
  
    return(
      <button  onClick={choosepicdiv} className={props.className}>
        {props.name}
       </button> 
      

    )
}
export { ProjectButtons}