import react from 'react'

import './Contato.scss'

import Title from '../Title/Title'
import Social from './Social/Social'


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

                    <Social link="https://www.linkedin.com/in/danilo-gms/" alt="" img="../../img/linkedin.png" />
                    <Social link="https://github.com/danilogomes08" alt="" img="../../img/github.png" />
                    <Social link="https://bit.ly/3foG2j4" alt="" img='../../img/whatsapp.png' />
                    <Social link="mailto:danilo.dsgomes@gmail.com" alt="" img='../../img/e-mail.png' />

                </div>
            </div>

        </section>

    )
}

export default Contato