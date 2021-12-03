import { Navbar, Nav, Container, NavDropdown, Col, Row } from "react-bootstrap";
import style from './header-sub.module.css'
import { FaSearch, FaFacebookF } from "react-icons/fa";
import ModalSearch from "../modal-search/modal-search";
import { useState, useCallback } from 'react'
import { GetServerSideProps, GetStaticPropsContext } from "next";
function HeaderSub() {
    const [ActiveSearch, setActive] = useState(0)
    const handleClickIconSearch = useCallback(
        () => {
            if (ActiveSearch == 0 || ActiveSearch == -1) {
                setActive(1)
            } else {
                setActive(-1)
            }
        },
        [ActiveSearch],
    )
    return (
        <Navbar className={style.header_sub} expand="lg">
            <Container className="custom" >
                <Row className="fullwidth" >
                    <Col lg="10" xl="8" className={`${style.navbar_sub_content} `}>
                        <Row className=" md-none  "  >
                            <div className={style.text_style}>
                                <img className={style.icon} src="/icons/phone.svg" />
                                <span>{process.env.PHONE_STORE}</span>
                            </div>
                            <div className={style.text_style}>
                                <img className={style.icon} src="/icons/gps.svg" />
                                <span>{process.env.ADDRESS_STORE}</span>
                            </div>
                        </Row>

                    </Col>
                    <Col xs="6" sm="6" lg="1" xl="2" className={`${style.navbar_sub_content} ${style.navbar_sub_content_right} ${style.navbar_sub_content_center}`}>
                        <FaSearch opacity="0.5" className="pointer" onClick={handleClickIconSearch} />
                    </Col>
                    <Col xs="6" sm="6" lg="1" xl="2" className={`${style.navbar_sub_content} ${style.navbar_sub_content_right}`}>
                        <a style={{ lineHeight: "100%" }} href="https://www.facebook.com/BellePalaceNailSpaDeptford">
                            <FaFacebookF className="colorHover pointer" />
                        </a>

                    </Col>
                </Row>

            </Container>
            <ModalSearch active={ActiveSearch} handleClickIconSearch={handleClickIconSearch} />
        </Navbar>
    )
}
const getStaticProps: GetS= () => {
  
}

export default HeaderSub;