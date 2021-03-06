import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap'
import './CallToActionSection.scss'
import mascote from '../../../Assets/imgs/Verde.png'
import ModalContato from '../ModalContato/ModalContato'

function CallToActionSection() {
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
        <div className="callToActionSection">
            <Container>
                <div className="callToActionSection-container">
                    <div className="mascote"><img src={mascote} alt="Clubinho" /></div>
                    <div className="textToAction">
                        <div className="title">
                            Seu colaborar vai amar esse benefício
                        </div>
                        <small>Liberdade para seu time escolher  benefícios, e muito mais</small>
                        <Button variant="primary" onClick={handleClick}>solicitar contato</Button>

                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default CallToActionSection
