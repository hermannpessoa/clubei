import React from 'react'
import BannerHome from '../Shared/BannerHome/BannerHome'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import CallToActionSection from '../Shared/CallToActionSection/CallToActionSection'
import ListaCategorias from '../Shared/ListaCategorias/ListaCategorias'
import CallToActionFornecedorSection from '../Shared/CallToActionFornecedorSection/CallToActionFornecedorSection'
import ListaPlanos from '../Shared/ListaPlanos/ListaPlanos'

function Home() {
    return (
        <>
        <div className="masterContent">
            <Header></Header>
            <div className="content">
                <BannerHome></BannerHome>
                <ListaPlanos></ListaPlanos>
                <CallToActionSection></CallToActionSection>
                <ListaCategorias></ListaCategorias>
                <CallToActionFornecedorSection></CallToActionFornecedorSection>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Home
