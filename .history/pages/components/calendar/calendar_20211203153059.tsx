import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './calendar.module.css'

const Calendar = () => {
    return (
        <div className={style.container}>
            <Container className="custom">
                <Row>
                    <Col sm="6" className={`${style.info_container} full767`}>
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
                        <iframe  src="https://maps.google.com/maps?q=1500%20Almonesson%20Rd%2C%20Deptford%20Township%2C%20New%20Jersey%2C%2008096%2C%20USA&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="1500 Almonesson Rd, Deptford Township, New Jersey, 08096, USA" aria-label="1500 Almonesson Rd, Deptford Township, New Jersey, 08096, USA"></iframe>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Calendar
