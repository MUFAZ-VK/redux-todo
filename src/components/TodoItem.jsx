
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, editTask, completeTask } from '../redux/slices/todoSlice';

function TodoItem({ id, task, isCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTask(id));
  };

  const handleDelete = () => {
    dispatch(removeTask(id));
  };

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      dispatch(editTask({ id, newTask: editText }));
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(task);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg ${isCompleted ? 'bg-gray-50' : 'bg-white'}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleComplete}
        className="w-5 h-5 text-blue-600"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            {!isCompleted && (
              <button
                onClick={handleEdit}
                className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            )}
            <button
              onClick={handleDelete}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
