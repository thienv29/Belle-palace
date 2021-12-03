import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './calendar.module.css'

const Calendar = () => {
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
                                {process.env.NEXT_PUBLIC_ADDRESS_STORE}
                                </div>
                            </div>
                            <div className={style.info_content}>
                                <div className={style.info_bold}>
                                    Phone:
                                </div>
                                <div className={style.info_normal}>
                                {process.env.NEXT_PUBLIC_PHONE_STORE}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" className={`${style.gg_map} full767`}>
                        <div className={style.iframe}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.824937994379!2d-75.07010744847003!3d40.01235777931325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b6715bd9398d%3A0x39bf6ba763f3e3c3!2s5597%20Tulip%20St%2C%20Philadelphia%2C%20PA%2019124%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1638520692878!5m2!1svi!2s" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy"></iframe>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Calendar
