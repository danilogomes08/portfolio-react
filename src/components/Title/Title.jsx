import react from 'react';

import './Title.scss'

const Title = props => {

    return (
        <div>
            <h2> {props.title} </h2>
            <div className="Linha-vertical"></div>
        </div>
    )
}

export default Title