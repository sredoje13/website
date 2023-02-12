
import classes from './footer.module.css'
const Footer=()=>{
    return(
        <div className={classes.footer}>
            <div className={classes.saradnja}>
     <h3><b> SPREMNI SMO ZA SARADNJU </b></h3>
     <p>
        Ukoliko zelite da nas kontaktirate i ostvarite svoju zamisao obratite nam se.
     </p></div>
     <div className={classes.contactdiv}><b>KONTAKTIRAJTE NAS</b></div>
        </div>
    )
}
export default Footer