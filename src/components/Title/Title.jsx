import react from 'react';

const Title = props => {

    return (
        <div>
            <h2> {props.title} </h2>
            <div className="linha-vertical"></div>
        </div>
    )
    
}

export default Title