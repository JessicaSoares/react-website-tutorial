import React from 'react'
import {Button} from './Button';
import './Footer.css'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Aproveite nossa newsletter para receber maiores detalhes
                </p>

                <p className="footer-subscription-text" >
                    você pode se inscrever a qualquer momento
                </p>
                <div className='input-areas'>
                    <form>
                       <input type="email" name="email" placeholder= "seu email "className="footer-input"/>
                    <Button buttonStyle = 'btn--outline'>Inscrever </Button>
                    </form>
                    </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2> Sobre nós </h2>
                        <Link to="/sign-up"> Como funciona</Link>
                        <Link to="/sign-up"> Como funciona</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Sobre nós </h2>
                        <Link to="/sign-up"> Como funciona</Link>
                        <Link to="/sign-up"> Como funciona</Link>
                    </div>
                    </div>
                    <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2> Sobre nós </h2>
                        <Link to="/sign-up"> Como funciona</Link>
                        <Link to="/sign-up"> Como funciona</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Sobre nós </h2>
                        <Link to="/sign-up"> Como funciona</Link>
                        <Link to="/sign-up"> Como funciona</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/"className="social-logo">
                         TRVL <i className="fan fa-typo3"></i>
                        </Link> 
                    </div>
                    <small className="website-right">TRVL </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to ="/" >
                            <i className="fab fa-facebook"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;

