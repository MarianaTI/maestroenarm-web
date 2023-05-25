import Avatar from "../Avatar";
import NumbersIcon from "@mui/icons-material/Numbers";
import { StyledList, StyledTextContainer } from "./index.style";

const RankingList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <StyledList key={index}>
          <StyledTextContainer>
            <NumbersIcon></NumbersIcon>
            <span>{index + 4}</span>
            <Avatar size={"50px"} />
            <span>{user.username}</span>
            <span>{user.specialty}</span>
            <span>{user.point}</span>
          </StyledTextContainer>
        </StyledList>
      ))}
    </>
  );
};
export default RankingList;
