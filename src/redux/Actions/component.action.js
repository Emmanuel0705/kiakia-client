import {SET_SIDE_BAR, SET_AIRTIME_MODAL, SET_DATA_MODAL, CLOSE_MODAL,
     SET_PAYMENT_MODAL, SET_CABLE_MODAL,
     SET_CHILD_LOADER,SET_PARENT_LOADER,
     CLEAR_LOADER,SET_ELECTRICITY_MODAL,
      SET_RECHARGE_MODAL, SET_TRANSFER_MODAL} from "../types/component.type"
export const showSideBar = () => ({
    type:SET_SIDE_BAR
}) 
export const showAirtimeModal = () => ({
    type:SET_AIRTIME_MODAL
})
export const showTranferModal = () =>({
    type:SET_TRANSFER_MODAL
})
export const showPaymentModal = () => ({
    type:SET_PAYMENT_MODAL
})
export const showDataModal = () => ({
    type:SET_DATA_MODAL
})
export const showElectricityModal = () => ({
    type:SET_ELECTRICITY_MODAL
})
export const showRechargeModal = () => ({
    type:SET_RECHARGE_MODAL
})
export const showCableModal = () => ({
    type:SET_CABLE_MODAL
})
export const closeModal = () => ({
    type:CLOSE_MODAL
})
export const setChildLoader = () =>({
    type:SET_CHILD_LOADER
})
export const setParentLoader = () =>({
    type:SET_PARENT_LOADER
})
export const clearLoader = () =>({
    type:CLEAR_LOADER
})