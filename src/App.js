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

    this.state = {
      todos: null,
      loading: true
    }

    this.updateTask = this.updateTask.bind(this)
  }

  updateTask(id, status) {
    updateTodo(id, status)
      .then(({ data }) => getAllTodo())
      .then(({ data }) => this.setState({ todos: data }))
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
        {!todos && loading ? (
          <Loading />
        ) : (
          <Todo updateTask={this.updateTask} todos={todos} />
        )}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
