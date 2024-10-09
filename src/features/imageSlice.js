import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'images',
  initialState: [
    "https://via.placeholder.com/150/0000FF/808080",
    "https://via.placeholder.com/150/FF0000/FFFFFF",
    "https://via.placeholder.com/150/FFFF00/000000",
    "https://via.placeholder.com/150/00FF00/000000",
    "https://via.placeholder.com/150/FF00FF/000000",
  ],
  reducers: {},
});

export default imageSlice.reducer;
