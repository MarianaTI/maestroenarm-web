import React from "react";
import {
  BasicInformation,
  BasicInformationContainer,
  BuyContainer,
  Container,
  HoverImage,
  ImageContainer,
  ImageStyled,
  IncludeContainer,
  MoreDetail,
} from "./index.style";
import CustomButton from "../CustomButtonAcademy";

const CustomIndividualAudiobook = ({
  imgFront,
  imgBack,
  name,
  author,
  storyteller,
  duration,
  topics,
  price,
  details,
}) => {
  return (
    <Container>
      <BasicInformationContainer>
        <div>
          <ImageContainer>
            <ImageStyled src={imgFront}></ImageStyled>
            <HoverImage src={imgBack}></HoverImage>
          </ImageContainer>
          <img src="/img/repro.jpg" width={260}/>
        </div>
        <div>
          <BasicInformation>
            <div className="NameStyled">{name}</div>
            <div className="DetailOptionStyled">
              Autor: <span className="DetailStyled">{author}</span>
            </div>
            <div className="DetailOptionStyled">
              Narrador: <span className="DetailStyled"> {storyteller}</span>
            </div>
            <div className="DetailOptionStyled">
              Duración: <span className="DetailStyled">{duration}</span>
            </div>
            <div className="DetailOptionStyled">
              Temas: <span className="DetailStyled">{topics}</span>
            </div>
          </BasicInformation>
          {price > 0.0 ? (
            <BuyContainer>
              <span className="DetailOptionStyled">$ {price}</span>
              <CustomButton buttonText="Comprar ahora" type="button" />
            </BuyContainer>
          ) : (
            <BuyContainer>
              <IncludeContainer>
                <span className="DetailOptionStyled">
                  Incluido en la suscripción
                </span>
              </IncludeContainer>
              <CustomButton showIcon />
            </BuyContainer>
          )}
        </div>
      </BasicInformationContainer>
      <MoreDetail>
        <div className="DetailOptionStyled">
          Más detalles del libro:{" "}
          <span className="DetailStyled">{details}</span>
        </div>
      </MoreDetail>
    </Container>
  );
};

export default CustomIndividualAudiobook;
