import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const gameLinkSharingModalSlice = createSlice({
    name: 'gameLinkSharingModal',
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

export const { openModal, closeModal } = gameLinkSharingModalSlice.actions;
export default gameLinkSharingModalSlice.reducer;