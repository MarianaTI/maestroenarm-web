import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { StyledList, StyledPosition, StyledTextContainer } from "./index.style";

const defaultDisplay = ["name", "university", "specialty", "point"];
const RankingList = ({
  data,
  avatar,
  styledText = {},
  isDisplayFields = defaultDisplay,
}) => {
  return (
    <>
      {data.map((data, index) => (
        <StyledList key={index}>
          <StyledTextContainer styledText={styledText}>
            <StyledPosition>
              <NumbersIcon className="icon"></NumbersIcon>
              <span>{index + 4}</span>
            </StyledPosition>

            {avatar && <Avatar size={"50px"}>{avatar}</Avatar>}

            {isDisplayFields.includes("name") && (
              <span className="name">{data.name}</span>
            )}
            {isDisplayFields.includes("university") && (
              <span className="university">{data.university}</span>
            )}
            {isDisplayFields.includes("specialty") && (
              <span className="specialty">{data.specialty}</span>
            )}
            {isDisplayFields.includes("point") && (
              <span className="point">{data.point}</span>
            )}
          </StyledTextContainer>
        </StyledList>
      ))}
    </>
  );
};
export default RankingList;
