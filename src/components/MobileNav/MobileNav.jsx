import { useRef } from "react";
import { isMobileScreen } from "../../helpers/functions"
import useToggle from "../../hooks/useToggle";
import { useAuth } from "../../store/hooks/authHooks";
import MobileNavModal from "./MobileNavModal";

const MobileNav = () => {
    const { isAuthenticated } = useAuth();
    const [open, toggleOpen] = useToggle(false);
    const modalContentRef = useRef(null)

    const handleClose = () => {
        modalContentRef.current?.classList.add("mobile-nav-modal__content--hide-animation");
        const timeout = setTimeout(() => {
            toggleOpen();
            clearTimeout(timeout);
        }, 190);
    }

    if (isMobileScreen() && isAuthenticated) {
        return <>
            <button onClick={handleClose} className="mobile-nav-button">
                <img src="/img/list.svg" alt="List icon"/>
            </button>
            <MobileNavModal open={open} onRequestClose={handleClose} contentRef={modalContentRef}/>
        </>
    }
}

export default MobileNav;