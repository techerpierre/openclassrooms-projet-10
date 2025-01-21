import { useDispatch, useSelector } from "react-redux";
import { selectCurrentProfile, selectProfileError, selectProfilePending } from "../selectors/profileSelector";
import { useCallback, useEffect } from "react";
import { getProfile, updateProfile } from "../thunks/profileThunks";
import { selectIsAuthenticated } from "../selectors/authSelectors";

export function useProfile() {
    const dispatch = useDispatch();

    const currentProfile = useSelector(selectCurrentProfile);
    const pending = useSelector(selectProfilePending);
    const error = useSelector(selectProfileError);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const setProfileAction = useCallback(({ userName }) => {
        dispatch(updateProfile({ userName }))
    }, [dispatch]);

    useEffect(() => {
        if (isAuthenticated && !currentProfile) {
            dispatch(getProfile());
        }
    }, [isAuthenticated]);

    return {
        currentProfile,
        pending,
        error,
        setProfile: setProfileAction,
    };
}