import styled from "@emotion/styled"

export const Container = styled.div`
   h1 {
    text-align: center;
    color: #052970;
    margin: 10px;
   }
   @media (max-width: 600px) {
      font-size: 15px;
   }
`;
export const CardPlans = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const Cards = styled.div`
   margin: 30px;
   width: 350px;
   padding: 50px;
   border-radius: 8px;
   box-shadow: 2px 6px 10px 2px  rgba(4, 4, 4, 0.2);
   h5 {
      display: flex;
      align-items: center;
      font-size: 16px;
      margin: 0;
      white-space: nowrap;
   }
   span {
    display: flex;
    text-align: justify;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    white-space: nowrap;

   }
   h1 {
      margin: 0px;
   }
   @media (max-width: 600px) {
      width: 100%;
      margin: 10px;
   }
`;
export const OpenModalButton = styled.button`
  font-size: 13px;
  font-family: "Poppins";
  justify-content: center;
  padding: 10px;
  font-weight: 600;
  display: inline;
  background: none;
  border: none;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
export const ReturnButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
`;


