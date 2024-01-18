import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas Pendientes</h1>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Agregar</button>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;