import { DataCard } from "../interface/ISearch"

export const searchAll = (params: string) => {

    const db: string[] = [
        " /service ||Services || Our Services MANICURE Belle Palace Classic Manicure (Approx. 20 min.) $15 Basically. It’s not basic at all, consist of nail shaping and filing, hot towel,",
        " /host-a-party ||Host-a-Party || Host A Party Our Salon is the perfect place to host a bridal shower, birthday celebration, bachelorette/bachelor party, corporate event or a just a get-together",
        " / ||Home ||  Your Nail SpecialistYour nails will want to come back for more!Love Your NailsAlways in good form for nails Previous Next Our Services Manicure Pedicure Waxing"
    ]
    const listResult: DataCard[] = []
    db.forEach((item) => {
        if (item.toLowerCase().includes(params.toLowerCase())) {
            listResult.push({
                title: item.split("||")[1],
                content: item.split("||")[2],
                link: item.split("||")[0],
            })
        }
    })
    return listResult;
}
export const fakeapi = () => {

    return {
        phone:'123456',
        
    };

}