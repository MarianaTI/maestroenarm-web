import { MatchCard } from "../../../components/MatchCard";
import Layout from "../layout/index";
import { FlexLeftWrapper, FlexRightWrapper, MatchCardContainer } from "../../../styles/Game";

export default function Game() {
    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ margin: '64px 0px 16px 82px' }}>Modo Multijugador amistoso</span>
                <span style={{ margin: '0px auto 64px auto' }}>TE HAS UNIDO A LA PARTIDA</span>
                <MatchCardContainer>
                    <FlexRightWrapper>
                        <MatchCard profile={{ name: 'Adriana Mis', specialty: 'Ginecología', imgUrl: 'https://thispersondoesnotexist.xyz/img/4183.jpg' }} />
                    </FlexRightWrapper>
                    <FlexLeftWrapper>
                        <MatchCard profile={{ name: 'Alejandra Jiménez', specialty: 'Pediatría', imgUrl: 'https://thispersondoesnotexist.xyz/img/4127.jpg' }} />
                    </FlexLeftWrapper>
                </MatchCardContainer>
            </div>
        </Layout>
    );
}