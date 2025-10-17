import { getRequest, postRequest } from "./api.service";
const baseUrl = import.meta.env.VITE_API_BASE_URL;


export const projectListRequest = async () => {
    const apiUrl = baseUrl + "/repl"
    const apiRes = await getRequest({ url: apiUrl })
    return apiRes;
}

export const projectCreateRequest = async (body) => {
    const apiUrl = baseUrl + "/repl"
    const apiRes = await postRequest({ url: apiUrl, body: body })
    return apiRes;
}

export const projectSocketUrlRequest = async (replId) => {
    const apiUrl = baseUrl + `/repl/${replId}/socket-url`
    const apiRes = await getRequest({ url: apiUrl });
    return apiRes;
}