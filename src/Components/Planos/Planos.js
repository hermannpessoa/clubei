import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../Shared/Header/Header';
import ListaPlanos from './../Shared/ListaPlanos/ListaPlanos';
import { Link } from 'react-router-dom';

function Planos() {
    return (
        <>
            <Header></Header>
            <div className="content overflow-x-hidden">
            <Container>
                <Row>
                    <div className="col-12">
                        <Link to="/planos"><h2 className="title">Nossos Planos</h2></Link>
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <ListaPlanos></ListaPlanos>
                    </div>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Planos
