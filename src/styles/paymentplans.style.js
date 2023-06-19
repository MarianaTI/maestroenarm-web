import styled from "@emotion/styled"

export const Container = styled.div`
   max-width: 100%;
   padding: 88px;
   h1 {
    text-align: center;
    color: #052970;
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
   margin: 40px;
   width: 350px;
   padding: 50px;
   border-radius: 20px;
   box-shadow: 2px 1px 4px 3px  rgba(0, 0, 0, 0.3);
   hr {
    
   }
   h5 {
      font-size: 15px ;
   }
   span {
      font-size: 10px;
   }
`;
export const Button = styled.button`
   width: 200px;
   background-color: #052970;
   color: #fff;
`;
export const OpenModalButton = styled.button`
  padding-left: 16px;
  font-size: 14px;
  font-family: "Poppins";
  color: #052970;
  font-weight: 600;
  display: inline;
  background: none;
  border: none;
  cursor: pointer;
`;



