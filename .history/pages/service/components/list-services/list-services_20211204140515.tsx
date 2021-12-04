import React from 'react'
import LineOver from "../../../components_shared/line-over/line-over";
import ListServicesChild from '../list-services-child/list-services-child';
import style from './list-services.module.css'
const ListServices = ({ data }: any) => {

    return (
        <div>
            {data.result?.map((item :any,index:number) => {
                return (
                    <div key={index} className={style.box_services}>
                        <h2 className="text-center">{item.name}</h2>
                        <ListServicesChild data={item.services} />
                        <LineOver bg="transparent" />
                    </div>
                )
            })}

        </div>
    )
}

export default ListServices
