import axios from "axios"

export const getSero = async () => {
    const data = await axios({
        method: 'get',
        url: `https://store-svc-demo.ezsalon.one/api/v1/anonymous/service-group/getAllDetailOnBooking?storeId=${storeId}`,
        headers: {}
    })
}