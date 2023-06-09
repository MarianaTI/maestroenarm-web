import styled from "@emotion/styled";

export const FakeVideo = styled.video`
    background: #D9D9D9;

    @media screen and (min-width: 1441px) {
        background: #000;
        height: 793px;
        width: 1241px;
    }

    @media screen and (max-width: 1690px) {
        background: #d9d9d9;
        height: 500px;
        width: 900px;
    }

    @media screen and (max-width: 1270px) {
        background: #d9d9d9;
        height: 300px;
        width: 700px;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    padding: 48px 84px 100px;
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    height: 75vh;
`;