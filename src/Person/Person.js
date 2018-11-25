import React from 'react'

import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
