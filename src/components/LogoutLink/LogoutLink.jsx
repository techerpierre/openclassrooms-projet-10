import { canShowLogout } from "../../helpers/functions";
import { useAuth } from "../../store/hooks/authHooks"
import IconLink from "../IconLink/IconLink";
import { useToast } from "../Toast/ToastContext";

const LogoutLink = ({
    showInMobile = false
}) => {
    const { isAuthenticated, logout } = useAuth();
    const addToast = useToast();

    const handleLogout = () => {
        logout();
        addToast({
            message: "Signed out!",
            content: "You have been disconnected from your session.",
            type: "infos"
        });
    }

    return <>
        { canShowLogout(isAuthenticated, showInMobile) ? (
            <IconLink
                to="/login"
                src="/img/box-arrow-in-left.svg"
                alt="Profile icon"
                onClick={handleLogout}
            >Sign out</IconLink>
        ) : null }
    </> 
}

export default LogoutLink