import styled from "@emotion/styled"

export const Container = styled.div`
   max-width: 100%;
   h1 {
    text-align: center;
    color: #052970;
    margin: 10px;
   }
   button {
    justify-content: center;
   }
`;
export const CardPlans = styled.div`
   display: flex;
   justify-content: center;
`;

export const Cards = styled.div`
   background-color: #f4f4f4;
   margin: 30px;
   width: 350px;
   padding: 50px;
   border-radius: 20px;
   box-shadow: 2px 1px 4px 3px  rgba(0, 0, 0, 0.3);
   hr {
    
   }
   h5 {
      font-size: 15px ;
      margin: 0px;
   }
   span {
      font-size: 13px;
      text-align: center;
   }
   h1 {
      margin: 0px;
   }
`;
export const Button = styled.button`
   width: 200px;
   background-color: #052970;
   color: #fff;
`;
export const OpenModalButton = styled.button`
  font-size: 10px;
  font-family: "Poppins";
  font-weight: 600;
  display: inline;
  background: none;
  border: none;
  cursor: pointer;
`;



