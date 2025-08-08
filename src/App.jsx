import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Navbar from './components/navbar';

function App() {
  const todos = useSelector(state => state.todos.todos);
  const completedCount = todos.filter(todo => todo.isCompleted).length;
  const totalCount = todos.length;

  return (
   
    <div className="min-h-screen bg-gray-100 pt-0 pb-8">
      <Navbar/>
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 ToDo App
          </h1>
          <p className="text-gray-600">
            Manage your tasks with  my redux 
          </p>
          {totalCount > 0 && (
            <div className="mt-4 text-sm text-gray-500">
              {completedCount} of {totalCount} tasks completed
            </div>
          )}
        </header>

        <main className="bg-white rounded-lg shadow-lg p-6">
          <TodoInput />
          <TodoList />
        </main>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Made with react js by MUHAMMED MUFAZ VK @TSO4</p>
        </footer>
      </div>
    </div>
  );
}

export default App;