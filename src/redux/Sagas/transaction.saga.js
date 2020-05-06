import {takeEvery,put} from 'redux-saga/effects'
import { BUY_DATA, CABLE_TV, ELECTRICITY_BILL, REQUEST_PIN } from '../types/transactions.type'
import { clearLoader } from '../Actions/component.action'
import { setError } from '../Actions/alert.action'
import axios from 'axios'
import { storeCableData, storeElectricityData, requestPin } from '../Actions/transaction.action'

export function* dataAsync(action){
  try {
      const res =  yield axios.post('http://localhost:5000/api/transaction/buy-data',
      action.payload)
      if(res.data){
        yield put(setError("Error Occured! Pls Try Again"))
      }
      yield put(clearLoader())
      
  } catch (error) {
    yield put(setError("Error Occured! Pls Try Again"))
    yield put(clearLoader())

  }
}
export function* electricityAsync(action){
  try {
    if(action.payload.verified){
      const res =  yield axios.post('http://localhost:5000/api/transaction/electricity-bill',
      action.payload)
        
        if(res.data){
          if(res.data.status === "fail"){
            yield put(setError(res.data.message))
          }
        }else{
          put(setError("Unable To Proccess Your Request"))
        }

    }else{
      const res =  yield axios.post('http://localhost:5000/api/transaction/electricity-bill/verify',
      action.payload)
      if(res.data.status === "success"){
        yield put(storeElectricityData({...action.payload,verified:true,name:res.data.customer_name}))
       
      }
      if(res.data.status === "fail"){
        console.log(res.data)
        yield put(setError(res.data.message))
      }
    }
    
      yield put(clearLoader())
      
  } catch (error) {
    yield put(setError("Error Occured! Pls Try Again"))
    yield put(clearLoader())

  }
}

export function* CableAsync(action){
  try {
    if(action.payload.verified){
      const res =  yield axios.post('http://localhost:5000/api/transaction/cable-tv',
      action.payload)

      if(res.data.status === 'fail'){
        yield put(setError(res.data.message))
      }
      
    }else{
      const res =  yield axios.post('http://localhost:5000/api/transaction/cable-tv/verify',
      action.payload)
      if(res.data.status === 'fail'){
        yield put(setError(res.data.message))
      }
     if(res.data.status === 'success'){
  
       yield put(storeCableData({...action.payload,verified:true,name:res.data.customer_name}))
     }
      
    }
      
    yield put(clearLoader())
      
  } catch (error) {
    yield put(setError("Error Occured! Pls Try Again"))
    yield put(clearLoader())
  }
}
export function* rechargePinAsync(action){
  try {
    if(action.payload.verified){
      console.log(action.payload)
      const res =  yield axios.post('http://localhost:5000/api/transaction/recharge-pin',
      action.payload)
     if(res.data.status === 'fail'){
       yield put(setError(res.data.message))
     }

      // if(res.data.status === 'fail'){
      //   yield put(setError(res.data.message))
      // }
      
    }else{
       yield put(requestPin({...action.payload,verified:true}))
          
    }
      
    yield put(clearLoader())
      
  } catch (error) {
    console.log(error.message)
    yield put(setError("Error Occured! Pls Try Again"))
    yield put(clearLoader())
  }
  
}
export function* transactionSaga(){
  yield takeEvery(BUY_DATA,dataAsync)
  yield takeEvery(CABLE_TV,CableAsync)
  yield takeEvery(ELECTRICITY_BILL,electricityAsync)
  yield takeEvery(REQUEST_PIN,rechargePinAsync)
}