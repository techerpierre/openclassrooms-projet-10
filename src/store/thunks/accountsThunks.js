import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services";

export const listSelfAccounts = createAsyncThunk("accounts/listSelfAccounts", async () => {
    return Api.accountsApi.listSelfAccount();
});