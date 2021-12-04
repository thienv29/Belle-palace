import axios from "axios"
const storeId = process.env.STORED_ID
export const getServices = async () => {
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/service-group/getAllDetailOnBooking?storeId=${storeId}`,
        headers: {}
    })
    return data
}
export const getInfoPage = async () => {
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/store/34533204-0b09-3243-933e-3c84ab8a6cfb${storeId}`,
        headers: {}
    })
    return data
}