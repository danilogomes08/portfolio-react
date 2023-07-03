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
                <Skills skill="Elementor" imgSkill={Elementor} />
                <Skills skill="WooCommerce" imgSkill={Woo} />
                <Skills skill="HTML" imgSkill={HTML} />
                <Skills skill="CSS" imgSkill={CSS} />
            </div>

            <div className="Habilidades">
                <Skills skill="JavaScript" imgSkill={JS} />
                <Skills skill="React" imgSkill={React} />
                <Skills skill="Bootstrap" imgSkill={Bootstrap} />
                <Skills skill="SASS" imgSkill={SASS} />
            </div>
      
        </section>
    )

}

export default Skill