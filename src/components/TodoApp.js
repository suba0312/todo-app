import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    fetchDummyData();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const fetchDummyData = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), todo: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  })

  return (
    <div>
      <div className="todoContainer">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <Filter setFilter={setFilter} />
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
