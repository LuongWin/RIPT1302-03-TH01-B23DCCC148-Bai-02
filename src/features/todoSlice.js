import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, text: 'jkzvnx,vmcxvc', done: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: state.length + 1, text: action.payload, done: false });
    },
    toggleDone: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleDone, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
