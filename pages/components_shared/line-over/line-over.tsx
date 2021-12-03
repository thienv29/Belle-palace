import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import style from './line-over.module.css'

const LineOver = ({bg}:{bg:any}) => {
    return (<div style={{backgroundColor: bg || "transparent"}}>
        <Container className={style.container}>
        <Row className={style.line_over_container}>
            <div className={style.line_over}>
                <div className={style.deivice_line}></div>
                <AiFillStar className={style.line_over_icon} />
                <div className={style.deivice_line}></div>
            </div>
        </Row>
        </Container>
        </div>
    )
}

export default LineOver
