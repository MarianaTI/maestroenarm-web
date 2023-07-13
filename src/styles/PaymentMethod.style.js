import styled from "@emotion/styled";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

export const ContainerForm = styled.form`
  height: 100%;
  padding: 16px;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  overflow-x: hidden; 
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 400px) {
    padding: 0px;
  }
`;

export const MainContainer = styled.div`
  margin: 8px;
  color: #2d3648;
  & h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & span {
    font-size: 16px;
    display: block;
    width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  }
  @media (max-width: 400px) {
    width: 320px;
  }
`;
export const PayContainer = styled.div`
  margin: 32px 8px;
  color: #2d3648;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 400px) {
    margin: 0px 0px;
  }
`;
export const CardContainer = styled.div`
  width: 600px;
  border: 3px solid #484a84;
  border-radius: 15px;
  margin: 16px 8px;
  position: relative;
  overflow: hidden;
  @media (max-width: 400px) {
    margin: 8px 0px;
    width: 350px;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 3px solid #484a84;
  top: 0;
  height: 40px;
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  align-items: center;
  justify-content: start;
  display: flex;
  & span {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const IconStyled = styled(PaymentOutlinedIcon)`
  margin: 24px;
`;

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const RowInputs = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const DetailContainer = styled.div`
  margin: 8px;
  color: #2d3648;
  width: 500px;
  & span {
    font-size: 22px;
    font-weight: 700;
  }
  .ImportantText {
    font-size: 16px;
    font-weight: 600;
    padding: 16px 4px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
  .DetailText {
    font-size: 14px;
    padding: 0px 4px;
    width: 280px;
    @media (max-width: 400px) {
      padding: 8px 0px;
    }
  }
`;


export const PaymentContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: start;
  }
  @media (max-width: 400px) {
    justify-content: start;
    margin-left: 24px;
  }
`;

export const CompletePayment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 8px;
  width: 280px;
  @media (max-width: 800px) {
    padding: 16px 0px;
  }
  & span {
    padding: 0px 6px;
  }
  .DetailText {
    font-size: 14px;
    font-weight: 500;
    padding: 16px 0px;
    margin-left: 16px;
  }
  .LinkText {
    font-size: 14px;
    font-weight: 500;
    color: #3a3b69;
    text-decoration: underline;
  }
`;
