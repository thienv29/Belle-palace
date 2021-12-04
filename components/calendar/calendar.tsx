import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { formatPhone } from '../../core/utils/formatPhone'
import style from './calendar.module.css'

const Calendar = (props:any) => {
    const result = props.data.result
    
    return (
        <div className={style.container}>
            <Container className="custom">
                <Row>
                    <Col sm="6" className={`${style.info_container} full-md`}>
                        <div className={style.info}>
                            <div className={style.heading_info}>
                                <h4 className="color-primary"> Hours of Operation </h4>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Monday – Friday:
                                </div>
                                <div className={style.info_normal}>
                                    10:00 am – 8:00 pm
                                </div>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Saturday:
                                </div>
                                <div className={style.info_normal}>
                                    9:00 am – 7:00 pm
                                </div>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Sunday:
                                </div>
                                <div className={style.info_normal}>
                                    10:00 am – 4:00 pm
                                </div>
                            </div>

                        </div>
                        <div className={style.info}>
                            <div className={style.heading_info}>
                                <h4 className="color-primary"> Contact Us </h4>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Address:
                                </div>
                                <div className={style.info_normal}>
                                    {result?.address}
                                </div>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Phone:
                                </div>
                                <div className={style.info_normal}>
                                {formatPhone(result?.phone)}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className={`${style.gg_map} full-md`}>
                        <div className={style.iframe}>
                            <iframe
                                width="600"
                                height="450"
                                style={{border:0}}
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB12a91SpS1s699OhnsEyMKk58pYdfv_Ec&q=${result?.address}`}>
                            </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Calendar
