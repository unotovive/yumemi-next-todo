import React from 'react';
import HelloWorld from '../styles/HelloWorld';

export default props => {
  let helloWorlds = [];

  for (let i = 0; i < props.count; i++) {
    helloWorlds.push(<HelloWorld />)
  }

  return (
    <>
      {helloWorlds}
    </>
  )
}