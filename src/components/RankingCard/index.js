import {
  AvatarWrapper,
  StyledAvatar,
  StyledCard,
  SubtitleText,
  TextContainer,
  TitleText,
} from "./index.style";

const RankingCard = ({ user, variant }) => {
  return (
    <StyledCard variant={variant}>
      <AvatarWrapper>
        <StyledAvatar></StyledAvatar>
      </AvatarWrapper>
      <TextContainer>
        <span>{user.username}</span>
        <span>{user.university}</span>
      </TextContainer>
    </StyledCard>
  );
};

export default RankingCard;
