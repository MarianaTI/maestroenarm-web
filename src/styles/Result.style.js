import styled from "@emotion/styled";

export const TextContainerResult = styled.div`
  margin: 2%;
  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01em;
    font-feature-settings: 'calt' off;
  }
`;

export const Container = styled.div`
    width: 620px;
    margin-left: 10%;
`;

export const ContainerResult = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 1020px;
    height: 90px;
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
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01em;
    font-feature-settings: 'calt' off;
    margin: 1.4%;
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
`;

export const TextStatic = styled.div`
    margin-top: 112px;
    display: flex;
  width: 900px;
  margin-left: 3%;

  
 & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.01em;
    font-feature-settings: 'calt' off;
   
   
  }
  & span:nth-of-type(1) {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
  & span:nth-of-type(2) {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    margin-left: 78%;
  }
`;

export const Buttom = styled.div`
margin:16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  margin-left: 50%;
  
    width: 397px;
    height: 46px;
    left: 448px;
    top: 852px;
    background: #052970;
    border-radius: 15px;

    & span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    font-feature-settings: 'calt' off;
    color: #FFFFFF;
  } 
`;