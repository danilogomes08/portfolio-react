import react, { useState } from 'react'

import './Portfolio.scss'

import Title from '../Title/Title'
import Tecnologias from './Tecnologias/Tecnologias'

import projects from '../projects'

const Portfolio = props => {

    const [itens, setItens] = useState(projects)

    const filterItem = (category) => {
        const filter = projects.filter((element) => {
            return element.category === category;
        })
        setItens(filter)
    }

    const AllItens = () => {
        setItens(projects)
    }

      return (

        <section className="Portfolio" id="Portfolio">
            
            <Title title="Portfolio" />

            <div>
                <ul>
                    <Tecnologias filter={AllItens} name="Todos"/>
                    <Tecnologias filter={filterItem} category="elementor" name="Elementor"/>
                    <Tecnologias filter={filterItem} category="hcj" name="HTML/CSS/JavaScript"/>
                    <Tecnologias filter={filterItem} category="bootstrap" name="Bootstrap"/>
                    <Tecnologias filter={filterItem} category="sass" name="SASS"/>
                    <Tecnologias filter={filterItem} category="reactJS" name="ReactJS"/>
                </ul>
                <div className="Tecnologias">

                    {
                        itens.map((item) => {

                        return (
                            <div className="ItemBox" key={item.id}>
                                <a href={item.projetoLink} target="_blank">
                                    <img src={item.image} />
                                </a>
                                    <br />
                                {item.codigoLink ? <span> <a href={item.codigoLink} target="_blank"> código</a> | </span> : false}       
                                <a href={item.projetoLink} target="_blank">página </a> 
                            </div>
                        )

                        })
                    }

                </div>
            </div>

        </section>

    )
}
 
export default Portfolio
