import { Avatar, Card, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const RankingContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 100px 200px;
  display: flex;
  justify-content: center; // horizontales
  align-items: flex-start;
  gap: 40px;
`;

export const StyledItem = styled(Card)`
  max-width: 600px;
  width: 200px;
  height: 200px;
  margin: auto;
  padding: 20px;
  background-color: #d5d5d5;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

export const SubtitleText = styled(Typography)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 200;
  padding: 10px;
  color: #00000065;
`;
