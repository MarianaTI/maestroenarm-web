import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const gameModalSlice = createSlice({
    name: 'gameModal',
    initialState,
    reducers: {
        openModal: state => {
            state.isOpen = true;
        },
        closeModal: state => {
            state.isOpen = false;
        }
    }
});

export const { openModal, closeModal } = gameModalSlice.actions;
export default gameModalSlice.reducer;