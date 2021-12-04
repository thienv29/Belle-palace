import { GetServerSideProps, NextPage } from 'next'
import Layout from '../../partials/layout'
import SSRProvider from 'react-bootstrap/SSRProvider';
import React, { useEffect } from 'react'
import style from './host-a-party.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { getInfoPage } from '../../core/apis';
const HostAParty: NextPage = ({infoPage}) => {
    const listImages = ["host-a-party-01.jpg", "host-a-party-02.jpg", "service-2.jpg", "about-us-3.jpg"]

    useEffect(() => {
        AOS.init({ duration: 800 })

    }, [])
    return (
        <SSRProvider>
            <Layout title="Host a Party" infoPage={props.infoPage}>
                <div className={style.bg}>
                    <div className={style.overlayWhite}>        
                        <Container style={{ zIndex: "1" }} className={style.container}>
                            <div className={style.heading}>
                                <h2 className="color-primary">Host A Party</h2>
                            </div>
                            <div className={style.content}>
                                <p>
                                    Our Salon is the perfect place to host a bridal shower, birthday celebration, bachelorette/bachelor party, corporate event or a just a get-together for friends, family, and co-workers. We have a beautiful and accommodating space, affordable prices to fit everyone’s budget, and a large team of technicians to serve your needs so you and your guests can relax and enjoy the party. Please inquire for details by giving us a call or fill out the form.
                                </p>
                            </div>
                            <div className={style.list_images}>
                                <Gallery>
                                    <Row>
                                        {listImages.map((image, index) => {
                                            return <Col key={index} sm="6" md="3" data-aos="zoom-in" data-aos-once="true" >
                                                <Item
                                                    original={`/images/host-a-party/${image}`}
                                                    width="270"
                                                    height="182"
                                                >
                                                    {({ ref, open }) => (<>
                                                        <nav ref={ref} className={style.img} style={{ backgroundImage: `url(/images/host-a-party/${image})` }}>
                                                            <div onClick={open} className="overlay"></div>
                                                        </nav>
                                                    </>
                                                    )}
                                                </Item>
                                            </Col>
                                        })}
                                    </Row>
                                </Gallery>
                            </div>
                        </Container>
                    </div>
                </div>
            </Layout>
        </SSRProvider>
    )
}
export const getServerSideProps :GetServerSideProps = async () => {
    const infoPage = await getInfoPage()
    return {
      props: {
        infoPage:infoPage
      }
    }
}
export default HostAParty
