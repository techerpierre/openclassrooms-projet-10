import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
    return Api.profileApi.getProfile();
});

export const updateProfile = createAsyncThunk("profile/updateProfile", async ({ userName }) => {
    return Api.profileApi.updateProfile({ userName });
});
