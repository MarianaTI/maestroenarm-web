import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"
import { ImageStyled, MainContainer, MainInformation, VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { useGetVideosQuery } from "../../../store/apis/videoApi"
import { CardVideo, CardVideoPlaceholder } from "../../../components/CardVideo"
import { cloudinaryReact } from "../../../services/cloudinary/config"

export default function Videos() {
    //todo: crear validacion de pago, si el usario ha pagado mostrar los videos con metadata premium, las card de videos no deben reproducirse
    const { isLoading, data: videos } = useGetVideosQuery()
    return (
        <>
            <VideoContainer >
                <MainContainer>
                    <MainInformation>
                        <h1>Body Bold Extra Large.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </MainInformation>
                    <ImageStyled src="/academy-principal-video-page.svg" width={350} height={300} />
                </MainContainer>
                <Filter />
                <VideoCardContainer>
                    {isLoading && <>
                        <CardVideoPlaceholder />
                        <CardVideoPlaceholder />
                        <CardVideoPlaceholder />
                    </>}
                    {!isLoading && videos.map(({ asset_id, public_id, context }) => <CardVideo
                        key={asset_id}
                        title={context?.custom.caption}
                        description={context?.custom.alt}
                        price={context?.custom.price}
                        url={`/academy/videos/preview/${public_id.replace('/', '%2F')}`}
                        player={cloudinaryReact.video(public_id)}
                    >
                    </CardVideo>)}
                </VideoCardContainer>
            </VideoContainer >
            <FilterDrawer />
        </>
    )
}

