import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    drawerItems: [
        {
            id: 1, label: 'Especialidad', isOpen: false, subspecialties: [
                { id: 1, label: 'Sub - especialidad', isSelected: false },
                { id: 2, label: 'Sub - especialidad', isSelected: false },
                { id: 3, label: 'Sub - especialidad', isSelected: false },
                { id: 4, label: 'Sub - especialidad', isSelected: false }
            ]
        },
        {
            id: 2, label: 'Especialidad', isOpen: false, subspecialties: [
                { id: 1, label: 'Sub - especialidad', isSelected: false },
                { id: 2, label: 'Sub - especialidad', isSelected: false },
                { id: 3, label: 'Sub - especialidad', isSelected: false },
                { id: 4, label: 'Sub - especialidad', isSelected: false }
            ]
        },
        {
            id: 3, label: 'Especialidad', isOpen: false, subspecialties: [
                { id: 1, label: 'Sub - especialidad', isSelected: false },
                { id: 2, label: 'Sub - especialidad', isSelected: false },
                { id: 3, label: 'Sub - especialidad', isSelected: false },
                { id: 4, label: 'Sub - especialidad', isSelected: false }
            ]
        },
        {
            id: 4, label: 'Especialidad', isOpen: false, subspecialties: [
                { id: 1, label: 'Sub - especialidad', isSelected: false },
                { id: 2, label: 'Sub - especialidad', isSelected: false },
                { id: 3, label: 'Sub - especialidad', isSelected: false },
                { id: 4, label: 'Sub - especialidad', isSelected: false }
            ]
        },
    ]
};

export const filterDrawerSlice = createSlice({
    name: "filterDrawer",
    initialState,
    reducers: {
        openDrawer: state => { state.isOpen = true },
        closeDrawer: state => { state.isOpen = false },
    },
});

export const { openDrawer, closeDrawer, selectCheckbox } = filterDrawerSlice.actions;

export default filterDrawerSlice.reducer;
