import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
};

export default TodoItem;