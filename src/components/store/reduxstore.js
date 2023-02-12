import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


const imgindex=createSlice({
    name:"imgindex",
    initialState:{index:0, classimg:false},
    reducers:{
        indexplus(state,action){
            state.index++
            state.classimg=true
            if(state.index===4){
                state.index=0
            }
        }
    }
})
const scrollTo=createSlice({
    name:"scrollTo",
    initialState:{scrolling:{scroll:"" }},
    reducers:{
        scrolling(state,action){
     state.scrolling=action.payload
     
        }
    }

})
const chamgeclassonscroll=createSlice({
    name:"chamgeclassonscroll",
    initialState:{setclassname:false,getnavheight:0},
    reducers:{getheight(state,action){
        state.getnavheight=action.payload
  
    },
        changeclass(state,action){
            state.setclassname=true
          
        },
        nochangeclass(state,action){
            state.setclassname=false
            
        }
    }
})

const zoomimg=createSlice({
    name:"zoomimg",
initialState:{itemimage:{},setzoom:false},
reducers:{
    zoom(state,action){
       state.itemimage=action.payload 
       state.setzoom=true
    },
    close(state,action){
        state.setzoom=false
    }
}

})
const projectpic=createSlice({
    name:"projectpic",
    initialState:{picdiv:{name:"Enterijer", id:"im1"},
    firstdiv:true,
    secdiv:false,thirddiv:false, 
    fourdiv:false},
    reducers:{
        chosediv(state,action){
       state.picdiv=action.payload
       if(state.picdiv.id==="im1"){
        state.firstdiv=true
       }
       else{state.firstdiv=false}
       if(state.picdiv.id==="im2"){
        state.secdiv=true
       }
       else{state.secdiv=false}
       if(state.picdiv.id==="im3"){
        state.thirddiv=true
    }
    else{state.thirddiv=false}
       if(state.picdiv.id==="im4"){
        state.fourdiv=true
    }
    else{state.fourdiv=false}
        }
    }
})
const movenav=createSlice({
    name:"movenav",
    initialState:{moving:false},
    reducers:{
        move(state,action){
            state.moving=!state.moving
        }
    }
})
const swichpage=createSlice({
    name:"switchpage",
    initialState:{switch:true},
    reducers:{
        switching(state,action){
            state.switch=false
        },
        unswitch(state,action){
            state.switch=true
        }
    }
})
const addmaplocation=createSlice({
    name:"addmaplocation",
    initialState:{addloc:false},
    reducers:{addlocation(state,action){
        state.addloc=true
    },
    unlocation(state,action){
        state.addloc=false
    }
}
})
export const store=configureStore({
    reducer:{
        addmaplocation:addmaplocation.reducer,
        swichpage:swichpage.reducer,
        movenav:movenav.reducer,
        projectpic:projectpic.reducer,
        zoomimg:zoomimg.reducer,
      imgindex:imgindex.reducer  ,
      scrollTo:scrollTo.reducer,
      chamgeclassonscroll:chamgeclassonscroll.reducer
    }
})
export const location=addmaplocation.actions
export const switchi=swichpage.actions
export const movenavig=movenav.actions
export const zoomimage=zoomimg.actions
export const getclass=chamgeclassonscroll.actions
export const addindex=imgindex.actions
export const scrolltoel=scrollTo.actions
export const choosedivpic=projectpic.actions

