import { createSlice } from "@reduxjs/toolkit";
import { MainState } from "../../types/global";

const initialState: MainState = {
  activeTab: "employees",
  stopTimer: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setStopTimer: (state, action) => {
      state.stopTimer = action.payload;
    },
  },
});

export const { setActiveTab, setStopTimer } = mainSlice.actions;
export default mainSlice.reducer;
