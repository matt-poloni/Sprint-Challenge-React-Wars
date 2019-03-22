import React from 'react';

const Char = props => {
  return (
    <li className="Char">
      <h2 className="char-name">{props.item.name}</h2>
      <p><span className="data-key">Height: </span>{props.item.height}</p>
      <p><span className="data-key">Mass: </span>{props.item.mass}</p>
      <p><span className="data-key">Hair Color: </span>{props.item.hair_color}</p>
      <p><span className="data-key">Skin Color: </span>{props.item.skin_color}</p>
      <p><span className="data-key">Eye Color: </span>{props.item.eye_color}</p>
      <p><span className="data-key">Birth Year: </span>{props.item.birth_year}</p>
      <p><span className="data-key">Gender: </span>{props.item.gender}</p>
    </li>
  )
}

export default Char;