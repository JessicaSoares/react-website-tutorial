import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>AVENTURA E EMOÇÃO</h1>
            <p>O que você está esperando ?</p>
            <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn--outline" buttonSize='btn-large'>COMEÇAR 
            </Button>

            <Button className="btns" buttonStyle="btn--primary" buttonSize='btn-large'>VER TRAILER 
            <i className="farf fa-play-cicle"/>
            </Button>
            </div>
        </div>
    );
}

export default HeroSection;

