import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { css } from "@emotion/react"

export const ModalBody = styled(Box)`
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 778px;
    height: 317px;
    border: 2px solid #b9b9b9;
    box-shadow: 24px;
    padding: 32px;
    border-radius: 16px;  

    ${css`
        @media screen and (max-width: 1020px) {
            width: 500px;
            height: 350px
        };

        @media screen and (max-width: 578px) {
            width: 350px;
            height: 370px
        }
    `}
`;

export const LinkSharingContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column
`;

export const LinkSharing = styled.div`
    padding-left: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;    
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #EDEDED;
    overflow: hidden;
    text-overflow: ellipsis;  
`;
