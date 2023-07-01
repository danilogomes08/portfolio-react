import react from 'react'
import Title from '../Title/Title'
import Social from './Social/Social'

const Contato = props => {

    return (

        <section id="contato" className="container">

            <Title />

            <div class="contato">
                <div>
                    <p>Telefone
                        <a href="tel:13988630326" target="_blank">13988630326</a>
                    </p>
        
                    <p>
                        E-mail: danilo.dsgomes@gmail.com
                    </p>
                </div>
                <div class="redessocial">

                    <Social link="https://www.linkedin.com/in/danilo-gms/" alt="" diretorio="" />
                    <Social link="https://github.com/danilogomes08" alt="" diretorio="" />
                    <Social link="https://bit.ly/3foG2j4" alt="" diretorio="" />
                    <Social link="mailto:danilo.dsgomes@gmail.com" alt="" diretorio="" />

                </div>
            </div>

        </section>

    )
}

export default Contato