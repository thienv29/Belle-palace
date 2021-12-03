import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import style from './slide-show.module.css'
const slideImages = [
    'images/banner1.jpg',
    'images/banner2.jpg',
];
const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true
}

const SlideShow = () => {

    return (<>
        <Slide {...properties} className={style.slide_show} id="slide-show" easing="ease">
            <div className={style.each_slide}>
                <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    <div className="slideShow_content" >
                        <div className="slideShow_content_heading">
                            Love Your Nails
                        </div>
                        <div className="slideShow_content_description">
                            Always in good form for nails
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.each_slide}>
                <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    <div className="slideShow_content" >
                        <div className="slideShow_content_heading">
                            Your Nail Specialist
                        </div>
                        <div className="slideShow_content_description">
                            Your nails will want to come back for more!
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    </>
    )
}

export default SlideShow
