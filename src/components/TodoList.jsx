import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-red-500 to-blue-400">
      <div className="h-100 bg-slate-300 w-100 p-5 rounded-lg shadow-xl">
        <h1 className="p-5 text-center font-bold text-3xl">Todo List</h1>
        <div className="flex justify-center p-5">
          <input
            type="text"
            placeholder="Type....."
            className="p-2 mr-2 rounded-lg h-10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-2 bg-blue-600 rounded-lg text-white h-10 hover:bg-blue-800"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex p-5 items-center bg-slate-200 m-4 rounded-xl"
            >
              <input
                className="mr-2 h-5 w-5 text-blue-600"
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <span
                className={`flex-grow ${
                  todo.completed
                    ? "text-gray-500 line-through"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <button
                className="p-2 bg-red-500 rounded-xl text-white hover:bg-red-700"
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
