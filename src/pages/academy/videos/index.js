import VideoCard from "../../../components/VideoCard"
import { VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"

const videoCards = [
    { id: "card1", title: "Titulo1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card2", title: "Titulo2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card3", title: "Titulo3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" },
    { id: "card4", title: "Titulo4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00" }
]

export default function Videos() {
    return (
        <>
            <VideoContainer>
                <div style={{ height: 364, width: "90%", background: '#D9D9D9', marginTop: 48 }}></div>
                <Filter></Filter>
                <VideoCardContainer>
                    {videoCards.map(({ id, title, description, prize }) => <VideoCard
                        key={id}
                        title={title}
                        description={description}
                        prize={prize}
                        isVertical
                        isBidCard={true}
                    >
                    </VideoCard>)}
                </VideoCardContainer>
            </VideoContainer >
            <FilterDrawer></FilterDrawer>
            <FilterDrawer />
        </>
    )
}

