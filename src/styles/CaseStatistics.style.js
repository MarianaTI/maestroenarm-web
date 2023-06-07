import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    background-color: white;
    width:100%;
    height: 100vh;
    padding:64px 32px;
    justify-content: space-between;   
`;

export const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 822px;
    margin: 0 auto;
    gap: 50px;
    margin-bottom: 40px
   
`;

export const StyleText = styled.div`
    font-Weight: bold;
    text-align: center;
    font-family: "Poppins";
    margin-top: -28px;
    margin-left: auto;
`;

export const StyledCards = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 32px;
  width: 411px;
  height: 165px;
  box-shadow: 0 5px 10px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;



export const StyledLine = styled.div`
  width: 60%;
  height: 2px;
  background-color: rgb(16, 10, 95);
  border-radius: 0px;
  margin: 0 auto;
  margin-bottom: 40px;
  border: none;
`;


export const StyledTextContainer = styled.div`
  gap: 10px;
  font-family: "Poppins";
  font-size: 20px; 
  color: #000000;;
  padding-left: 10vw; 
  display: grid;
  grid-template-columns: auto auto auto; 
`;


export const StyledCardCategory = styled.div`
  background-color: rgb(192, 192, 207);
  width: 464px;
  height: 72px;
  margin-left: auto;
  box-shadow: 0 5px 5px  rgba(0, 0, 0, 0.1);
  & p{
    padding-right: 320px;
    margin-top: 25px;
    font-size: medium;
  }
`;
