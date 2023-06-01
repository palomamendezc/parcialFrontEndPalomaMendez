import React from 'react';
import "../styles/CardStyle.css";

const Card = (props) => {
return (
    <div className='card'>
    <p>Hola {props.name}</p>
    <p>Sabemos que tu color favorito es: </p>
    <p>{props.colors}</p>
    </div>
)
}
    export default Card
