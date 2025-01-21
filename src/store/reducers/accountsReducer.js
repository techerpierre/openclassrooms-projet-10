import { createSlice } from "@reduxjs/toolkit"
import { listSelfAccounts } from "../thunks/accountsThunks"

const initialState = {
    accounts: {
        data: null,
        pending: false,
        error: null
    },
    currentAccounts: {
        data: null,
        pending: false,
        error: null
    }
}

const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(listSelfAccounts.pending, (state) => {
                state.accounts.pending = true;
                state.accounts.error = null;
            })
            .addCase(listSelfAccounts.fulfilled, (state, action) => {
                state.accounts.data = action.payload;
                state.accounts.pending = false;
            })
            .addCase(listSelfAccounts.rejected, (state, action) => {
                state.accounts.error = action.error;
                state.accounts.pending = false;
            });
    }
});

export default accountsSlice.reducer