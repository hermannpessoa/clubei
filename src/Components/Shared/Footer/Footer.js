import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoFooter from '../../../Assets/imgs/Rectangle 39.png'
import { Facebook, Instagram, Linkedin } from 'react-feather'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="containerFooter">
                    <div>
                        <img src={logoFooter} alt="clubei" />
                    </div>
                    <div className="social">
                        <div><Facebook /></div>
                        <div><Instagram /></div>
                        <div><Linkedin /></div>
                    </div>
                    <div className="menuFooter">
                        <ul>
                            <li><Link to="planos">Planos</Link></li>
                            <li><Link to="planos">Quero oferecer para meus funcionário</Link></li>
                            <li><Link to="planos">Quero vender no clubei</Link></li>
                        </ul>
                    </div>
                    <div className="copyrights">
                        <small>&copy; Todos os direitos reservados </small>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
