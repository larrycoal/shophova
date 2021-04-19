import {LOGIN_USER,REGISTER_USER,AUTH_USER,LOGOUT_USER} from '../types'
import axios from 'axios'

 const UserServer = "/api/user"
export const loginUser = (datatoSubmit)=>{
    let response = axios.post(`${UserServer}/login`,datatoSubmit).then((res)=>res.data)

    return {
        type:LOGIN_USER,
        payload:response
    }
}
export const logoutUser = ()=>{
    let response = axios.get(`${UserServer}/logout`).then((res)=>res.data)
    return {
        type:LOGOUT_USER,
        payload:response
    }
}
export const registerUser = (datatoSubmit)=>{
   
    let response = axios.post(`${UserServer}/register`,datatoSubmit).then((res)=>res.data)
    return {
        type:REGISTER_USER,
        payload:response
    }
}
export const authenticateUser = ()=>{

    let res = axios.get(`${UserServer}/auth`).then((res)=>res.data)
    return {
        type:AUTH_USER,
        payload:res
    }
}