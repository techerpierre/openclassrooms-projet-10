import ProfileEditionForm from "./ProfileEditionForm";
import useToggle from "../../hooks/useToggle";

const ProfileEdition = () => {
    const [open, toggleOpen, setOpen] = useToggle();

    const validationCallback = () => {
        setOpen(false);
    }

    return <div className="profile-edition">
        { open ? (
            <ProfileEditionForm
                validationCallback={validationCallback}
                onCloseRequest={toggleOpen}
            />
        ) : (
            <button onClick={toggleOpen} className="profile-edition__button">Edit Name</button>
        ) }
    </div>
}

export default ProfileEdition