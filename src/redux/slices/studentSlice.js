import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: [
    {
      name: "abcd",
    },
  ],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
