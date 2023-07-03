import react from 'react';

import './Buttons.scss'

const Buttons = props => {

    return (
        <a href={props.href}>
            {props.buttonTitle}
        </a> 
    )

}

export default Buttons