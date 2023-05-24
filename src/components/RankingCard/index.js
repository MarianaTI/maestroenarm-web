import Avatar from "../Avatar";
import {
  StyledCard,
  TextContainer,
} from "./index.style";

const RankingCard = ({ user, variant }) => {
  return (
    <StyledCard variant={variant}>
      <Avatar></Avatar>
      <TextContainer>
        <span>{user.username}</span>
        <span>{user.university}</span>
        <span>{user.specialty}</span>
        <span>{user.point}</span>
      </TextContainer>
    </StyledCard>
  );
};
export default RankingCard;
