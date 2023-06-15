import { AdvancedVideo } from "@cloudinary/react";
import styled from "@emotion/styled";

export const WatchContainer = styled.div`
    @media screen and (min-width: 1281px) {
        display: flex;
    }
`;

export const Sidebar = styled.aside`
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 16px;
    @media screen and (min-width: 1281px) {
        flex: 0 0 250px;
        padding: 32px 32px 32px 0;
    }

    @media screen and (max-width: 575px) {
        padding: 0;
    }
`;

export const MainContent = styled.main`
    flex: 1;
    padding: 32px;
`

export const VideoContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    background-color: #000
`;

export const PlayerVideo = styled(AdvancedVideo)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
`