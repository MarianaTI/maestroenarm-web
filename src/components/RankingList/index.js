import Avatar from "../Avatar";
import { StyledList, StyledListItem, StyledTextContainer } from "./index.style";

const RankingList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <StyledList key={index}>
          <StyledTextContainer>
            <Avatar size={"width:50px"}/>
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
