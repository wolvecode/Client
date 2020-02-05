import React, { useState } from 'react'

export default function Todo({ todos, updateTask }) {
  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <ul className="list-group">
          {todos.map(({ _id, done, title }) => {
            return (
              <li
                onClick={() => updateTask(_id, !done)}
                className={`list-group-item ${done ? 'text-primary' : ''}`}
                key={_id}
              >
                {title}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
