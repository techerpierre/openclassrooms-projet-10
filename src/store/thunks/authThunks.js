import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services"

export const login = createAsyncThunk("auth/login", async ({ email, password }) => {
    return Api.authApi.login(email, password);
});
