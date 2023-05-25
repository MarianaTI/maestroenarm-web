import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { PositionSpan, StyledCard, TextContainer } from "./index.style";

const RankingCard = ({ user, position, variant }) => {
  return (
    <StyledCard variant={variant}>
      <div style={{ display: "flex" }}>
        <PositionSpan>
          <NumbersIcon style={{ marginTop: "10px", fontSize: "33px" }} />
          {position}
        </PositionSpan>

        <div
          style={{
            display: "flex",
            marginRight: "50px",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar />
        </div>
      </div>

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
