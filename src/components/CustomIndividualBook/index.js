import React from "react";
import CustomButton from "../CustomButtonAcademy";
import {
  BasicInformation,
  BasicInformationContainer,
  BuyContainer,
  Container,
  MoreDetail,
} from "./index.style";

const CustomIndividualBook = ({
  img,
  name,
  author,
  topics,
  price,
  details,
}) => {
  return (
    <Container>
      <BasicInformationContainer>
        <div>
          <img src="./indivualaudiobook.png" />
          {price > 0.00 ? (
            <BuyContainer>
              <span>$ {price}</span>
              <CustomButton buttonText="Comprar ahora" type="button" />
            </BuyContainer>
          ) : (
            <BuyContainer>
              <span>$ {price}</span>
              <CustomButton showIcon />
            </BuyContainer>
          )}
        </div>
        <div>
          <BasicInformation>
            <div className="NameStyled">{name}</div>
            <div className="DetailOptionStyled">
              Autor: <span className="DetailStyled">{author}</span>
            </div>
            <div className="DetailOptionStyled">
              Temas: <span className="DetailStyled">{topics}</span>
            </div>
          </BasicInformation>
        </div>
      </BasicInformationContainer>
      <MoreDetail>
        <div className="DetailOptionStyled">
          Más detalles del libro:
          <span className="DetailStyled">{details}</span>
        </div>
      </MoreDetail>
    </Container>
  );
};

export default CustomIndividualBook;
