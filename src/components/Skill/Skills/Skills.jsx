import react from 'react'

import './Skills.scss'

const Skils = props => {

    return (
        <div>
            <img src={props.img} alt={props.alt} />
            <h3>{props.skill}</h3>
        </div>
    )

}

export default Skils