import react from 'react'

import './Projetos.scss'

const Projetos = props => {

    return (
        <div className="ItemBox" data-item={props.item}>
            <a href={props.projetoLink} target="_blank">
                <img src={props.diretorio} alt={props.alt} />
            </a>
            <br />
             {props.codigoLink ? <span> <a href={props.codigoLink} target="_blank"> código</a> | </span> : false}       
            <a href={props.projetoLink} target="_blank">página </a>
        </div>
    )
}

export default Projetos