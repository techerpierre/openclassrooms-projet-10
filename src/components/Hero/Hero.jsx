import { generateRandomID } from "../../helpers/functions"

const Hero = ({
    title,
    content,
    src,
    alt,
}) => {
    return <header className="hero">
        <img src={src} alt={alt} className="hero__background"/>
        <div className="hero__content">
            <h1>{
                Array.isArray(title) ? (
                    title.map(el => <span key={generateRandomID()}>{ el }<br/></span>)
                ) : title
            }</h1>
            <p>{ content }</p>
        </div>
    </header>
}

export default Hero