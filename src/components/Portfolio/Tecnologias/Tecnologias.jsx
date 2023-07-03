import react from 'react'

import './Tecnologias.scss'

const Tecnologias = props => {

    return (
        <li className={props.classe} data-filter={props.filter}> 
            {props.tecnologia}
        </li>
    )
}

export default Tecnologias