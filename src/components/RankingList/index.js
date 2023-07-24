import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { StyledPosition, StyledTextContainer } from "./index.style";

const RankingList = ({
  ranked_number,
  name,
  university = 'none',
  specialty,
  score = 'none',
  avatar,
}) => {
  return (
    <StyledTextContainer>
      <div className="profile-container">
        <StyledPosition>
          <NumbersIcon className="icon"></NumbersIcon>
          <span>{ranked_number}</span>
        </StyledPosition>
        {avatar && <Avatar size={"50px"}>{avatar}</Avatar>}
        <span className="name">{name}</span>
      </div>
      <span >{university}</span>
      {specialty && <span >{specialty}</span>}
      <span >{score}</span>
    </StyledTextContainer>
  );
};
export default RankingList;
