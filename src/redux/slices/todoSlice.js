
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  nextId: 1
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: state.nextId,
        task: action.payload,
        isCompleted: false
      });
      state.nextId++;
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTask: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.newTask;
      }
    },
    completeTask: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    }
  }
});

export const { addTask, removeTask, editTask, completeTask } = todoSlice.actions;
export default todoSlice.reducer;
