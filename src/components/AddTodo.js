import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form className="todoStyle" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">
        <FaPlus title="Add Todo" /> Add Todo
      </button>
    </form>
  )
}

export default AddTodo;
