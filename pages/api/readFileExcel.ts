import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import xlsx from "node-xlsx";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    

    const obj = xlsx.parse(fs.readFileSync(__dirname + "/data.xlsx"));
    console.log();
    const dataByStoreId = obj[0].data.find(
        (element) => element[0] == process.env.STORED_ID
    );
    const dataToObject = {
        storeID: dataByStoreId ? dataByStoreId[0] : "",
        aboutUs: dataByStoreId ? dataByStoreId[1] : "",
        hostAParty: dataByStoreId ? dataByStoreId[2] : "",
        onlineBooking: dataByStoreId ? dataByStoreId[3] : "",
        fanpage: dataByStoreId ? dataByStoreId[4] : "",
    };
    res.status(200).json(dataToObject);
}