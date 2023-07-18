import react, { useState } from 'react'

import './Tecnologias.scss'

const Tecnologias = props => {
    
    return (
        <li onClick={() => props.filter(props.category)}> 
            {props.name}
        </li>
    )
}

export default Tecnologias