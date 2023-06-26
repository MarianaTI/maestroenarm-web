import styled from "@emotion/styled"

export const Container = styled.div`
   max-width: 100%;
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
   background-color: #f4f4f4;
   margin: 30px;
   width: 350px;
   padding: 50px;
   border-radius: 20px;
   box-shadow: 2px 1px 4px 3px  rgba(0, 0, 0, 0.3);
   flex-direction: column;
   h5 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
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


