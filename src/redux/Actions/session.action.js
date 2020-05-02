import { SET_TOKEN } from "../types/session.type";

export const setToken = (payload) => ({
    type:SET_TOKEN,
    payload
})