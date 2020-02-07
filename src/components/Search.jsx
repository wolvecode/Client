import React, { useState } from 'react'

export default function Search({ onSubmit }) {
  const [state, setState] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(state)
    setState('')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a Todo..."
              onChange={e => setState(e.target.value)}
              value={state}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
