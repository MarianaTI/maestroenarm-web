import QuizIcon from '@mui/icons-material/Quiz';
import { Cloudinary } from "@cloudinary/url-gen";
import { CustomButton } from "../../../../components/CustomButton";
import VideoCard from "../../../../components/VideoCard";
import { PlayerVideo, VideoContainer, WatchContainer, MainContent, Sidebar } from "../../../../styles/Watch.style";
import { useRouter } from "next/router";
import { Link } from '@mui/material';

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'db0l9t7fr',
        apiSecret: 'Sq6knO4gcBE7d9sbXdf8OxD6yTs',
        apiKey: '631147659653346'
    }
})

const videoCards = [
    {
        id: 1, title: "Titulo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00",
        player: cloudinary.video('v1686780756/samples/sea-turtle')
    },
    {
        id: 2, title: "Titulo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "10.00",
        player: cloudinary.video('v1686780757/samples/elephants')
    },
    {
        id: 3, title: "Titulo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "8.00",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    },
    {
        id: 4, title: "Titulo 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "9.98",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    },
    {
        id: 5, title: "Titulo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "0.00",
        player: cloudinary.video('v1686780756/samples/sea-turtle')
    },
    {
        id: 6, title: "Titulo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "10.00",
        player: cloudinary.video('v1686780757/samples/elephants')
    },
    {
        id: 7, title: "Titulo 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "8.00",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    },
    {
        id: 8, title: "Titulo 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", prize: "9.98",
        player: cloudinary.video('v1686780762/samples/cld-sample-video')
    },
]

export default function Watch() {
    const route = useRouter();
    const video = videoCards.find(v => v.id == route.query.id)

    if (!video) return <h1>NO se encontró el recurso</h1>

    return (
        <WatchContainer>
            <MainContent>
                <VideoContainer>
                    <PlayerVideo cldVid={video.player} controls />
                </VideoContainer>
                <div style={{ marginTop: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                        <h2 style={{ margin: 0 }}>{video.title}</h2>
                        <Link href='/academy/videos/watch/test'>
                            <CustomButton theme="secondary">
                                <QuizIcon />
                            </CustomButton>
                        </Link>
                    </div>
                    <p style={{ margin: "6px 0" }}>{video.description}</p>
                    <CustomButton theme="secondary" >
                        <span style={{ fontSize: 16 }}>comprar</span>
                    </CustomButton>
                    <span style={{ margin: 16 }}>$ {video.prize}</span>
                </div>
            </MainContent>
            <Sidebar>
                {videoCards.map(({ id, title, description, prize, player }) => <VideoCard
                    key={id}
                    title={title}
                    description={description}
                    prize={prize}
                    isBidCard={false}
                    route={`/academy/videos/watch/${id}`}
                    player={player}
                >
                </VideoCard>)}
            </Sidebar>
        </WatchContainer>
    )
} 