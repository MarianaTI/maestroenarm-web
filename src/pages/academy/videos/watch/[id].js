import QuizIcon from '@mui/icons-material/Quiz';
import Link from 'next/link';
import { CustomButton } from "../../../../components/CustomButton";
import { PlayerVideo, VideoContainer, WatchContainer, MainContent, Sidebar, MainContentPlaceholder } from "../../../../styles/Watch.style";
import { useRouter } from "next/router";
import { setCurrentProduct } from '../../../../store/slices/productSlice';
import { useDispatch } from 'react-redux';
import { cloudinaryReact } from '../../../../services/cloudinary/config';
import { CardVideo, CardVideoPlaceholder } from '../../../../components/CardVideo';
import { useGetVideoQuery, useGetVideosQuery } from '../../../../store/apis/videoApi';
import { Download } from '@mui/icons-material';

export default function Watch() {
    const dispatch = useDispatch();
    const router = useRouter()
    const { data: videos, isLoading } = useGetVideosQuery()
    const { data: video, isLoading: isLoadingPlayer } = useGetVideoQuery(router.query?.id?.replace('/', '%2F'));
    return (
        <WatchContainer>
            {isLoadingPlayer ?
                <MainContentPlaceholder>
                    <div className='player__placeholder' />
                    <div className='content__placeholder' />
                    <div className='content__placeholder' />
                    <div className='content__placeholder' />
                </MainContentPlaceholder>
                : video ?
                    <MainContent>
                        <VideoContainer>
                            <PlayerVideo cldVid={cloudinaryReact.video(video.public_id)} controls />
                        </VideoContainer>
                        <div style={{ marginTop: 16 }}>
                            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: "wrap", gap: 6 }}>
                                <div>
                                    <h2 style={{ margin: 0 }}>{video.context?.custom.alt || 'No Title'}</h2>
                                    <p>{video.context?.custom.alt || 'Not description'}</p>
                                </div>
                                <div style={{ display: "flex", gap: 6 }}>
                                    <Link href='/academy/videos/watch/test'>
                                        <CustomButton theme="secondary">
                                            <QuizIcon />
                                        </CustomButton>
                                    </Link>
                                    <CustomButton theme="secondary" >
                                        <Download />
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    </MainContent >
                    : <h1>NO se encontró el recurso</h1>
            }
            <Sidebar>
                {isLoading && <>
                    <CardVideoPlaceholder isReponsive={true} />
                    <CardVideoPlaceholder isReponsive={true} />
                    <CardVideoPlaceholder isReponsive={true} />
                    <CardVideoPlaceholder isReponsive={true} />
                    <CardVideoPlaceholder isReponsive={true} />
                    <CardVideoPlaceholder isReponsive={true} />
                </>}
                {!isLoading && videos.map(({ asset_id, public_id, context }) => <CardVideo
                    key={asset_id}
                    title={context?.custom.caption}
                    description={context?.custom.alt}
                    price={context?.custom.price}
                    url={`/academy/videos/watch/${public_id.replace('/', '%2F')}`}
                    player={cloudinaryReact.video(public_id)}
                    isReponsive={true}
                >
                </CardVideo>)}
            </Sidebar>
        </WatchContainer >
    )
} 