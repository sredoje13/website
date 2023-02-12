import Projects from "./components/Projects/Projects";
import Firstpageimage from "./components/FirstPage/firstpagepic";
import Delay from "./components/Delay/Delay";
import Aboutus from "./components/Aboutus/Aboutus";
import C0switch from "./components/shitchdelay/c0switch";
import C1switch from "./components/shitchdelay/c1svitch";
import C2switch from "./components/shitchdelay/c2switch";
import C3switch from "./components/shitchdelay/c3switch";
import { Route, Switch} from 'react-router-dom'
const Switchcomp=(props)=>{
    return (
        <div style={props.style}>
        <Switch>
            <Route path="/" exact>
            <>
        <Firstpageimage/>
        <Delay/>
        <Aboutus/>
       < Projects/></></Route>
       <Route path="/c0">
       <C0switch/>
       </Route>
       <Route path="/c1">
       <C1switch/>
       </Route>
       <Route path="/c2">
       <C2switch/>
       </Route>
       <Route path="/c3">
       <C3switch/>
       </Route>
       </Switch>
        </div>
    )
}
export default Switchcomp