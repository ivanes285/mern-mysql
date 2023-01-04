import { ITask } from "@/models/Task";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITask[] = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    alltasks: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { alltasks } = taskSlice.actions;
export default taskSlice.reducer;
