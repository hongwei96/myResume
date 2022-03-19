import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import CV from '../../resources/HongWei-CV.pdf';
import ProfileImg from '../../resources/background-texture.jpg'

import './home.css';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><BsGithub /></a>
        </div>
    )
}

const Home = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Hong Wei</h1>
                <h5 className='text-light'>Software Engineer</h5>

                <CTA />
                <HeaderSocials />

                <div className="my-profile-image">
                    <img src={ProfileImg} alt=""></img>
                </div>

                <a href="#contact" className='scroll__down'> Scroll Down </a>
            </div>
        </header>
    )
}

export default Home;