import React, { useState } from "react";
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
import Link from "next/link";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/router";

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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const handleButtonClick = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);

  return (
    <Container>
      <BasicInformationContainer>
        <div>
          <ImageContainer>
            <ImageStyled src={imgFront}></ImageStyled>
            <HoverImage src={imgBack}></HoverImage>
          </ImageContainer>
          <img src="/img/repro.jpg" width={260} />
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
              <Link
                href={"/academy/shopping-bag/payment-method?id=${id}"}
                as={`/academy/shopping-bag/payment-method?id=${id}`}
              >
                <CustomButton buttonText="Comprar ahora" type="button" />
              </Link>
            </BuyContainer>
          ) : (
            <BuyContainer>
              <IncludeContainer>
                <span className="DetailOptionStyled">
                  Incluido en la suscripción
                </span>
              </IncludeContainer>
              <CustomButton showIcon onClick={handleButtonClick} />
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
        >
          Se ha descargado correctamente
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default CustomIndividualAudiobook;
