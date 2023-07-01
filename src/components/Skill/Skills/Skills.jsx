import react from 'react'

const Skils = props => {

    return (
        <div>
            <img src={props.imgSkill} alt={props.alt} />
            <h3>{props.skill}</h3>
        </div>
    )

}

export default Skils