import { createSlice } from "@reduxjs/toolkit"
import { login } from "../thunks/authThunks"
import { deleteToken, getToken, isAuthenticated, setToken } from "../../helpers/functions"

const initialState = {
    isAuthenticated: isAuthenticated(),
    token: getToken(),
    pending: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            deleteToken();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = null;
                state.pending = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = setToken(action.payload?.token, action.meta.arg.remember);
                state.isAuthenticated = true;
                state.pending = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.token = null
                state.isAuthenticated = false;
                state.error = action.error;
                state.pending = false;
                deleteToken();
            });
    },
});

export const { logout } = authSlice.actions
export default authSlice.reducer