import { useEffect } from "react"
import { useToast } from "../components/Toast/ToastContext"
import { useAuth } from "../store/hooks/authHooks"

export default function useAuthErrorToast() {
    const addToast = useToast();
    const { error, isAuthenticated } = useAuth();

    useEffect(() => {
        if (error && !isAuthenticated) {
            addToast({
                message: "Connection Failed!",
                content: "Incorrect email or password.",
                type: "error"
            });
        }
    }, [error, isAuthenticated]);
}
