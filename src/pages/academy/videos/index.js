import VideoCard from "../../../components/VideoCard"
import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"
import { VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import Image from "next/image"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'db0l9t7fr',
        apiSecret: 'Sq6knO4gcBE7d9sbXdf8OxD6yTs',
        apiKey: '631147659653346'
    }
})

const videoCards = [
    {
        id: "card1", title: "Titulo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00",
        player: cloudinary.video('v1686780756/samples/sea-turtle')
    },
    {
        id: "card2", title: "Titulo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "10.00",
        player: cloudinary.video('v1686780757/samples/elephants')
    },
    {
        id: "card3", title: "Titulo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "8.00",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    },
    {
        id: "card4", title: "Titulo 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "9.98",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    }
]


export default function Videos() {
    return (
        <>
            <VideoContainer>
                <div style={{ height: 364, width: '100%', marginTop: 48, display: 'flex', background: '#b9b9b9'}}>
                    {/* <div>
                        <h1>Body Bold Extra Large. </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <Image style={{ marginLeft: 'auto' }} src="/academy-principal-video-page.svg" width={375} height={375}></Image> */}
                </div>
                <Filter></Filter>
                <VideoCardContainer>
                    {videoCards.map(({ id, title, description, prize, player }) => <VideoCard
                        key={id}
                        title={title}
                        description={description}
                        prize={prize}
                        isVertical
                        isBidCard={true}
                        route={`/academy/videos/watch/${id}`}
                        player={player}
                    >
                    </VideoCard>)}
                </VideoCardContainer>
            </VideoContainer >
            <FilterDrawer></FilterDrawer>
            <FilterDrawer />
        </>
    )
}

