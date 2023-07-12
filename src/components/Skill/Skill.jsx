import react from 'react';

import './Skill.scss'

import Title from '../Title/Title';
import Skills from './Skills/Skills'

const Skill = props => {

    return (
        <section className="Skills">

            <Title title="Habilidades" />

            <div className="Habilidades">
                <Skills skill="Elementor" img='../../img/elementor.png' />
                <Skills skill="WooCommerce" img='../../img/woo.png' />
                <Skills skill="HTML" img='../../img/html.png' />
                <Skills skill="CSS" img='../../img/css.png' />
            </div>

            <div className="Habilidades">
                <Skills skill="JavaScript" img='../../img/js.png' />
                <Skills skill="React" img='../../img/react.png' />
                <Skills skill="Bootstrap" img='../../img/bootstrap.png' />
                <Skills skill="SASS" img='../../img/sass.png' />
            </div>
      
        </section>
    )

}

export default Skill