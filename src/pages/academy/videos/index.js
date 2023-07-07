import FilterDrawer from "../../../components/FilterDrawer"
import Filter from "../../../components/Filter"
import { ImageStyled, MainContainer, MainInformation, VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { useGetVideosByTitleQuery } from "../../../store/apis/videoApi"
import { CardVideo, CardVideoPlaceholder } from "../../../components/CardVideo"
import { cloudinaryReact } from "../../../services/cloudinary/config"
import { useEffect, useState } from "react"

export default function Videos() {
    const [query, setQuery] = useState('')
    const { data: videos, isLoading, refetch } = useGetVideosByTitleQuery(query)
    console.log(isLoading)
    useEffect(() => {
        const debouncing = setTimeout(() => { refetch() }, 500)
        return () => clearTimeout(debouncing)
    }, [query])

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
                    <ImageStyled src="/academy-principal-video-page.svg" width={350} height={300} alt="banner" />
                </MainContainer>
                <Filter setState={setQuery} />
                <VideoCardContainer>
                    {isLoading ? <>
                        <CardVideoPlaceholder />
                        <CardVideoPlaceholder />
                        <CardVideoPlaceholder />
                    </> : videos?.map(({ asset_id, public_id, context }) => <CardVideo
                        key={asset_id}
                        title={context?.caption}
                        description={context?.alt}
                        price={context?.price}
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

