import {LOGIN_USER,REGISTER_USER} from '../types'
import axios from 'axios'

export const loginUser = (datatoSubmit)=>{
    let response = axios.post("/api/user/login",datatoSubmit).then((res)=>res.data)

    return {
        type:LOGIN_USER,
        payload:response
    }
}
export const registerUser = (datatoSubmit)=>{
    let response = axios.post("/api/user/register",datatoSubmit).then((res)=>res.data)

    return {
        type:REGISTER_USER,
        payload:response
    }
}