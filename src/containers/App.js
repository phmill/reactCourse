import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] inside constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount ()')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount ()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] inside shouldComponentUpdate',
      nextProps,
      nextState
    )
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
    )
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] inside ComponentWillUpdate',
      nextProps,
      nextState
    )
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside ComponentDidUpdate')
  }

  state = {
    persons: [
      { id: 'sx', name: 'Phil', age: 56 },
      { id: 'dx', name: 'Mill', age: 28 },
      { id: 'fx', name: 'Françoise', age: 26 },
    ],
    showPersons: false,
  }

  switchNameHandler = newName => {
    // console.log('Was clicked!')
    this.setState({
      persons: [
        { id: 'sx', name: newName, age: 56 },
        { id: 'dx', name: 'Mill', age: 28 },
        { id: 'fx', name: 'Françoise', age: 28 },
      ],
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }
    // const person = Object.assign ({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]

    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log('[App.js] inside render()')

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App
