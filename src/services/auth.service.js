import { postRequest } from "./api.service";
const baseUrl=import.meta.env.VITE_API_BASE_URL;


export const loginRequest = async (body) => {
    const apiUrl=baseUrl+"/auth/login"
    const apiRes=await postRequest({url:apiUrl,body:body})
    return apiRes;
}

export const autoLoginRequest = async (body) => {
    const apiUrl=baseUrl+"/auth/auto-login"
    const apiRes=await postRequest({url:apiUrl,body:body})
    return apiRes;
}