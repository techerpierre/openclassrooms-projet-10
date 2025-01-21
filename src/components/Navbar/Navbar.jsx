    import { Link } from "react-router-dom"
import LogoutLink from "../LogoutLink/LogoutLink"
import ProfileLink from "../ProfileLink/ProfileLink"
import { useEffect, useRef } from "react"
import useEventListener from "../../hooks/useEventListener"

const Navbar = () => {

    const navbarRef = useRef(null);

    useEventListener("scroll", () => {
        if (navbarRef.current) {
            const { height } = navbarRef.current.getBoundingClientRect();

            if (window.scrollY > height * 1.5) {
                navbarRef.current.classList.add("navbar--fixed");
            }
            if (window.scrollY <= 0) {
                navbarRef.current.classList.remove("navbar--fixed");
            }
        }
    })

    return <div className="navbar-container">
        <nav ref={navbarRef} className="navbar">
            <Link to="/">
                <img src="/img/argentBankLogo.png" alt="argent-bank logo" className="navbar__logo"/>
            </Link>
            <div className="navbar__actions">
                <ProfileLink/>
                <LogoutLink/>
            </div>
        </nav>
    </div> 
}

export default Navbar