import React from 'react';

const Char = props => {
  return (
    <li className="Char">
      <h2 className="char-name">{props.item.name}</h2>
      <ul className="char-data">
        <li><span className="data-key">Height: </span>{props.item.height}{props.item.height !== 'unknown' ? ' cm' : ''}</li>
        <li><span className="data-key">Mass: </span>{props.item.mass}{props.item.mass !== 'unknown' ? ' kg' : ''}</li>
        <li><span className="data-key">Hair Color: </span>{props.item.hair_color}</li>
        <li><span className="data-key">Skin Color: </span>{props.item.skin_color}</li>
        <li><span className="data-key">Eye Color: </span>{props.item.eye_color}</li>
        <li><span className="data-key">Birth Year: </span>{props.item.birth_year}</li>
        <li><span className="data-key">Gender: </span>{props.item.gender}</li>
      </ul>
    </li>
  )
}

export default Char;