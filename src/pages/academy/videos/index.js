import { Home } from "@mui/icons-material"
import { CustomButton } from "../../../components/CustomButton"
import VideoCard from "../../../components/VideoCard"
import { SectionStyled, VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"

const videoCards = [
    { id: "card1", title: "Titulo1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card2", title: "Titulo2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card3", title: "Titulo3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card4", title: "Titulo4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" }
]

export default function Videos() {
    return (
        <VideoContainer>
            <SectionStyled>
                <div>
                    <h1 style={{ fontWeight: "bold", fontSize: 40 }}>Body Bold Extra Large. </h1>
                    <p style={{ fontSize: 26 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div style={{ height: 300, width: 375, background: "#D9D9D9", justifySelf: "flex-end" }}>

                </div>
            </SectionStyled>
            <VideoCardContainer>
                {videoCards.map(({ id, title, description, prize }) => <VideoCard
                    key={id}
                    title={title}
                    description={description}
                    prize={prize}>
                </VideoCard>)}
            </VideoCardContainer>
        </VideoContainer>
    )
}

