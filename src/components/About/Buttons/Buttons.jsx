import react from 'react';

const Buttons = props => {

    return (
        <a href={props.href}>
            {props.buttonTitle}
        </a> 
    )

}

export default Buttons