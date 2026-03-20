import react from 'react';

import './About.scss'

import Buttons from './Buttons/Buttons'
import Title from '../Title/Title'

const About = props => {

    return (

        <section className="Sobre">

            <img src="./../img/danilo01.png" alt="" />

            <div>

                <Title title="Sobre" />

                <p>
                    Olá! Sou um Desenvolvedor Front-End, formado pela FATEC Santos, com paixão por criar interfaces dinâmicas, funcionais e atraentes para web. Minha missão é transformar ideias em experiências digitais que encantam e entregam valor.
                </p>  
                <p>
                    Com uma sólida experiência em tecnologias modernas, domino ferramentas e linguagens como React, JavaScript, HTML, CSS, SASS e Bootstrap. Além disso, possuo expertise em design e desenvolvimento com Elementor PRO, o que me permite construir sites personalizados e altamente otimizados no WordPress.
                </p>
                <p>    
                    Valorizo a atenção aos detalhes, buscando sempre estar atualizado com as melhores práticas e tendências do mercado. Seja para projetos corporativos, startups ou iniciativas pessoais, estou preparado para entregar soluções eficientes e criativas.
                </p>
                <p>    
                    Vamos criar algo incrível juntos?
                </p>

                <div className="Buttons Scroll">
                    <Buttons buttonTitle="DOWNLOAD CV" href="./../arquivos/CURRICULO - DANILO GOMES.pdf" 
                        donwload target="_blank" />
                    <Buttons buttonTitle="Portfolio" href="#Portfolio" />
                </div>

            </div>

        </section>

    )

}

export default About