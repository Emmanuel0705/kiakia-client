import axios from 'axios'
import { storeUser } from '../redux/Actions/auth.action';

// @flow
/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = async () => {
    const token = window.sessionStorage.getItem('token')
    if(!token){
       return false
    }
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    const res = await axios.get('https://kiakia-api.herokuapp.com/api/user/auth',config)
    if(res.data.wallet){
        storeUser(res.data)
        return true
    }else{
        return false
    }
   
};



export default isUserAuthenticated;