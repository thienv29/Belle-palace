import style from './modal-search.module.css'
import { useEffect, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti"
interface props {
    active: number,
    handleClickIconSearch: () => void;
}

const ModalSearch = ({ active, handleClickIconSearch }: props) => {
    const [TextValue, setTextValue] = useState('')

    const handleChangeValue = (e: any) => {
        setTextValue(e.target.value)
    }

    const getClassAnimate = () => {
        if (active == 0) {
            return ' '
        } else if (active == 1) {
            return style.active
        } else {
            return style.noneactive
        }
    }

    return (
        <div className={`${style.modal} ${getClassAnimate()}`} >
            <form action="/" method="get" className={style.modal_content}>
                <input type="text" name="s" value={TextValue} onChange={handleChangeValue} autoFocus={true} />
                <TiDeleteOutline className={style.reset_text_icon} color="white" fontSize="3rem" onClick={() => setTextValue('')} />
            </form>
            <div className={style.overlay} onClick={handleClickIconSearch} ></div>
        </div>
    )
}
export default ModalSearch;