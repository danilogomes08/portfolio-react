import react from 'react'

import './Jobs.scss'

import Title from '../Title/Title'

const Jobs = props => {

    return (

        <section className="Jobs">

            <Title title="Serviços " />

            <div className="Servicos">
   
                <div>
                    <img src='../../img/front.png' alt="" />
                    <h3>Desenvolvimento</h3>
                    <p>Desenvolvimento e manutenção de sites institucionais,
                    portfólios, e-commerce e landing pages.</p>
                </div>
            </div>

        </section>
    )
}

export default Jobs