import QuizIcon from '@mui/icons-material/Quiz';
import Link from 'next/link';
import { CustomButton } from "../../../../components/CustomButton";
import { PlayerVideo, VideoContainer, WatchContainer, MainContent, Sidebar, MainContentPlaceholder } from "../../../../styles/Watch.style";
import { useRouter } from "next/router";
import { cloudinaryReact } from '../../../../services/cloudinary/config';
import { CardVideo, CardVideoPlaceholder } from '../../../../components/CardVideo';
import { useGetVideoQuery } from '../../../../store/apis/videoApi';
import { useAuth } from '../../../../context/AuthProvider';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../services/firebase/config';

export default function Watch() {
    const router = useRouter()
    const { loading, user } = useAuth();
    const [purchases, setPurchases] = useState();
    const { data: video, isLoading: isLoadingPlayer } = useGetVideoQuery(router.query?.id?.replace('/', '%2F'));
    const [isLoading, setIsLoading] = useState(true);
    async function getPurchases() {
        if (loading) return;
        const snapshot = await getDocs(query(collection(db, 'purchases'), where('email', '==', user.email), where('item.resource_type', '==', 'video') ))
        setPurchases(snapshot.docs.map(doc => doc.data()))
        setIsLoading(false)
    }

    useEffect(() => {
        getPurchases()
    }, [loading])
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
                                    {/* <div>
                                        <CustomButton theme="secondary"  >
                                            <Download />
                                        </CustomButton>
                                    </div> */}
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
                {!isLoading && purchases.map(({ item }) => <CardVideo
                    key={item?.id}
                    title={item?.name}
                    isPurchased
                    url={`/academy/videos/watch/${item.id.replace('/', '%2F')}`}
                    player={cloudinaryReact.video(item.id)}
                    isReponsive={true}
                >
                </CardVideo>)}
            </Sidebar>
        </WatchContainer >
    )
} 