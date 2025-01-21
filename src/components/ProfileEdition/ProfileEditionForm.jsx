import { useProfile } from "../../store/hooks/profileHooks"
import FormInput from "../FormInput/FormInput"

const ProfileEditionForm = ({
    onCloseRequest = () => {},
    validationCallback = () => {}
}) => {

    const { currentProfile, setProfile } = useProfile();

    const onSubmit = (event) => {
        event.preventDefault();

        setProfile({
            userName: event.target["username"]?.value,
        });

        validationCallback();
    } 

    return <form onSubmit={onSubmit} className="profile-edition__form">
        <FormInput
            type="text"
            name="username"
            label="User name"
            defaultValue={currentProfile?.userName}
        />
        <FormInput
            type="text"
            label="First name"
            defaultValue={currentProfile?.firstName}
            disabled
        />
        <FormInput
            type="text"
            label="Last name"
            defaultValue={currentProfile?.lastName}
            disabled
        />
        <div className="profile-edition__actions">
            <input type="submit" value="Save"/>
            <button onClick={onCloseRequest}>Cancel</button>
        </div>
    </form>
}

export default ProfileEditionForm