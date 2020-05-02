import axios from 'axios'
import { setError, setSuccess } from './alert.action';
import { storeUser } from './auth.action';
import { setParentLoader, clearLoader } from './component.action';
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