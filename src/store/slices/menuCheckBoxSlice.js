import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    specialityAndSubspeciality: [],
};

export const menuCheckBoxSlice = createSlice({
    name: "checkBoxMenu", 
    initialState,
    reducers: {
        setAddSpecialityAndSubspeciality: (state, action) => {
            state.specialityAndSubspeciality.push(action.payload)
        }
    }
});

export const { setAddSpecialityAndSubspeciality} = menuCheckBoxSlice.actions;
export default menuCheckBoxSlice.reducer;