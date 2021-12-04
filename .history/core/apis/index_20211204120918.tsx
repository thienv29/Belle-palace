import axios from "axios"
const storeId = process.env.STORED_ID
export const getServices = async () => {
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/service-group/getAllDetailOnBooking?storeId=${storeId}`,
        headers: {}
    })
}
export const getInfoPage = async () => {
  
}