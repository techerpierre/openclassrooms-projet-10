import { useDispatch, useSelector } from "react-redux";
import { selectAuthError, selectAuthPending, selectIsAuthenticated, selectToken } from "../selectors/authSelectors";
import { useCallback } from "react";
import { login } from "../thunks/authThunks";
import { logout } from "../reducers/authReducer";
import { removeCurrentProfile } from "../reducers/profileReducer";

export function useAuth() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const token = useSelector(selectToken);
    const pending = useSelector(selectAuthPending);
    const error = useSelector(selectAuthError);

    const loginAction = useCallback((email, password, remember = true) => {
        dispatch(login({ email, password, remember }));
    }, [dispatch]);

    const logoutAction = useCallback(() => {
        dispatch(logout());
        dispatch(removeCurrentProfile());
    }, [dispatch]);

    return {
        isAuthenticated,
        token,
        pending,
        error,
        login: loginAction,
        logout: logoutAction,
    }
}