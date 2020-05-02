import {SET_ERROR, CLEAR_ALERT, SET_SUCCESS} from '../types/alert.type'
export const setError = (message) => dispatch => {
    dispatch({
        type:SET_ERROR,
        payload:message
    })
    setTimeout(() => {
        dispatch(clearAlert())
    }, 5000);
}
export const setSuccess = (message) => dispatch => {
    dispatch({
        type:SET_SUCCESS,
        payload:message
    })
    setTimeout(() => {
        dispatch(clearAlert())
    }, 5000);
}
export const clearAlert = () => ({
    type:CLEAR_ALERT
})