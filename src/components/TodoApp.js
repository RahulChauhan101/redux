import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/actions/todoActions";
import "./TodoApp.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos?.todos || []);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Redux Todo List</h1>
      <p className="todo-count"> Total Todos: {todos.length}</p>

      <div className="todo-input-group">
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="todo-text"
            >
                  {index + 1} - {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
               Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
