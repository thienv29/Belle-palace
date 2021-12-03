import React, { useEffect, useState } from 'react'
import style from './certificate.module.css'
import { TiDelete } from 'react-icons/ti'
import 'animate.css';
const Certificate = () => {
    const [Active, setActive] = useState(false)
    useEffect(() => {
        document.onscroll = () => {
            const current = document.documentElement.scrollTop;
            const maxHeight = document.body.scrollHeight;
            if (current > maxHeight * 0.5) {
                setActive(true)
                document.onscroll = () => { }
            }
        }

    }, [])
    return (
        <div className={`${style.certificate_container} ${Active ? style.active : ''}`}>
            <div className={`${style.certificate_overlay} ${Active ? style.active : ''}`} onClick={() => setActive(false)}>
            </div>
            <div className={`${style.certificate} ${Active ? style.active : ''}`}>
                <TiDelete onClick={() => setActive(false)} className={style.icon} color="white" fontSize="16" />
                <img src="/images/promotion1.jpg" alt=""  width="100%" />
            </div>
        </div>
    )
}

export default Certificate
