import { useDispatch, useSelector } from "react-redux";
import { selectAccounts, selectAccountsPending, selectAccountsError } from "../selectors/accountsSelectors";
import { useCallback, useEffect } from "react";
import { listSelfAccounts } from "../thunks/accountsThunks";

export function useAccounts() {
    const dispatch = useDispatch();

    const accounts = useSelector(selectAccounts);
    const pending = useSelector(selectAccountsPending);
    const error = useSelector(selectAccountsError);

    const exec = useCallback(() => {
        dispatch(listSelfAccounts());
    }, []);

    useEffect(() => {
        if (!accounts) {
            exec();
        }
    }, []);

    return {
        accounts,
        pending,
        error,
        refetch: exec
    }
}