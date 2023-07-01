import react from 'react'

import Title from '../Title/Title'
import Tecnologias from './Tecnologias/Tecnologias'
import Projetos from './Projetos/Projetos'

const Portfolio = props => {
    return (

        <section id="portfolio" className="portfolio">
            
            <Title title="Portfolio" />

            <div>
                <ul>
                    <Tecnologias classe="list active" filter="todos" tecnologia="Todos"/>
                    <Tecnologias classe="list" filter="elementor" tecnologia="Elementor"/>
                    <Tecnologias classe="list" filter="hcj" tecnologia="HTML/CSS/JavaScript"/>
                    <Tecnologias classe="list" filter="bootstrap" tecnologia="Bootstrap"/>
                    <Tecnologias classe="list" filter="sass" tecnologia="SASS"/>
                    <Tecnologias classe="list" filter="reactJS" tecnologia="ReactJS"/>
                </ul>
                <div className="tecnologias">

                    <Projetos item="reactJS" 
                        projetoLink="https://github.com/danilogomes08/portfolio-react/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/portfolio-react"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://pokedexv2-lake.vercel.app/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/pokedexv2"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://marceloesperandio.com.br/taticas/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://rickchesther.com.br/aguias/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://rickchesther.com.br/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/espiritualidade-plena" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/chakra/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://carvalhonascimento.adv.br/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://katylessons.com.br" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/plexo-solar" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/chakra-raiz/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/espiritualidade-pratica" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/cobuild/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/cobuild"
                    />

                    <Projetos item="sass" 
                        projetoLink="https://danilogomes08.github.io/cozy-house/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/cozy-house"
                    />

                    <Projetos item="bootstrap" 
                        projetoLink="https://danilogomes08.github.io/Interact/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/Interact"
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/medidove/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/medidove"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://danilogomes08.github.io/weather/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/weather"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://teste-front-end-jr-seven.vercel.app/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/teste-front-end-jr"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://danilogomes08.github.io/pokedex/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/pokedex"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/semana-das-saudes-org/" 
                        diretorio="" alt=""
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/softwerk/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/softwerk"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://lp.elsprime.com.br/" 
                        diretorio="" alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/semana-meditacao-org/" 
                        diretorio="" alt="" 
                    />
                </div>
            </div>

        </section>

    )
}
 
export default Portfolio
