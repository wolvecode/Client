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
  return fetch(baseURL).then(res.json())
}

exports.updateTodo = () => {
  return fetch(baseURL).then(res.json())
}

exports.deleteTodo = () => {
  return fetch(baseURL).then(res.json())
}
