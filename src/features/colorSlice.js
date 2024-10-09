import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'colors',
  initialState: {
    currentColor: '',
    colorHistory: [],
  },
  reducers: {
    changeColor: (state) => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      state.currentColor = randomColor;
      state.colorHistory.push(randomColor);
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
