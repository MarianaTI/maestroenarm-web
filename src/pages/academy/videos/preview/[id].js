import QuizIcon from '@mui/icons-material/Quiz';
import { CustomButton } from "../../../../components/CustomButton";
import { PlayerVideo, VideoContainer, WatchContainer, MainContent, Sidebar, MainContentPlaceholder } from "../../../../styles/Watch.style";
import { useRouter } from "next/router";
import Link from 'next/link';
import { setCurrentProduct } from '../../../../store/slices/productSlice';
import { useDispatch } from 'react-redux';
import { cloudinaryReact } from '../../../../services/cloudinary/config';
import { preview } from '@cloudinary/url-gen/actions/videoEdit';
import { CardVideo, CardVideoPlaceholder } from '../../../../components/CardVideo';
import { useGetVideoQuery, useGetVideosQuery } from '../../../../store/apis/videoApi';

export default function Preview() {
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
                            <PlayerVideo cldVid={cloudinaryReact.video(video[0].public_id).videoEdit(preview().duration(5))} controls />
                        </VideoContainer>
                        <div style={{ marginTop: 16 }}>
                            <h2 style={{ margin: 0 }}>{video[0]?.context?.caption || 'No Title'}</h2>
                            <p style={{ margin: "6px 0" }}>{video[0]?.context?.alt || 'Not description'}</p>
                            <Link href="/academy/shopping-bag/payment-method" onClick={() => dispatch(setCurrentProduct({ ...video }))}>
                                <CustomButton theme="secondary" >
                                    <span style={{ fontSize: 16 }}>comprar</span>
                                </CustomButton>
                            </Link>
                            <span style={{ margin: 16 }}>$ {video[0].context?.price || '0.00'}</span>
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
                    title={context?.caption}
                    description={context?.alt}
                    price={context?.price}
                    url={`/academy/videos/preview/${public_id.replace('/', '%2F')}`}
                    player={cloudinaryReact.video(public_id)}
                    isReponsive={true}
                >
                </CardVideo>)}
            </Sidebar>
        </WatchContainer >
    )
} 