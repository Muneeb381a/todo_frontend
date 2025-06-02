import React, { useEffect, useState } from "react";
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../app/service/api";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res?.data?.data || []);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!input.trim()) return;
    const res = await createTodos(input);
    setTodos([...todos, res?.data?.data]);
    setInput("");
  };

  const handleToggle = async (todo) => {
    const res = await updateTodos(todo.id, !todo.completed);
    setTodos(todos.map((t) => (t.id === todo.id ? res?.data?.data : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodos(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">
          📝 My Todo List
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-grow border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-50 border rounded shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo)}
                  className="h-5 w-5"
                />
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  } text-lg`}
                >
                  {todo.title}
                </span>
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
