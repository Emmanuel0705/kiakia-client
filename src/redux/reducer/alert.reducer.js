import {SET_ALERT, SET_ERROR, CLEAR_ALERT, SET_SUCCESS} from "../types/alert.type"
const INITIAL_STATE = {
    errorAlert:'',
    successAlert:"",
}

const alertReducer = (state = INITIAL_STATE,action) =>{
   switch(action.type){
       case SET_ERROR:
           return {...state,errorAlert:action.payload}
       case SET_SUCCESS:
        return {...state,successAlert:action.payload}
       case CLEAR_ALERT:
           return {...state,errorAlert:'',successAlert:''}
       default:
           return state
   }
}
export default alertReducer