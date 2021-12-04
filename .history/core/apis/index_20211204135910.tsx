import axios from "axios"
export const getServices = async () => {
    const storeId = process.env.STORED_ID
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/service-group/getAllDetailOnBooking?storeId=${storeId}`,
        headers: {}
    })
    res = JSON.stringify(data)
    return data.data
}
export const getInfoPage = async () => {
    const storeId = process.env.STORED_ID
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/store/${storeId}`,
        headers: {}
    })
    return data.data
}