import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './footer.module.css'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (<>
        <div className={style.footer_top}>
            <Container>
                <Row>
                    <Col className={`${style.col_left} colCenter full767`}>
                        <img src="/images/Belle-Palace-logo-9.png" alt="" />
                        <a href={process.env.NEXT_PUBLIC_FACEBOOK} className="tag-a-none">
                            <FaFacebookF color="white" className={style.icon} />
                        </a>
                    </Col>
                    <Col className="full767">
                        <div className={style.col_center}>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBellagioHarbisonNailSpa%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=549111372791376" width="340" height="500" style={{border:'none';overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <div className={style.title_center}>
                                <h3 className="heading-title-md italic color-primary">Walk-ins Welcome</h3>
                                <h3 className="heading-title-thin font-w-600 ">WE ACCEPT</h3>
                            </div>
                            <div className={`${style.bank} d-flex`}>
                                <div className={style.img_bank}>
                                    <img src="/images/bank/discover.png" alt="" height="100%" width="100%" />
                                    <div className="overlay"></div>
                                </div>
                                <div className={style.img_bank}>
                                    <img src="/images/bank/mastercard.png" alt="" height="100%" width="100%" />
                                    <div className="overlay"></div>
                                </div>
                                <div className={style.img_bank}>
                                    <img src="/images/bank/visa.png" alt="" height="100%" width="100%" />
                                    <div className="overlay"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center full767">
                        <form className={style.col_right}>
                            <div className="">
                                <h3 className="heading-title-thin">Newsletter</h3>
                            </div>
                            <input className={style.input} placeholder="Your Name" type="text" name="" required />
                            <input className={style.input} placeholder="Your Email" type="email" name="" required />
                            <button className={style.btn} type="submit">SUBSCRIBE</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
        <div id={style.footer_ps} >
            <Container>
                <div className={style.footer_content} >
                    ?? 2021 ALL RIGHTS RESERVED
                </div>
            </Container>
        </div>
    </>
    )
}

export default Footer
