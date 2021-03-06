import { SET_SIDE_BAR, SET_DATA_MODAL, SET_AIRTIME_MODAL, CLOSE_MODAL, SET_PAYMENT_MODAL,
     SET_CABLE_MODAL, SET_PARENT_LOADER, SET_CHILD_LOADER, CLEAR_LOADER, SET_RECHARGE_MODAL, SET_ELECTRICITY_MODAL, SET_TRANSFER_MODAL } from "../types/component.type"

const INITIAL_STATE = {
   showSideBar:true,
   showAirtimeModal:false,
   showDataModal:false,
   showPaymentModal:false,
   showCableModal:false,
   showRechargeModal:false,
   showElectricModal:false,
   childLoader:false,
   parentLoader:false,
   showTransferModal:false
}
const componentReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SET_SIDE_BAR:
            return {...state,showSideBar:!state.showSideBar}
        case SET_AIRTIME_MODAL:
            return {...state,showAirtimeModal:true,showDataModal:false,
                showPaymentModal:false,setCableModal:false,showRechargeModal:false,
                showElectricModal:false,showTransferModal:false}
        case SET_DATA_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:true,
                showPaymentModal:false,setCableModal:false,showRechargeModal:false,
                showElectricModal:false,showTransferModal:false}
        case SET_PAYMENT_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:true,setCableModal:false,showRechargeModal:false,
                showElectricModal:false,showTransferModal:false}
        case CLOSE_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:false,showCableModal:false,showRechargeModal:false,
                showElectricModal:false,showTransferModal:false}
        case SET_CABLE_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                        showPaymentModal:false,showCableModal:true,showRechargeModal:false,
                        showElectricModal:false,showTransferModal:false}
        case SET_RECHARGE_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:false,showCableModal:false,showRechargeModal:true,
                showElectricModal:false,showTransferModal:false}
        case SET_ELECTRICITY_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:false,showCableModal:false,showRechargeModal:false,
                showElectricModal:true,showTransferModal:false}
        case SET_TRANSFER_MODAL:
            return {...state,showAirtimeModal:false,showDataModal:false,
                showPaymentModal:false,showCableModal:false,showRechargeModal:false,
                showElectricModal:false,showTransferModal:true}

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