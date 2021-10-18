import React from 'react'
import BannerHome from '../Shared/BannerHome/BannerHome'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import Planos from '../Planos/Planos'
import CallToActionSection from '../Shared/callToActionSection/callToActionSection'

function Home() {
    return (
        <div>
            <Header></Header>
            <div className="content">
                <BannerHome></BannerHome>
                <Planos></Planos>
                <CallToActionSection></CallToActionSection>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
