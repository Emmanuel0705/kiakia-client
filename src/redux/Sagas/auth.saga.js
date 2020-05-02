import {takeEvery,call,put} from 'redux-saga/effects'
import {LOGIN_USER} from '../types/auth.type'
import axios from 'axios'
import {setAlert} from '../Actions/alert.action'
export function* loginUserAsync(action) {
    try {
        // const res = yield axios.post("http://localhost:5000/api/user/auth",action.payload)
        // if(res.data.status === 'error'){
        //     yield console.log(res.data.message)
        //     yield put(setAlert("danger",))
        // }
        // if(res.data.token){
        //     yield console.log(res.data.token)
        // }
        // yield console.log(res)
    } catch (err) {
        // yield console.log(err)
    }
    
}

export function* loginUser() {
    // yield takeEvery(LOGIN_USER,loginUserAsync)
}

