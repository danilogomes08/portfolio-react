import react from 'react'

import './Portfolio.scss'

import Title from '../Title/Title'
import Tecnologias from './Tecnologias/Tecnologias'
import Projetos from './Projetos/Projetos'

import PokedexV2 from '../../img/logo-pokemonV2.png'
import HomeDefence from '../../img/home-defense.png'
import TropaAguias from '../../img/tropa-logo.png'
import ATropa from '../../img/rick-logo.png'
import Espiritualidade from '../../img/espiritualidade-plena.png'
import ChakraOlho from '../../img/chakra-olho.png'
import Carvalho from '../../img/cn-logo.png'
import Katy from '../../img/logo-katy.png'
import Plexo from '../../img/plexo-solar.png'
import ChakraRaiz from '../../img/chakra-raiz.png'
import Alpinista from '../../img/logo-alpinista.png'
import Couldbuilder from '../../img/logo-couldbuilder.png'
import Cozy from '../../img/logo-cozy.png'
import Interact from '../../img/logo-interact.png'
import Medidove from '../../img/logo-medidove.png'
import Weather from '../../img/logo-open.png'
import Econverse from '../../img/econverse.png'
import Pokemon from '../../img/logo-pokemon.png'
import Semana3Saudes from '../../img/logo-semana3saudes.png'
import Softwerk from '../../img/logo-softwerk.png'
import Els from '../../img/logo-els.png'
import Meditacao from '../../img/logo-meditacao.png'

const Portfolio = props => {
    return (

        <section className="Portfolio">
            
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
                <div className="Tecnologias">

                    <Projetos item="reactJS" 
                        projetoLink="https://github.com/danilogomes08/portfolio-react/" 
                        diretorio="" alt="" 
                        codigoLink="https://github.com/danilogomes08/portfolio-react"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://pokedexv2-lake.vercel.app/" 
                        diretorio={PokedexV2}  alt="" 
                        codigoLink="https://github.com/danilogomes08/pokedexv2"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://marceloesperandio.com.br/taticas/" 
                        diretorio={HomeDefence} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://rickchesther.com.br/aguias/" 
                        diretorio={TropaAguias} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://rickchesther.com.br/" 
                        diretorio={ATropa} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/espiritualidade-plena" 
                        diretorio={Espiritualidade} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/chakra/" 
                        diretorio={ChakraOlho} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://carvalhonascimento.adv.br/" 
                        diretorio={Carvalho} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://katylessons.com.br" 
                        diretorio={Katy} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/plexo-solar" 
                        diretorio={Plexo} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/chakra-raiz/" 
                        diretorio={ChakraRaiz} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/espiritualidade-pratica" 
                        diretorio={Alpinista} alt="" 
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/cobuild/" 
                        diretorio={Couldbuilder} alt="" 
                        codigoLink="https://github.com/danilogomes08/cobuild"
                    />

                    <Projetos item="sass" 
                        projetoLink="https://danilogomes08.github.io/cozy-house/" 
                        diretorio={Cozy} alt="" 
                        codigoLink="https://github.com/danilogomes08/cozy-house"
                    />

                    <Projetos item="bootstrap" 
                        projetoLink="https://danilogomes08.github.io/Interact/" 
                        diretorio={Interact} alt="" 
                        codigoLink="https://github.com/danilogomes08/Interact"
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/medidove/" 
                        diretorio={Medidove} alt="" 
                        codigoLink="https://github.com/danilogomes08/medidove"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://danilogomes08.github.io/weather/" 
                        diretorio={Weather} alt="" 
                        codigoLink="https://github.com/danilogomes08/weather"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://teste-front-end-jr-seven.vercel.app/" 
                        diretorio={Econverse} alt="" 
                        codigoLink="https://github.com/danilogomes08/teste-front-end-jr"
                    />

                    <Projetos item="reactJS" 
                        projetoLink="https://danilogomes08.github.io/pokedex/" 
                        diretorio={Pokemon} alt="" 
                        codigoLink="https://github.com/danilogomes08/pokedex"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/semana-das-saudes-org/" 
                        diretorio={Semana3Saudes} alt=""
                    />

                    <Projetos item="hcj" 
                        projetoLink="https://danilogomes08.github.io/softwerk/" 
                        diretorio={Softwerk} alt="" 
                        codigoLink="https://github.com/danilogomes08/softwerk"
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://lp.elsprime.com.br/" 
                        diretorio={Els} alt="" 
                    />

                    <Projetos item="elementor" 
                        projetoLink="https://americobarbosa.com.br/semana-meditacao-org/" 
                        diretorio={Meditacao} alt="" 
                    />
                </div>
            </div>

        </section>

    )
}
 
export default Portfolio
