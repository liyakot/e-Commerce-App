import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state, action) => {
      state.open = action.payload;
    },
    closeDrawer: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
