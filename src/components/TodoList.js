import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div className="container">
          <table className='tableStyle'>
            <thead>
              <tr>
                <th>Todo Name</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              ))}
            </tbody>
          </table>
        </div>
      )
}

export default TodoList
