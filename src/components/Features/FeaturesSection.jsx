import FeatureCard from "./FeatureCard"

const FeaturesSection = ({
    features
}) => {
    return <section className="features-section">
        {
            features.map(feature => (
                <FeatureCard key={feature.id} title={feature.title} content={feature.content} iconSrc={feature.icon.src} iconAlt={feature.icon.alt}/>
            ))
        }
    </section>
}

export default FeaturesSection