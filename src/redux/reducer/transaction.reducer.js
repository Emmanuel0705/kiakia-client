import { STORE_CABLE_DETAILS, CLEAR_CABLE_DETAILS,
     STORE_ELECTRICITY_DATA, CLEAR_ELECTRICITY_DATA, REQUEST_PIN } from "../types/transactions.type"

const INITIAL_STATE = {
    cableDetails:"",
    electricityData:"",
    rechargeData:""
}

const transactionReducer = (state = INITIAL_STATE,action) =>{
   switch(action.type){
       case STORE_CABLE_DETAILS:
           return {...state,cableDetails:action.payload}
       case CLEAR_CABLE_DETAILS:
           return {...state,cableDetails:""}
       case STORE_ELECTRICITY_DATA:
        return {...state,electricityData:action.payload}
       case CLEAR_ELECTRICITY_DATA:
        return {...state,electricityData:""}
       case REQUEST_PIN:
        return {...state,rechargeData:action.payload}
       default:
           return state
   }
}
export default transactionReducer