import { STORE_USER, LOGOUT_USER, FAKE_WALLET } from "../types/auth.type"
const INITIAL_STATE = {
    user:{}
}

const userReducer = (state = INITIAL_STATE,action) =>{
   switch(action.type){
       case STORE_USER:
           return {...state,user:action.payload}
       case LOGOUT_USER:
           window.sessionStorage.removeItem("token")
           return {...state,user:{}}
      case FAKE_WALLET:
          return{...state,user:{...state.user,wallet:action.payload}}
       default:
           return state
   }
}
export default userReducer