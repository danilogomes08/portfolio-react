import react from 'react';

import './Skill.scss'

import Title from '../Title/Title';
import Skills from './Skills/Skills'

import Elementor from '../../img/elementor.png'
import Woo from '../../img/woo.png'
import HTML from '../../img/html.png'
import CSS from '../../img/css.png'
import JS from '../../img/js.png'
import React from '../../img/react.png'
import Bootstrap from '../../img/bootstrap.png'
import SASS from '../../img/sass.png'


const Skill = props => {

    return (
        <section className="Skills">

            <Title title="Habilidades" />

            <div className="Habilidades">
                <Skills skill="Elementor" img={Elementor} />
                <Skills skill="WooCommerce" img={Woo} />
                <Skills skill="HTML" img={HTML} />
                <Skills skill="CSS" img={CSS} />
            </div>

            <div className="Habilidades">
                <Skills skill="JavaScript" img={JS} />
                <Skills skill="React" img={React} />
                <Skills skill="Bootstrap" img={Bootstrap} />
                <Skills skill="SASS" img={SASS} />
            </div>
      
        </section>
    )

}

export default Skill