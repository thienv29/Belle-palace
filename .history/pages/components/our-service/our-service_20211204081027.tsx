import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LineOver from '../../components_shared/line-over/line-over'
import style from './our-service.module.css'
import Link from 'next/link'
import Image from 'next/Image'
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
                    <Col className="full-md">
                        <Link href="/service" >
                            <a  className={style.product_container}>
                                <div className={style.avatar_img}>
                                    <Image src="/images/service-1.jpg" alt="" width="100%" height="100%" />
                                </div>
                                <div className={style.product_detail}>
                                    <h3 className="color-primary">Manicure</h3>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col className="full-md">
                        <Link href="/service" >
                            <a  className={style.product_container}>
                                <div className={style.avatar_img}>
                                    <img src="/images/service-2.jpg" alt="" width="100%" height="100%" />
                                </div>
                                <div className={style.product_detail}>
                                    <h3 className="color-primary">Pedicure</h3>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col className="full-md">
                        <Link href="/service" >
                            <a  className={style.product_container}>
                                <div className={style.avatar_img}>
                                    <img src="/images/service-3.jpg" alt="" width="100%" height="100%" />
                                </div>
                                <div className={style.product_detail}>
                                    <h3 className="color-primary">Waxing</h3>
                                </div>
                            </a>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </div>
        <LineOver bg={false} />
    </>
    )
}

export default OurService
