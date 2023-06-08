import { CustomButton } from "../../../../components/CustomButton";
import VideoCard from "../../../../components/VideoCard";
import { FakeVideo, PreviewContainer, Sidebar } from "../../../../styles/Preview.style";

const videoCards = [
    { id: "card1", title: "Titulo1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card2", title: "Titulo2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card3", title: "Titulo3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card4", title: "Titulo4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" }
]

export default function Preview() {
    return (
        <PreviewContainer>
            <main style={{ flex: 1 }}>
                <FakeVideo></FakeVideo>
                <h1 style={{ fontSize: 40 }}>Body Bold Extra Large</h1>
                <span>Especialidad</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <span>$ 0.00</span>
                <CustomButton theme="secondary">comprar ahora </CustomButton>
            </main>
            <Sidebar>
                {videoCards.map(({ id, title, description, prize }) => <VideoCard
                    key={id}
                    title={title}
                    description={description}
                    prize={prize}>
                </VideoCard>)}
            </Sidebar>
        </PreviewContainer>
    )
} 