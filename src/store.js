import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import imageReducer from './features/imageSlice';
import colorReducer from './features/colorSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    images: imageReducer,
    colors: colorReducer,
  },
});
