import React from 'react'
import style from './list-services-child.module.css'

const ListServicesChild = ({ data }: any) => {
    return (
        <div>
            {data?.map((item :any,index :number) => {
                return (
                    <a href="#" key={index} className={style.service}>
                        <div className={style.service_header}>
                            <span className={style.left}>
                            {`${item.name} (Approx. ${item.timeToComplete} min.)`}
                            </span>
                            <span className={style.mid}></span>
                            <span className={style.right}>${item.price}</span>
                        </div>
                        <div className={style.service_description}>
                            {item.description ? item.description  : ''}
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default ListServicesChild
