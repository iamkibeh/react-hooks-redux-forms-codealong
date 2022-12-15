import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAdded } from './todosSlice'

function CreateTodo() {
  const [todo, setTodo] = useState('')
  const todos = useSelector((state) => state.todos.entities)
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(todo)
    dispatch(todoAdded(todo))
    e.target.reset()
  }
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <p>
          <label>add todo</label>
          <input type='text' onChange={(e) => setTodo(e.target.value)} />
        </p>
        <input type='submit' />
      </form>
      <div>
        {todos.map((todo, ind) => (
          <p key={ind}>{todo}</p>
        ))}
      </div>
    </div>
  )
}

export default CreateTodo
