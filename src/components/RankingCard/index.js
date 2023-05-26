import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { PositionSpan, StyledCard, TextContainer } from "./index.style";

const DEFAULT_DISPLAY_FIELDS = ["name", "university", "specialty", "point"];

const RankingCard = ({ data, position, variant, avatar, universityStyle ={},isDisplayFields = DEFAULT_DISPLAY_FIELDS }) => {
  return (
    <StyledCard variant={variant}>
      <div style={{ display: "flex" }}>
        <PositionSpan>
          <NumbersIcon style={{ marginTop: "10px", fontSize: "33px" }} />
          {position}
        </PositionSpan>

        {data.profilePicture && (
          <div
            style={{
              display: "flex",
              marginRight: "50px",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {avatar && <Avatar>{avatar}</Avatar>}
          </div>
        )}
      </div>

      <TextContainer universityStyle={universityStyle}>
        {isDisplayFields.includes("name") && <span className="name">{data.name}</span>}
        {isDisplayFields.includes("university") && data.university && (
          <span className="university">{data.university}</span>
        )}
        {isDisplayFields.includes("specialty") && <span className="specialty">{data.specialty}</span>}
        {isDisplayFields.includes("point") && data.point && (
          <span className="point">{data.point}</span>
        )}
      </TextContainer>
    </StyledCard>
  );
};
export default RankingCard;
