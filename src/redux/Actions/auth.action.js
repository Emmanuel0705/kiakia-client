import { STORE_USER, LOGOUT_USER, FAKE_WALLET } from "../types/auth.type";
import axios from 'axios'
import { setError, setSuccess } from "./alert.action";
import { setChildLoader, clearLoader } from "./component.action";

export const logout = () => ({
     type:LOGOUT_USER
})
export const loginUser = (formData,history) => async dispatch => {
    dispatch(setChildLoader())
    try {
        const res = await axios.post("https://kiakia-api.herokuapp.com/api/user/auth",formData)
        if(res.data.status === 'error'){
            dispatch(setError(res.data.message))
            dispatch(clearLoader())
        }
        if(res.data.token){
            window.sessionStorage.setItem("token",res.data.token)
            dispatch(storeUser(res.data.token))
            history.push('/dashboard')
            setTimeout(() => {
                dispatch(clearLoader())
            }, 6000);
           
        }
    } catch (err) {
        dispatch(clearLoader())
         dispatch(setError("Something Went Wrong, Pls Try Again!"))
    }
    dispatch(clearLoader())
}
export const registerUser = (formData,history) => async dispatch => {
    dispatch(setChildLoader())
    try {
        if(formData.password !== formData.confirmPassword){
             dispatch(setError("Password Does not Match"))
            dispatch(clearLoader())
        }
        if(formData.password.length < 8 || formData.confirmPassword.length < 8){
            dispatch(setError("Password must be more than 8 character"))
            dispatch(clearLoader())
        }
        const res = await axios.post("https://kiakia-api.herokuapp.com/api/user",formData)
        if(res.data.status === 'error'){
            dispatch(setError(res.data.message))
            dispatch(clearLoader())
        }
        if(res.data.token){
            window.sessionStorage.setItem("token",res.data.token)
            dispatch(storeUser(res.data.token))
            dispatch(setSuccess("Registered Successfully!"))
            history.push('/dashboard')
            setTimeout(() => {
                dispatch(clearLoader())
            }, 4000);
        }
    } catch (err) {
         dispatch(setError("Something Went Wrong, Pls Try Again!"))
         dispatch(clearLoader())
    }
    dispatch(clearLoader())
}
export const storeUser = (token) => async dispatch => {
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get('https://kiakia-api.herokuapp.com/api/user/auth',config)
    if(res.data.wallet){
        console.log('ffff')
        dispatch({type:STORE_USER,payload:res.data})
        return true
    }else{
        return false
    }
}
export const fakeWallet = (amount) => async dispatch => {
 
        dispatch({type:FAKE_WALLET,payload:amount})
  
}