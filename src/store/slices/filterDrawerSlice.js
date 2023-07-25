import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    drawerItems: [],
    drawerCollapse: []
};

export const filterDrawerSlice = createSlice({
    name: "filterDrawer",
    initialState,
    reducers: {
        openDrawer: state => { state.isOpen = true },
        closeDrawer: state => { state.isOpen = false },
        addSpecialty: (state, action) => { state.drawerItems = action.payload },
        addCollapse: (state, action) => { state.drawerCollapse = action.payload },
        clearFilter: state => { state.drawerItems = [] }
    },
});

export const { openDrawer, closeDrawer, addSpecialty, addCollapse, clearFilter } = filterDrawerSlice.actions;

export default filterDrawerSlice.reducer;
