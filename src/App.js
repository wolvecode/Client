import React, { useState } from 'react'
import { render } from 'react-dom'
import Search from './components/Search'
import Logo from './components/Logo'
import Loading from './components/Loading'
import Todo from './components/Todos'

import {
  getAllTodo,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
} from './utils/requests'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { todos: todo.push(todos), currentodo: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      todos: null,
      loading: true,
      currentTodo: ''
    }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.currenTodo.length) {
      return
    }
    const newTodo = {
      currentodo: this.state.currenTodo
    }
    this.setState(state => ({
      todos: state.todos.concat(newTodo),
      currenTodo: ''
    }))
  }
  // handleChange(e) {
  //   this.setState({ text: e.target.value });
  // }

  componentDidMount() {
    getAllTodo()
      .then(({ data }) =>
        this.setState({
          todos: data,
          loading: false
        })
      )
      .catch(console.error)
  }
  render() {
    const { todos, loading } = this.state
    return (
      <div className="container mt-5">
        <Logo />
        <Search update={this.update} currentTodo={this.state.update} />
        {!todos && loading ? <Loading /> : <Todo todos={todos} />}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
