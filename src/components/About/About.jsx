import react from 'react';

import Buttons from './Buttons/Buttons'

const About = props => {

    return (

        <section className="container" id="sobre">

            <img src={props.img} alt={props.alt} width="350px" />

            <div>
                <h2>Sobre</h2>

                <div class="linha-vertical"></div>

                <p>
                    Olá, me chamo Danilo tenho 29 anos e moro na cidade de Guarujá/SP, 
                    sou formato em Sistemas para Internet pela Fatec Rubens Lara (Fatec Santos).
                    Atualmente estudo com desenvolvimento front end, e futuramente iniciar com desenvolvimento mobile.

                </p>

                <div className="buttons scroll">
                    <Buttons buttonTitle="DOWNLOAD CV" href="#" donwload />
                    <Buttons buttonTitle="Portfolio" href="#" />
                </div>

            </div>

        </section>

    )

}

export default About