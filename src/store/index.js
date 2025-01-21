import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import accountsReducer from "./reducers/accountsReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        accounts: accountsReducer,
    },
});

export default store