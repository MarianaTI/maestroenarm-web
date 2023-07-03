import VideoCard from "../../../components/VideoCard"
import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"
import { Cloudinary } from "@cloudinary/url-gen"
import { ImageStyled, MainContainer, MainInformation, VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { useGetVideosQuery } from "../../../store/apis/videoApi"
import { CircularProgress } from "@mui/material"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
    }
})

export default function Videos() {
    //todo: crear validacion de pago, si el usario ha pagado mostrar los videos con metadata premium
    const { isError, isLoading, status, error, data: videos } = useGetVideosQuery()
    return (
        <>
            <VideoContainer >
                <MainContainer>
                    <MainInformation>
                        <h1>Body Bold Extra Large.</h1>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </MainInformation>
                    <ImageStyled src="/academy-principal-video-page.svg" width={350} height={300} />
                </MainContainer>
                <Filter />
                <VideoCardContainer>
                    {isLoading && <CircularProgress color="primary" />}
                    {!isLoading && videos.map(({ asset_id, public_id, context = { alt: 'descripcion', caption: 'Title', price: 9.99 } }) => <VideoCard
                        key={public_id}
                        title={context.caption}
                        description={context.alt}
                        price={context.price}
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

