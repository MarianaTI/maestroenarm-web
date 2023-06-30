import styled from "@emotion/styled";

export const ButtonQuestion = styled.button`
  margin: 10px;
  width: 550px;
  background-color: #f4f4f4;
  border-radius: 10px;
  height: 65px;
  border: 1px solid #cccccc;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 40px;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
  }
`;
export const IconContainer = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
export const TextQuestion = styled.p`
  font-family: "Poppins";
  width: 550px;
  margin: 0px 10px 0px 10px;
`;
export const Text = styled.p`
  font-family: "Poppins";
  font-size: 17px;
  text-align: left;
`;
