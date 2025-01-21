import { Link } from "react-router-dom"

const IconLink = ({
    to,
    src,
    alt,
    onClick,
    children,
}) => {
    return <Link to={to} className="icon-link" onClick={onClick}>
        <img src={src} alt={alt} className="icon-link__icon"/>
        <span className="icon-link__content">{ children }</span>
    </Link>
}

export default IconLink