
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(state => state.todos.todos);

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-lg">No tasks yet!</p>
        <p className="text-sm">Add your first task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Your Tasks ({todos.length})
      </h2>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
