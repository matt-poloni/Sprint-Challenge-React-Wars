import React from 'react';

const PageNav = props => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default PageNav;