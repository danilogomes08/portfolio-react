import react from 'react'

const Social = props => {

    return (

        <a href={props.link} target="_blank">
            <img src={props.diretorio} alt={props.alt} />
        </a>

    )

}

export default Social