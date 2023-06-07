import React from "react";
import {
  BasicInformation,
  BasicInformationContainer,
  BuyContainer,
  Container,
  DetailsContainer,
  MoreDetail,
  Options,
} from "./index.style";
import CustomButton from "../CustomButtonAcademy";

const CustomIndividualAudiobook = ({
  img,
  option,
  name,
  author,
  storyteller,
  duration,
  gender,
  topics,
  price,
  details,
}) => {
  return (
    <Container>
      <BasicInformationContainer>
        <div>
          <img src="./indivualaudiobook.png" />
          <Options />
        </div>
        <div>
          <BasicInformation>
            <span className="NameStyled">{name}</span>
            <span className="DetailOptionStyled">
              Autor: <span className="DetailStyled">{author}</span>
            </span>
            <span className="DetailOptionStyled">
              Narrador: <span className="DetailStyled"> {storyteller}</span>
            </span>
            <span className="DetailOptionStyled">
              Duración: <span className="DetailStyled">{duration}</span>
            </span>
            <span className="DetailOptionStyled">
              Género: <span className="DetailStyled">{gender}</span>
            </span>
            <span className="DetailOptionStyled">
              Temas: <span className="DetailStyled">{topics}</span>
            </span>
          </BasicInformation>
          <BuyContainer>
            <span className="DetailOptionStyled">$ {price}</span>
            <CustomButton buttonText="Comprar ahora" />
          </BuyContainer>
        </div>
      </BasicInformationContainer>
      <MoreDetail>
        <span className="DetailOptionStyled">
          Más detalles del libro: <span className="DetailStyled">{details}</span>
        </span>
      </MoreDetail>
    </Container>
  );
};

export default CustomIndividualAudiobook;
