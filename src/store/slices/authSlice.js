import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {
        email: '',
        password: ''
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuthenticated = false
            state.user.email = action.payload.email
            state.password = action.payload.password
        },
        signOut: (state) => { state.isAuthenticated = false }
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
