import {LOGIN_USER} from '../types'
import axios from 'axios'

export const loginUser = (datatoSubmit)=>{
    let response = axios.post("/api/user/login",datatoSubmit).then((res)=>res.data)

    return {
        type:LOGIN_USER,
        payload:response
    }
}