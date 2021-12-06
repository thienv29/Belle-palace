import axios from "axios"
import { formatPhone } from "../utils/formatPhone"
export const getServices = async () => {
    const storeId = process.env.STORED_ID
    const res = await axios({
        method: 'get',
        url: `${}/api/v1/anonymous/service-group/getAllDetailOnBooking?storeId=${storeId}`,
        headers: {}
    })
    const data = res.data
    return data
}
export const getInfoPage = async () => {
    const storeId = process.env.STORED_ID
    const res = await axios({
        method: 'get',
        url: `${}/api/v1/anonymous/store/${storeId}`,
        headers: {}
    })
    const data = res.data
    return data
}