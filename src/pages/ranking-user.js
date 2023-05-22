import { Typography } from "@mui/material";
import {
  AvatarWrapper,
  FirstPlaceCard,
  RankingContainer,
  SecondPlaceCard,
  StyledAvatar,
  StyledCard,
  SubtitleText,
  TextContainer,
  ThirdPlaceCard,
  TitleText,
} from "../styles/ranking-user.style";

const DetailUser = [
  {
    username: "Angel Ricardez",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    globalTop: "1",
    point: "24.0008",
  },
  {
    username: "Rodrigo Caraveo",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    globalTop: "2",
    point: "25.7188",
  },
  {
    username: "Mariana Trujillo",
    university: "Universidad Tecnologica Metropolitana",
    specialty: "Cirugia General",
    globalTop: "3",
    point: "22.7305",
  },
];

const RankingUser = () => {
  const topThree = DetailUser.sort((a, b) => a.globalTop - b.globalTop).slice(
    0,
    3
  );

  if (topThree.length > 1) {
    const firstPlace = topThree.shift();
    topThree.splice(1, 0, firstPlace);
  }

  return (
    <RankingContainer>
      {topThree.map((user, index) => {
        let CardComponent;

        if (index === 0) {
          CardComponent = SecondPlaceCard;
        } else if (index === 1) {
          CardComponent = FirstPlaceCard;
        } else if (index === 2) {
          CardComponent = ThirdPlaceCard;
        } else {
          CardComponent = StyledCard;
        }

        return (
          <CardComponent key={index}>
            <AvatarWrapper>
              <StyledAvatar></StyledAvatar>
            </AvatarWrapper>
            <TextContainer>
                <TitleText>{user.username}</TitleText>
                <SubtitleText>{user.university}</SubtitleText>
              </TextContainer>
          </CardComponent>
        );
      })}
    </RankingContainer>
  );
};

export default RankingUser;
