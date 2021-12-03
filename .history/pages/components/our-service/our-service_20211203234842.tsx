import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LineOver from '../../components_shared/line-over/line-over'
import style from './our-service.module.css'

const OurService = () => {
    return (<>
        <div className={style.section}>
            <Container className={`${style.container} custom`}>
                <Row>
                    <div className="">
                        <h2 className="heading-title-lg color-primary text-center">Our Services</h2>
                    </div>
                </Row>
                <Row className={style.list_product}>
                    <Col className="full767">
                        <a href="/service" className={style.product_container}>
                            <div className={style.avatar_img}>
                                <img src="/images/service-1.jpg" alt="" width="100%" height="100%" />
                            </div>
                            <div className={style.product_detail}>
                                <h3 className="color-primary">Manicure</h3>
                            </div>
                        </a>
                    </Col>
                    <Col className="full767">
                        <a href="/service" className={style.product_container}>
                            <div className={style.avatar_img}>
                                <img src="/images/service-2.jpg" alt="" width="100%" height="100%" />
                            </div>
                            <div className={style.product_detail}>
                                <h3 className="color-primary">Pedicure</h3>
                            </div>
                        </a>
                    </Col>
                    <Col className="full767">
                        <a href="/service" className={style.product_container}>
                            <div className={style.avatar_img}>
                                <img src="/images/service-3.jpg" alt="" width="100%" height="100%" />
                            </div>
                            <div className={style.product_detail}>
                                <h3 className="color-primary">Waxing</h3>
                            </div>
                        </a>
                    </Col>

                </Row>
            </Container>
        </div>
        <LineOver bg={false} />
    </>
    )
}

export default OurService
