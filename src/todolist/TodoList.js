import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleDone, deleteTodo } from "../features/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nội dung công việc"
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleDone(todo.id))}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
