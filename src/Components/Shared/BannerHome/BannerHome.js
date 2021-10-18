import React from 'react';
import './BannerHome.scss';
import { Container } from 'react-bootstrap';
import Banner from '../../../Assets/imgs/banner-1.png';
import BannerMobile from '../../../Assets/imgs/mobile.png';


function BannerHome() {
    return (
        <div>
            <div className="bannerContainer">
                <Container>
                    <img src={Banner} className="bannerImage" alt="O clube dos clubes"/>
                    <img src={BannerMobile} className="bannerMobile" alt="O clube dos clubes"/>
                </Container>
            </div>
        </div>
    )
}

export default BannerHome
