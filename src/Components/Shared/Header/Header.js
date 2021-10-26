import React, { useState, useEffect } from 'react'
import './Header.scss';

import Logo from './../../../Assets/imgs/logo-horizontal.png';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ModalLoginFuncionario from '../ModalLogin/ModalLoginFuncionario'
import useWindowDimensions from '../../../Assets/Helpers/WindowDimmensios'
import { Menu, X } from 'react-feather';

function Header() {
    const [modalShow, setModalShow] = useState(false);

    const { width } = useWindowDimensions();

    const [user, setUser] = useState(null);
    const [menuMobile, setMenuMobile] = useState(false);

    const getUser = async () => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));
        if (width < 800 && usuarioLogado) {
            usuarioLogado.nome = usuarioLogado.nome.split(' ')[0];
        }
        setUser(usuarioLogado ? usuarioLogado : null)
        if(user) setMenuMobile(false);
    }

    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        getUser()
    }, [width])


    const handleShow = () => {
        setModalShow(!modalShow)
    }

    const openMenu = () => {
        setMenuMobile(!menuMobile);
    }
    return (
        <>
            <ModalLoginFuncionario
                show={modalShow}
                onHide={() => {
                    getUser();
                    setModalShow(false);
                }}
            ></ModalLoginFuncionario>
            <div className={menuMobile && width < 500 ? 'open header' : 'header'}>
                <div className={menuMobile && width < 500 ? ' open menuMob' : 'menuMob'}>
                    <nav>
                        <ul id="navegacao">
                            <li>
                                <Button variant="primary" onClick={handleShow}>
                                    {!user && <span>Funcionários</span>}
                                    {user && <span>{user.nome}</span>}
                                </Button>
                            </li>
                            <li><Button variant="primary" className="outline">Empresa</Button></li>
                        </ul>
                    </nav>
                </div>
                <Container className="container">
                    <div>
                        <Link to="/">
                            <img src={Logo} className="logo" alt="Clubei - O clube de beneficios que você precisa" />
                        </Link>
                    </div>
                    <div>
                        {width < 500 &&
                            <Button className="hamburger" variant='btn' onClick={openMenu}>
                                {!menuMobile && <Menu />}
                                {menuMobile && <X />}
                            </Button>
                        }
                        {width > 500 &&
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
                        }
                    </div>
                </Container>
            </div>
        </>
    )

}

export default Header
