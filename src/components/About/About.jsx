import react from 'react';

import imgAbout from '../../img/danilo01.png'

import './About.scss'

import Buttons from './Buttons/Buttons'
import Title from '../Title/Title'

const About = props => {

    return (

        <section className="Sobre">

            <img src={imgAbout} alt="" />

            <div>

                <Title title="Sobre" />

                <p>
                    Olá, me chamo Danilo tenho 29 anos e moro na cidade de Guarujá/SP, 
                    sou formato em Sistemas para Internet pela Fatec Rubens Lara (Fatec Santos).
                    Atualmente estudo com desenvolvimento front end, e futuramente iniciar com desenvolvimento mobile.

                </p>

                <div className="Buttons Scroll">
                    <Buttons buttonTitle="DOWNLOAD CV" href="#" donwload />
                    <Buttons buttonTitle="Portfolio" href="#" />
                </div>

            </div>

        </section>

    )

}

export default About