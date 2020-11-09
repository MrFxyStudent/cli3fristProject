import { request } from "./request"

export function oneRequest(twoobj) {
    // console.log('oneRequest'); //1
    return request({
        url: '/home/multidata',
        params: {
            tepe: 'sell',
            page: 1
        },
        secces: function(axiosData) {
            twoobj.twoHD(axiosData + 'home');
            // console.log(axiosData); //4
        }
    })
}
//服装商品请求
export function dataRequest(typeData, pageNum) {
    return request({
        url: '/api/w6/home/data',
        params: {
            type: typeData,
            page: pageNum
        },
    })
}