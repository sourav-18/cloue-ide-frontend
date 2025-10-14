import axios from "axios";
const appid = import.meta.env.VITE_APP_ID;

export const getRequest = ({ url, headerData={} }) => {
    const headers = {
        "Content-Type": "application/json",
        "app-id": appid,
        ...headerData
    }
    const token = localStorage.getItem("token");
    if (token) {
        headers['Authorization'] = token;
    }
    return axios.get(url, {
        headers: headers
    }).then((data) => data.data).catch((error) => {
        return {
            status: 'error',
            statusCode: 500,
            message: 'Api Request Failed',
            data: null
        }
    })
}

export const postRequest = ({ url, headerData = {}, body }) => {
    const headers = {
        "Content-Type": "application/json",
        "app-id": appid,
        ...headerData
    }
    const token = localStorage.getItem("token");
    if (token) {
        headers['Authorization'] = token;
    }
    return axios.post(url, body, {
        headers: headers
    }).then((data) => data.data).catch((error) => {
        return {
            status: 'error',
            statusCode: 500,
            message: 'Api Request Failed',
            data: null
        }
    })
}