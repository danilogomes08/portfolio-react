import react from 'react';

import './Buttons.scss'

const Buttons = props => {

    return (
        <a href={props.href} target={props.target}>
            {props.buttonTitle}
        </a> 
    )

}

export default Buttons