import { Avatar, Card, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const RankingContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 100px 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  max-width: 600px;
  width: 200px;
  height: 200px;
  margin: auto;
  padding: 20px;
  background-color: #d5d5d5;
`;

export const FirstPlaceCard = styled(Card)`
  max-width: 300px;
  width: 100%;
  margin: auto;
  padding: 10px;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #d5d5d5;
`;

export const SecondPlaceCard = styled(Card)`
  max-width: 250px;
  width: 100%;
  height: 280px;
  margin: auto;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #d5d5d5;
`;

export const ThirdPlaceCard = styled(Card)`
  max-width: 250px;
  width: 100%;
  height: 250px;
  margin: auto;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
`
export const TitleText = styled(Typography)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  padding: 10px;
`;
export const SubtitleText = styled(Typography)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 200;
  padding: 10px;
  color: #00000065;
`;
