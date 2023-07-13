import styled from "@emotion/styled";

export const TextContainerResult = styled.div`
  margin: 2%;
  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    letter-spacing: -0.01em;
  }
  @media (max-width: 768px) {
    margin: 1%;
    font-size: 18px;

    & span:nth-of-type(1),
    & span:nth-of-type(2),                                          
    & span:nth-of-type(3) {
      font-size: 14px;
      margin: 4px;
    }
  }

  @media (max-width: 995px) {
    margin: 1%;
    font-size: 18px;

    & span:nth-of-type(1),
    & span:nth-of-type(2),
    & span:nth-of-type(3) {
      font-size: 16px;
      margin: 6px;
    }
  }
`;

export const Container = styled.div`
     padding-top: 15px;
    @media (max-width: 768px) {
        margin-left: 5%;
    }
`;

export const ContainerSpecialty = styled.div`
     padding-left: 10%;
     padding-right: 10%;
    @media (max-width: 768px) {
      padding-left: 5%;
      padding-right: 5%;
    }
`;


export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position:relative;
`;

export const ContainerRetroAlim = styled.div`
    background: #FCFCFC;
    border: 0.5px solid #585555;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export const ReturnDemoButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
`;


export const TextStatic = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 900px;
  padding-left: 3%;
  padding-top: 15px;

  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    text-align: center;
    width: 50%; 
    color: rgba(0, 0, 0, 1);
    font-size: 16px;
    padding: 5px;
  }

  & span:nth-of-type(2n) {
    margin-left: auto; 
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
    margin-left: 1%;

    & span {
      font-size: 14px;
      margin: 2px;
      width: 100%; 
    }

    & span:nth-of-type(2n) {
      margin-left: 0; 
    }
  }

`;

export const ReturnButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ContainerCustomModal = styled.div`
  overflow: auto;
  max-height: 300px;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #093e8f;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  & span:nth-of-type(1){
    display: flex;
    justify-content: center;
    color: #052970;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    padding: 5px;
  }

  & span:nth-of-type(2){
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
  }

  & span:nth-of-type(3){
    display: flex;
    justify-content: center;
    padding: 15px;
  }
`;
