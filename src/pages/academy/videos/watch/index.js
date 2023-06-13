import { CustomButton } from "../../../../components/CustomButton";
import VideoEditor from "../../../../components/Video";
import VideoCard from "../../../../components/VideoCard";
import { PlayerVideo, VideoContainer, Container, MainContent, Sidebar } from "../../../../styles/Watch.style";

const videoCards = [
    { id: "card1", title: "Titulo1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card2", title: "Titulo2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card3", title: "Titulo3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card4", title: "Titulo4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card5", title: "Titulo5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card6", title: "Titulo6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card7", title: "Titulo7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card8", title: "Titulo8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" }
]

export default function Watch() {
    return (
        <Container>
            <MainContent>
                <VideoContainer>
                    <PlayerVideo>
                    </PlayerVideo>
                </VideoContainer>
                <div>
                    <h2 style={{marginBottom: 0}}>Body Bold Extra Large. </h2>
                    <p style={{margin: "6px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <CustomButton theme="secondary" >
                        <span style={{ fontSize: 16 }}>comprar ahora</span>
                    </CustomButton>
                    <span style={{ marginLeft: 16 }}>$ 0.00</span>
                </div>
            </MainContent>
            <Sidebar>
                {videoCards.map(({ id, title, description, prize }) => <VideoCard
                    key={id}
                    title={title}
                    description={description}
                    prize={prize}
                    isBidCard={false}
                >
                </VideoCard>)}
            </Sidebar>
        </Container>

    )
} 