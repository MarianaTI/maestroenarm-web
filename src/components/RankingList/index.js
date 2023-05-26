import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { StyledList, StyledTextContainer } from "./index.style";

const RankingList = ({ data }) => {
  return (
    <>
      {data.map((data, index) => (
        <StyledList key={index}>
          <StyledTextContainer>
            <NumbersIcon></NumbersIcon>
            <span>{index + 4}</span>
            <Avatar size={"50px"} />
            <span>{data.name}</span>
            <span>{data.specialty}</span>
            <span>{data.point}</span>
          </StyledTextContainer>
        </StyledList>
      ))}
    </>
  );
};
export default RankingList;
