import react from 'react';

import Title from '../Title/Title';
import Skills from './Skills/Skills'

const Skill = props => {

    return (
        <section className="container" id="habilidades">

            <Title title="Habilidades" />

            <div className="habilidades">
                <Skills skill="Elementor" />
                <Skills skill="WooCommerce" />
                <Skills skill="HTML" />
                <Skills skill="CSS" />
            </div>

            <div className="habilidades">
                <Skills skill="JavaScript" />
                <Skills skill="React" />
                <Skills skill="Bootstrap" />
                <Skills skill="SASS" />
            </div>
      
        </section>
    )

}

export default Skill