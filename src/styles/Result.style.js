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
    font-feature-settings: 'calt' off;
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
     margin-left: 10%;
    @media (max-width: 768px) {
        margin-left: 5%;
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
    box-sizing: border-box;
    position: absolute;
    width: 90%;
    max-width: 1020px;
    background: #FCFCFC;
    border: 0.5px solid #585555;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: auto;
  
    
    & span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        letter-spacing: -0.01em;
        font-feature-settings: 'calt' off;
        margin: 1.2%;
        margin-left: 3%;
    }
    & span:nth-of-type(1) {
        display: flex;
        color: #000000;
    }
    & span:nth-of-type(2) {
        font-size: 16px;
        display: inline;
        color: rgba(0, 0, 0, 0.5);
    }
    & span:nth-of-type(3) {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
        margin-left: 78%;
    }

    @media (max-width: 995px) {
    width: 90%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px;

    & span:nth-of-type(1),
    & span:nth-of-type(2),
    & span:nth-of-type(3) {
      font-size: 14px;
      margin: 4px;
    }
   }

    @media (max-width: 768px) {
        width: 90%;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        padding: 8px;

        & span:nth-of-type(1),
        & span:nth-of-type(2),
        & span:nth-of-type(3) {
            font-size: 14px;
            margin: 4px;
        }
    }
`;

export const ReturnDemoButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
`;


export const TextStatic = styled.div`
  margin-top: 12%;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 900px;
  margin-left: 3%;

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


