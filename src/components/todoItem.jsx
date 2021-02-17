import React, { useContext } from 'react'
import TodoContext from '../context/todo/context'

const TodoItem = ({ data }) => {
  const { removeTodo, toggleTodo } = useContext(TodoContext)
  const handleEvent = () => {
    removeTodo(data.id, data.date)
  }
  const handleOnChange = (e) => {
    toggleTodo(data.id, data.date)
  }

  return (
    <div className="todo_item">
      <div className="todo_item_body">
        <input
          type="checkbox"
          name=""
          checked={data.isDone}
          id={data.id}
          onChange={handleOnChange}
        />
        <label htmlFor={data.id}>{data.title}</label>
      </div>
      <button onClick={handleEvent}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}
export default TodoItem
