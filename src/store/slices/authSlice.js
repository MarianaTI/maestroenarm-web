import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {
        email: 'empty',
        password: 'emtpy'
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuthenticated = true
            state.user.email = action.payload.email
            state.password = action.payload.password
        },
        signOut: state => { 
            state.isAuthenticated = false 
            state.user.email = 'empty'
            state.user.password = 'empty'
        }
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
