import styled from "@emotion/styled";

export const Container = styled.div`
    @media screen and (min-width: 1019px) {
        display: flex;
    }
`;

export const Sidebar = styled.aside`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 16px;
    @media screen and (min-width: 1019px) {
        flex: 0 0 250px;
        padding: 32px 32px 32px 0;
        background-color: #f8f8f8;
        border-right: 1px solid #ddd;
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

export const PlayerVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
`