import React from 'react'
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <tr>
          <td style={{ color: todo.completed ? '#18e218' : '#161816' }}>
            {todo.todo}
          </td>
          <td>
            <button onClick={() => toggleTodo(todo.id)} className='iconStyle'>
              {todo.completed ? <FaTimes title="Mark as Incomplete" /> : <FaCheck title="Mark as Complete" />}
            </button>
          </td>
          <td>
            <button onClick={() => deleteTodo(todo.id)} className='iconStyle'>
              <FaTrash title="Delete Task" />
            </button>
          </td>
        </tr>
      )
}

export default TodoItem
