import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../Shared/Header/Header';


function Categorias() {
    return (
        <>
            <Header></Header>
            <div className="content overflow-x-hidden">
            <Container>
                <Row>
                    <div className="col-12">
                        categorias
                    </div>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Categorias