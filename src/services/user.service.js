import { getRequest } from "./api.service";
const baseUrl=import.meta.env.VITE_API_BASE_URL+'/users';


export const profileRequest = async () => {
    const apiUrl=baseUrl+"/profile"
    const apiRes=await getRequest({url:apiUrl});
    return apiRes;
}
