import react from 'react'

import './Contato.scss'

import Title from '../Title/Title'
import Social from './Social/Social'

import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png'
import Whatsapp from '../../img/whatsapp.png'
import Email from '../../img/e-mail.png'


const Contato = props => {

    return (

        <section className="Contato">

            <Title title="Contato"/>

            <div className="Contatos">
                <div>
                    <p>Telefone: 
                        <a href="tel:13988630326" target="_blank"> 13988630326</a>
                    </p>
        
                    <p>
                        E-mail: danilo.dsgomes@gmail.com
                    </p>
                </div>
                <div className="Redessocial">

                    <Social link="https://www.linkedin.com/in/danilo-gms/" alt="" diretorio={Linkedin} />
                    <Social link="https://github.com/danilogomes08" alt="" diretorio={Github} />
                    <Social link="https://bit.ly/3foG2j4" alt="" diretorio={Whatsapp} />
                    <Social link="mailto:danilo.dsgomes@gmail.com" alt="" diretorio={Email} />

                </div>
            </div>

        </section>

    )
}

export default Contato