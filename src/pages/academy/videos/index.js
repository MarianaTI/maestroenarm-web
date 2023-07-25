import Filter from "../../../components/Filter"
import { AcademyVideoBanner, VideoCardContainer, VideoContainer } from "../../../styles/Videos.style"
import { useGetVideosByTitleQuery } from "../../../store/apis/videoApi"
import { CardVideo, CardVideoPlaceholder } from "../../../components/CardVideo"
import { cloudinaryReact } from "../../../services/cloudinary/config"
import { useEffect, useState } from "react"
import Image from "next/image"
import FilterLayout from "../../../layouts/FilterDrawer"
import { useSelector } from "react-redux"

export default function Videos() {
    const { drawerItems } = useSelector(state => state.filterDrawer)
    const [query, setQuery] = useState('')
    const { data: videos, isLoading, refetch } = useGetVideosByTitleQuery({ title: query, specialties: drawerItems.join(' OR tags:') })
    useEffect(() => {
        const debouncing = setTimeout(() => { refetch() }, 500)
        return () => clearTimeout(debouncing)
    }, [query, drawerItems])

    return (
        <FilterLayout setCheck={setQuery}>
            <VideoContainer >
                <AcademyVideoBanner className="academy__container">
                    <div className="academy__info__group">
                        <h1 className="academy__title">
                            Most fonts have a particular weight which corresponds. However some fonts.
                        </h1>
                        <p className="academy__info">
                            However some fonts, called variable fonts,
                            can support a range of weights with a more or less fine granularity,
                            and this can give the designer a much closer degree of control over the chosen weight.
                        </p>
                    </div>
                    <Image
                        className="academy__main__image"
                        src="/academy-principal-video-page.svg"
                        width={600}
                        height={400}
                        alt="academy-videos-img"
                    />
                </AcademyVideoBanner>
                <Filter setState={setQuery} />
                <VideoCardContainer>
                    {isLoading ? 'abcdefghij'.split('').map(c => <CardVideoPlaceholder key={c} />)
                        : videos?.map(({ asset_id, public_id, context }) => <CardVideo
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
        </FilterLayout>
    )
}

