import React, {useState, useEffect} from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./ModalContato.scss";

function ModalContato(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-clubei"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        
        
            <Modal.Body>
                <Row className="mb-4">
                    <Col className="text-center">
                        <h4>Conta pra gente o que podemos fazer pelo seu negócio</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-5 mt-5 text-center">FORMULÁRIO</Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p>Entraremos em contato para crescermos juntos...</p>
                    </Col>
                </Row>
            
            
            </Modal.Body>
        
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  export default ModalContato;