import FeaturesSection from "../../components/Features/FeaturesSection"
import Hero from "../../components/Hero/Hero"
import { generateRandomID } from "../../helpers/functions"

const features = [
    {
        id: generateRandomID(),
        title: "You are our #1 priority",
        content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        icon: {
            src: "/img/icon-chat.png",
            alt: "Chat Icon"
        }
    },
    {
        id: generateRandomID(),
        title: "More savings means higher rates",
        content: "The more you save with us, the higher your interest rate will be!",
        icon: {
            src: "/img/icon-money.png",
            alt: "Money Icon"
        }
    },
    {
        id: generateRandomID(),
        title: "Security you can trust",
        content: " We use top of the line encryption to make sure your data and money is always safe.",
        icon: {
            src: "/img/icon-security.png",
            alt: "Security Icon"
        }
    }
]

const Home = () => {
    return <>
        <Hero
            title={[ "No fees.", "No minimum deposit.", "High interest rates." ]}
            content="Open a savings account with Argent Bank today!"
            src="/img/bank-tree.jpeg"
            alt="a tree"
        />
        <FeaturesSection features={features}/>
    </>
}

export default Home