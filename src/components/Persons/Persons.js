import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('[Persons.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount ()')
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount ()')
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE Persons.js] inside componentWillReceiveProps()',
      nextProps
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] inside shouldComponentUpdate',
      nextProps,
      nextState
    )
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    )
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] inside ComponentWillUpdate',
      nextProps,
      nextState
    )
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside ComponentDidUpdate')
  }

  render() {
    console.log('[Persons.js] inside render()')

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          key={person.id}
        />
      )
    })
  }
}

export default Persons
