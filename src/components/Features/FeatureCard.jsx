const FeatureCard = ({
    title,
    content,
    iconSrc,
    iconAlt
}) => {
    return <article className="feature-card">
        <img src={iconSrc} alt={iconAlt} className="feature-card__icon"/>
        <h3 className="feature-card__title">{ title }</h3>
        <p className="feature-card__content">{ content }</p>
    </article>
}

export default FeatureCard