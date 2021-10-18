import React, { Component } from 'react'
import './Header.scss';

import Logo from './../../../Assets/imgs/logo-horizontal.png';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
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
                                        <Button variant="primary">Funcionários</Button>
                                    </li>
                                    <li id="empresas">
                                        <Button variant="primary" className="outline">Empresa</Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </header>
            </div>
        )
    }
}

export default Header
