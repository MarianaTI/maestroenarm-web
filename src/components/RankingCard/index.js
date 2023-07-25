import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { PositionSpan, StyledCard, TextContainer } from "./index.style";

const RankingCard = ({
  name,
  university = 'none',
  specialty,
  score = 'none',
  variant,
  avatar,
  rankedNumber = '1',
}) => {
  return (
    <StyledCard variant={variant}>
      <PositionSpan>
        <NumbersIcon style={{ marginTop: "8px", fontSize: "33px" }} />
        {rankedNumber}
      </PositionSpan>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {avatar && <Avatar>{avatar}</Avatar>}
      </div>
      <TextContainer>
        {name && <span className="name">{name}</span>}
        <span className={!avatar && 'name'}>{university}</span>
        {specialty && <span className="specialty">{specialty}</span>}
        <span className="point">{score}</span>
      </TextContainer>
    </StyledCard>
  );
};
export default RankingCard;
