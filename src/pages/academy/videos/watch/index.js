import { CustomButton } from "../../../../components/CustomButton";
import VideoCard from "../../../../components/VideoCard";
import { PlayerVideo, VideoContainer, Container, MainContent, Sidebar } from "../../../../styles/Watch.style";

const videoCards = [
    { id: "card1", title: "Titulo1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card2", title: "Titulo2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card3", title: "Titulo3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card4", title: "Titulo4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" }
]

export default function Watch() {
    return (
        <Container>
            <MainContent>
                <VideoContainer>
                    <PlayerVideo>
                    </PlayerVideo>
                </VideoContainer>
            </MainContent>
            <Sidebar>
                {videoCards.map(({ id, title, description, prize }) => <VideoCard
                    key={id}
                    title={title}
                    description={description}
                    prize={prize}>
                </VideoCard>)}
            </Sidebar>
        </Container>

    )
} 