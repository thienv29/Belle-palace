import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LineOver from '../../pages/components_shared/line-over/line-over'
import style from './about-us.module.css'
import AOS from 'aos';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { GetStaticProps } from 'next';
const AboutUs = ({content}:any) => {
    useEffect(() => {
        AOS.init({ duration: 300 })

    }, [])
    
    return (
        <div className={style.section}>
            <Container className="custom">
                <Row>
                    <Col sm="8" className="full-md">
                        <div className={style.heading}>
                            <h3>About Us</h3>
                        </div>
                        <div className={style.content_paragraph}>
                            <p>{content.aboutUs}</p>
                        </div>
                        <div className={`${style.content_paragraph} ${style.content_paragraph2}`}>
                            <p></p>
                        </div>
                        <div className={style.content_ps}>
                            <h4>&quot; Be yourself in style, to the tip of your nails &quot;</h4>
                        </div>
                    </Col>
                    <Col sm="4" className="full-md" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Gallery>
                            <Row className="full-md" >
                                <Col sm="6" className="full-md" >
                                    <Item
                                        original='/images/about-us.jpg'
                                        width="270"
                                        height="182"
                                    >
                                        {({ ref, open }) => (<>
                                            <nav ref={ref}  className={style.img_container} data-aos="zoom-in" data-aos-once="true"  >
                                                <img src="/images/about-us.jpg" alt="" width="100%" height="100%" />
                                                <div onClick={open} className={style.overlay}></div>
                                            </nav>
                                        </>
                                        )}
                                    </Item>

                                </Col>
                                <Col sm="6" className="full-md">
                                <Item
                                        original='/images/about-us-2.jpg'
                                        width="270"
                                        height="182"
                                    >
                                        {({ ref, open }) => (<>
                                            <nav ref={ref}  className={style.img_container} data-aos="zoom-in" data-aos-once="true" >
                                                <img src="/images/about-us-2.jpg" alt="" width="100%" height="100%" />
                                                <div onClick={open} className={style.overlay}></div>
                                            </nav>
                                        </>
                                        )}
                                    </Item>

                                </Col>
                                <Col sm="6" className="full-md">
                                <Item
                                        original='/images/about-us-3.jpg'
                                        width="270"
                                        height="182"
                                    >
                                        {({ ref , open }) => (<>
                                            <nav ref={ref}  className={style.img_container} data-aos="zoom-in" data-aos-once="true" >
                                                <img src="/images/about-us-3.jpg" alt="" width="100%" height="100%" />
                                                <div onClick={open} className={style.overlay}></div>
                                            </nav>
                                        </>
                                        )}
                                    </Item>

                                </Col>
                            </Row>
                        </Gallery>
                    </Col>
                </Row>
            </Container>
            <LineOver bg="#F9F7F7" />
        </div>
    )
}


export default AboutUs
