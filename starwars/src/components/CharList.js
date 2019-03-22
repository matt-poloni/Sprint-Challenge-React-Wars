import React from 'react';
import Char from './Char';
import './StarWars.css';

const CharList = props => {
  return (
    <ul className="CharList">
      {props.list.map((char, i) => (
        <Char
          key={i}
          item={char}
        />
      ))}
    </ul>
  )
}

export default CharList;