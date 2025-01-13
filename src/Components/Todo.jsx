import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null); 
    } else {
      setTodos([...todos, input]);
    }
    setInput(''); 
    };
    

  const handleEdit = (index) => {
    setInput(todos[index]); 
    setEditIndex(index); 
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); 
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1 w-full"
          placeholder="Enter todo"
        />
        <button
          onClick={handleAdd}
          className="px-3 py-1 text-sm bg-neutral-500 text-white rounded-md"
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded"
          >
            <span className="text-base">{todo}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-3 py-1 text-sm bg-neutral-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-1 text-sm bg-neutral-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
