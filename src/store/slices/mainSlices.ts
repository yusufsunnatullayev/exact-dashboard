import { createSlice } from "@reduxjs/toolkit";
import { MainState } from "../../types/global";

const initialState: MainState = {
	activeTab: "employees",
};

const mainSlice = createSlice({
	name: "main",
	initialState,
	reducers: {
		setActiveTab: (state, action) => {
			state.activeTab = action.payload;
		},
	},
});

export const { setActiveTab } = mainSlice.actions;
export default mainSlice.reducer;
