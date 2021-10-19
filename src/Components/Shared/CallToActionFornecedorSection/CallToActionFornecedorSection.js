
import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap'

import './CallToActionFornecedorSection.scss'
import mascote from '../../../Assets/imgs/Laranja.png'
import ModalContato from '../ModalContato/ModalContato'


function CallToActionFornecedorSection() {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    return (
        <>
        <ModalContato 
            show={modalShow} onHide={() => {
            setModalShow(false);
        }}></ModalContato>
        <div className="callToActionFornecedorSection">
            <Container>
                <div className="callToActionSection-container">
                    <div className="textToAction">
                        <div className="title">
                            Seu colaborar vai amar esse benefício
                        </div>
                        <Button variant="primary mt-4" onClick={handleClick}>solicitar contato</Button>
                    </div>
                    <div className="mascote"><img src={mascote} alt="Clubinho" /></div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default CallToActionFornecedorSection
