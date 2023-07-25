import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TitleGameContainer = styled.div`
  padding: 32px 0px;
`;

export const MatchCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 920px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const FlexLeftWrapper = styled.div`
  @media screen and (max-width: 920px) {
    margin: 0px 32px 0px auto;
  }
`;

export const FlexRightWrapper = styled.div`
  @media screen and (max-width: 920px) {
    margin: 0px 0px auto 32px;
  }
`;

export const LinkModalBody = styled.div`
  span {
    display: block;
    &:nth-child(1) {
      color: #000;
      font-size: 18px;
      font-weight: 600;
    }
    &:nth-child(3) {
      color: #000;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      padding-top: 38px;
    }
  }

  .link-container {
    border-radius: 15px;
    background: #ededed;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 4px 16px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    & > span {
      color: rgba(0, 0, 0, 0.5);
      font-size: 16px;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const MatchLobbyFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 132px;
`;
