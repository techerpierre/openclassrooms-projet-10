import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "../thunks/profileThunks";

const initialState = {
    currentProfile: null,
    pending: false,
    error: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        removeCurrentProfile: (state) => {
            state.currentProfile = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.error = null;
                state.pending = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.currentProfile = action.payload;
                state.pending = false;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.currentProfile = null;
                state.error = action.error;
                state.pending = false;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.currentProfile = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.currentProfile = null;
                state.error = action.error;
            });
    },
});

export const { removeCurrentProfile } = profileSlice.actions
export default profileSlice.reducer