import React, {useState, useEffect} from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./ModalLoginFuncionario.scss";

function ModalLoginFuncionario(props) {

    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState(null)

    const getUser = async () => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));
        setUser(usuarioLogado ? usuarioLogado : null)
     }

    useEffect(() => {
        getUser()
    }, [])

    const logout = () => {
        localStorage.removeItem('user');

        setTimeout(() => {
            props.onHide();
            getUser();
            setLoading(false)
        } ,500);
    }

    const login = () => {

        setLoading(true)

        const user = {
            nome: 'Maria Antonieta de Las Nieves',
            rg: '01234556789',
            email: 'maria.chiquinha@chavodel8.mx'
        }

        localStorage.setItem('user', JSON.stringify(user));

        setTimeout(() => {
            props.onHide();
            setLoading(false)
        } ,2000);
    }

    const verifyUser = () =>{
        getUser()
    }

    return (
      <Modal
        {...props}
        onShow={verifyUser}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-clubei"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        {user && 
            <Modal.Body>
                 <Row className="mb-4">
                    <Col className="text-center">
                        <h4>Olá, {user.nome}</h4>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        {!loading && <Button variant="primary --text-branco" onClick={logout}>Sair</Button>}
                        {loading && <Button variant="primary --text-branco" disabled>saindo...</Button>}
                    </Col>
                </Row>
            </Modal.Body>
        }
        {!user && 
            <Modal.Body>
                <Row className="mb-4">
                    <Col className="text-center">
                        <h4>Primeiro Acesso? Utilize os dados que sua empresa forneceu</h4>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type="email" placeholder="Para demonstração digite qualquer email" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Para demonstração digite qualquer senha" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        {!loading && <Button variant="danger --text-branco" onClick={login}>Entrar</Button>}
                        {loading && <Button variant="danger --text-branco" disabled>Enviando...</Button>}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p>Sua empresa não tem parceria com o clubei?<br />Clique aqui para nos indicar</p>
                    </Col>
                </Row>
            
            
            </Modal.Body>
        }
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  export default ModalLoginFuncionario;