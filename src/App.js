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

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      todos: null,
      loading: true,
      currentTodo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(value) {
    addTodo(value).then(todo =>
      this.setState({
        todos: [todo, ...this.state.todos]
      })
    )
  }

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
        <Search onSubmit={this.handleSubmit} />
        {!todos && loading ? <Loading /> : <Todo todos={todos} />}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
