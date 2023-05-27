import { MatchCard } from "../../../components/MatchCard";
import MainLayout from "../../../layouts/MainLayout";

export default function Game() {
    return (
        <MainLayout>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ margin: '64px 0px 16px 82px' }}>Modo Multijugador amistoso</span>
                <span style={{ margin: '0px auto 64px auto' }}>TE HAS UNIDO A LA PARTIDA</span>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <MatchCard profile={{ name: 'Adriana Mis', specialty: 'Ginecología', imgUrl: 'https://thispersondoesnotexist.xyz/img/4183.jpg' }} />
                    <MatchCard profile={{ name: 'Alejandra Jiménez', specialty: 'Pediatría', imgUrl: 'https://thispersondoesnotexist.xyz/img/4127.jpg' }} />
                </div>
            </div>
        </MainLayout>
    );
}