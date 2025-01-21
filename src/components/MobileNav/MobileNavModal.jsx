import useClickOutside from "../../hooks/useClickOutside";
import { useRef } from "react";
import LogoutLink from "../LogoutLink/LogoutLink";
import ProfileLink from "../ProfileLink/ProfileLink";
import IconLink from "../IconLink/IconLink";
import usePreventScroll from "../../hooks/usePreventScroll";

const MobileNavModal = ({
    open,
    onRequestClose = () => {},
    contentRef,
}) => {
    const modalRef = useRef(null);
    usePreventScroll(open)

    useClickOutside(modalRef, () => {
        onRequestClose();
    });

    if (open) {
        return <div ref={modalRef} className="mobile-nav-modal">
            <div ref={contentRef} onClick={onRequestClose} className="mobile-nav-modal__content">
                <IconLink
                    to="/"
                    src="/img/house.svg"
                    alt="House icon"
                >Go Back Home</IconLink>
                <ProfileLink/>
                <LogoutLink showInMobile/>
            </div>
        </div>
    }
}

export default MobileNavModal