const baseURL = 'http://127.0.0.1:4000'

exports.getAllTodo = () => {
  return fetch(baseURL).then(res => res.json())
}

exports.addTodo = title => {
  const data = { title }
  return fetch(baseURL, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

exports.getTodo = () => {
  return fetch(baseURL + 'todo' + id).then(res.json())
}

exports.updateTodo = (id, status) => {
  return fetch(`${baseURL}/todo/${id}`, {
    method: 'put',
    body: JSON.stringify({ done: status }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

exports.deleteTodo = index => {
  const _id = { index }
  return fetch(baseURL + '/todo/' + _id).then(res => res.json())
}
