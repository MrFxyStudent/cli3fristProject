import axios from 'axios'
export function request(obj) {


    const netWorkAxios = axios.create({
        baseURL: 'http://152.136.185.210:8000/',
        timeout: 5000
    })
    netWorkAxios.interceptors.request.use(res => {
            // console.log(res);
            return res
        }), err => {
            console.log(err);
        }
        // http://152.136.185.210:8000/api/w6/home/data?type=new&page=1
    netWorkAxios.interceptors.response.use(res => {
        return res
    }), err => {
        console.log(err);
    }
    return netWorkAxios(obj)
}