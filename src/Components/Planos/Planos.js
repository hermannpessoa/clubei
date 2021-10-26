import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ListaPlanos from './../Shared/ListaPlanos/ListaPlanos';


function Planos() {
    return (
        <>
            <Header></Header>
            <div className="content overflow-x-hidden">
            <Container>
                <Row>
                    <div className="col-12">
                        <ListaPlanos></ListaPlanos>
                    </div>
                </Row>
            </Container>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Planos
