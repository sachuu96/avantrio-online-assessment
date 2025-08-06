import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const idx = state.findIndex((t) => t._id === action.payload._id);
      if (idx !== -1) state[idx] = action.payload;
    },
  },
});

export const { setTasks, addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
