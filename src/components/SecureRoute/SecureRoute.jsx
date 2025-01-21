import { Navigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/authHooks";

const SecureRoute = ({
    redirectionUrl = "/",
    disabledOnAuth = false,
    children
}) => {
    const { isAuthenticated } = useAuth();
    if ((isAuthenticated && !disabledOnAuth) || (!isAuthenticated && disabledOnAuth)) {
        return children
    } else {
        return <Navigate to={redirectionUrl}/>
    }
}

export default SecureRoute