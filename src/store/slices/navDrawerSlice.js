import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, collapseList: [] };

export const navDrawerSlice = createSlice({
    name: "navDrawer",
    initialState,
    reducers: {
        openNavDrawer: state => { state.isOpen = true },
        closeNavDrawer: state => { state.isOpen = false },
        addCollapse: (state, action) => { state.collapseList = action.payload }
    },
});

export const { openNavDrawer, closeNavDrawer, addCollapse } = navDrawerSlice.actions;

export default navDrawerSlice.reducer;
