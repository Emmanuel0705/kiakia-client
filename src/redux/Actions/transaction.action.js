import axios from 'axios'
import { setError, setSuccess } from './alert.action';
import { storeUser } from './auth.action';
import { setParentLoader, clearLoader, setChildLoader } from './component.action';
import { BUY_DATA, CABLE_TV, STORE_CABLE_DETAILS, CLEAR_CABLE_DETAILS, 
    ELECTRICITY_BILL, STORE_ELECTRICITY_DATA, CLEAR_ELECTRICITY_DATA, REQUEST_PIN } from '../types/transactions.type';

export const cableTv = formData =>({
    type:CABLE_TV,
    payload:formData
})
export const clearElectData = () => dispatch => {
    dispatch(setChildLoader())
    setTimeout(() => {
        dispatch({ type:CLEAR_ELECTRICITY_DATA})
        dispatch(clearLoader())
    }, 2000);
   
}
export const requestPin = formData => ({
    type:REQUEST_PIN,
    payload:formData
})
export const storeElectricityData = formData => ({
    type:STORE_ELECTRICITY_DATA,
    payload:formData
})
export const payElectricityBill = formData => ({
    type:ELECTRICITY_BILL,
    payload:formData
})
export const clearCableData = () =>({
    type:CLEAR_CABLE_DETAILS
})
export const storeCableData = data => ({
    type:STORE_CABLE_DETAILS,
    payload:data
})
export const buyData = formData =>({
    type:BUY_DATA,
    payload:formData
})
export const buyAirtime = (formData) => async dispatch => {
    try {
        const res = await axios.post("https://kiakia-api.herokuapp.com/api/transaction/buy-airtime",formData)
        
    if(res){       
        console.log(res)
        dispatch(setError("Server Error! please try Again"))
        dispatch(clearLoader())
    }
        
    } catch (error) {
        console.log(error.message)
        dispatch(clearLoader())
        dispatch(setError("Server Error! please try Again"))
    }
    
    
}
export const verifyPayment = (ref) => async dispatch => {
    dispatch(setParentLoader())
    const token = window.sessionStorage.getItem('token');
    if(!token){
       return dispatch(setError("We are Unable to Process Your Request Pls Contact Our Customer Care"))
    }
    const config = {
        headers:{
            'authorization': `Bearer ${token}`
        }
    }
    const res = await axios.post("https://kiakia-api.herokuapp.com/api/transaction/fund-wallet",{ref},config)
    if(res.data.status === "error"){
        dispatch(clearLoader())
       return dispatch(setError(res.data.message))
    }
    if(res.data.status === "success"){
        dispatch(storeUser(token))
        dispatch(clearLoader())
        return dispatch(setSuccess(res.data.message))
    }
}