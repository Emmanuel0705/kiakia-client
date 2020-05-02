import { SET_TOKEN } from "../types/session.type"

const INITIAL_STATE = {
    token:""
}

const sessionReducer = (state = INITIAL_STATE,action) =>{
   switch(action.type){
       case SET_TOKEN:
           return {...state,token:action.payload}
       default:
           return state
   }
}
export default sessionReducer