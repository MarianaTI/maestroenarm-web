import QuizIcon from '@mui/icons-material/Quiz';
import Link from 'next/link';
import { CustomButton } from "../../../../components/CustomButton";
import { PlayerVideo, VideoContainer, WatchContainer, MainContent, Sidebar, MainContentPlaceholder } from "../../../../styles/Watch.style";
import { useRouter } from "next/router";
import { cloudinaryReact } from '../../../../services/cloudinary/config';
import { CardVideo, CardVideoPlaceholder } from '../../../../components/CardVideo';
import { useGetPremiumVideosQuery, useGetVideoQuery } from '../../../../store/apis/videoApi';
import { Download } from '@mui/icons-material';

export default function Watch() {
    //todo: ahhhh si ingresa el public id, aun asi se reproduce el video, es un bug muy malo,puede visualizar contenido premium gratiss!!!!1
    const router = useRouter()
    const { data: videos, isLoading } = useGetPremiumVideosQuery()
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
                            <PlayerVideo cldVid={cloudinaryReact.video(video[0].public_id)} controls />
                        </VideoContainer>
                        <div style={{ marginTop: 16 }}>
                            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: "wrap", gap: 6 }}>
                                <div>
                                    <h2 style={{ margin: 0 }}>{video[0].context?.alt || 'No Title'}</h2>
                                    <p>{video[0].context?.alt || 'Not description'}</p>
                                </div>
                                <div style={{ display: "flex", gap: 6 }}>
                                    <Link href='/academy/videos/watch/test'>
                                        <CustomButton theme="secondary">
                                            <QuizIcon />
                                        </CustomButton>
                                    </Link>
                                    <div>
                                        <CustomButton theme="secondary"  >
                                            <Download />
                                        </CustomButton>
                                    </div>
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
                    title={context?.caption}
                    description={context?.alt}
                    price={context?.price}
                    url={`/academy/videos/watch/${public_id.replace('/', '%2F')}`}
                    player={cloudinaryReact.video(public_id)}
                    isReponsive={true}
                >
                </CardVideo>)}
            </Sidebar>
        </WatchContainer >
    )
} 