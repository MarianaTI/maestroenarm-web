import VideoCard from "../../../components/VideoCard"
import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"
import { VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { Cloudinary } from "@cloudinary/url-gen"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setVideoList } from "../../../store/slices/videosSlice"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'db0l9t7fr',
        apiSecret: 'Sq6knO4gcBE7d9sbXdf8OxD6yTs',
        apiKey: '631147659653346'
    }
})

export default function Videos() {
    const [videos, setVideos] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('http://localhost:3000/api/hello').then(res => res.json()).then(data => setVideos(data))
         dispatch(setVideoList(videos))
    }, [])  

    return (
        <>
            <VideoContainer>
                <div style={{ height: 364, width: '100%', marginTop: 48, display: 'flex', background: '#b9b9b9' }}>
                    {/* <div>
                        <h1>Body Bold Extra Large. </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <Image style={{ marginLeft: 'auto' }} src="/academy-principal-video-page.svg" width={375} height={375}></Image> */}
                </div>
                <Filter></Filter>
                <VideoCardContainer>
                    {videos.map(({ asset_id, public_id, context = { alt: 'descripcion', caption: 'Title', prize: 9.99 } }) => <VideoCard
                        key={public_id}
                        title={context.caption}
                        description={context.alt}
                        prize={context.prize}
                        isVertical
                        isBidCard={true}
                        route={`/academy/videos/watch/${1}`}
                        player={cloudinary.video(public_id)}
                    >
                    </VideoCard>)}
                </VideoCardContainer>
            </VideoContainer >
            <FilterDrawer></FilterDrawer>

        </>
    )
}

