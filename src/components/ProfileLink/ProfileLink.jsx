import { useAuth } from "../../store/hooks/authHooks"
import { useProfile } from "../../store/hooks/profileHooks"
import IconLink from "../IconLink/IconLink";

const ProfileLink = () => {
    const { isAuthenticated } = useAuth();
    const { currentProfile } = useProfile();

    return <IconLink
        to={isAuthenticated ? "/board" : "/login" }
        src="/img/person-circle.svg"
        alt="Profile icon"
    >{ isAuthenticated ? currentProfile?.email : "Sign In" }</IconLink>
}

export default ProfileLink