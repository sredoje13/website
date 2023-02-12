import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import classes from '../footer.module.css'
const Stayfooter=()=>{
    return(

        <div className={classes.stayfooter}>
            <div className={classes.emptydiv}>
    
            </div>

            <div className={classes.copyr}>
     <AiOutlineCopyrightCircle className={classes.cicon}/>
    2023 Jovanovic Gradnja Company.
            </div>
        </div>
    )
}
export default Stayfooter