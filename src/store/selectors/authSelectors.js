export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthPending = (state) => state.auth.pending;
export const selectAuthError = (state) => state.auth.error;