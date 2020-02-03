import React from 'react'
import PropTypes from 'prop-types'

export default function Todo({ todos }) {
  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <ul className="list-group">
          {todos.map(todo => {
            return (
              <li className="list-group-item" key={todo._id}>
                <input type="checkbox" defaultChecked={todo.done} />{' '}
                {todo.title}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

Todo.propTypes = {
  todo : PropTypes.object.isRequire,
  title: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.number.isRequire
}
