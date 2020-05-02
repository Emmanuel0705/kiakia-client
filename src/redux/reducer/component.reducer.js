import { SET_SIDE_BAR, SET_DATA_MODAL, SET_AIRTIME_MODAL, CLOSE_MODAL, SET_PAYMENT_MODAL,
     SET_CABLE_MODAL, SET_PARENT_LOADER, SET_CHILD_LOADER, CLEAR_LOADER } from "../types/component.type"

const INITIAL_STATE = {
   showSideBar:true,
   showAirtimeModal:false,
   showDataModal:false,
   showPaymentModal:false,
   showCableModal:false,
   childLoader:false,
   parentLoader:false
}
const componentReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SET_SIDE_BAR:
            return {...state,showSideBar:!state.showSideBar}
        case SET_AIRTIME_MODAL:
            return {...state,showAirtimeModal:true,showDataModal:false,
                showPaymentModal:false,setCableModal:false}
        case SET_DATA_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:true,
                showPaymentModal:false,setCableModal:false}
        case SET_PAYMENT_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:true,setCableModal:false}
        case CLOSE_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:false,showCableModal:false}
        case SET_CABLE_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                        showPaymentModal:false,showCableModal:true}
        case SET_PARENT_LOADER:
            return {...state,parentLoader:true}
            case SET_CHILD_LOADER:
            return {...state,childLoader:true}
        case CLEAR_LOADER:
            return {...state,childLoader:false,parentLoader:false}
        default:
            return state
    }
}

export default componentReducer