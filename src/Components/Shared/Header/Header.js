import React, { useState, useEffect } from 'react'
import './Header.scss';

import Logo from './../../../Assets/imgs/logo-horizontal.png';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ModalLoginFuncionario from '../ModalLogin/ModalLoginFuncionario'

function Header() {
        const [modalShow, setModalShow] = useState(false);

        const [user, setUser] = useState(null);

        const getUser = async () => {
            const usuarioLogado = JSON.parse(localStorage.getItem('user'));
            setUser(usuarioLogado ? usuarioLogado : null)
         }

        useEffect(() => {
            getUser()
        }, [])
        
        const handleShow = () => {
            setModalShow(!modalShow)
        }
        return (
            <div>
                <ModalLoginFuncionario
                    show={modalShow}
                    onHide={() => {
                        getUser();
                        setModalShow(false);
                    }}
                ></ModalLoginFuncionario>
                <div className="header">
                    <Container className="container">
                        <div>
                            <Link to="/">
                                <img src={Logo} className="logo" alt="Clubei - O clube de beneficios que você precisa"/>
                            </Link>
                        </div>
                        <div>
                            <nav>
                                <ul id="navegacao">
                                    <li id="funcionarios">
                                        <Button variant="primary" onClick={handleShow}>
                                            {!user && <span>Funcionários</span>}
                                            {user && <span>{user.nome}</span>}
                                        </Button>
                                    </li>
                                    <li id="empresas">
                                        <Button variant="primary" className="outline">Empresa</Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </div>
            </div>
        )
    
}

export default Header
