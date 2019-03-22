import React from 'react';
import Char from './Char';
import './StarWars.css';

const CharList = props => {
  return (
    <ul>
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