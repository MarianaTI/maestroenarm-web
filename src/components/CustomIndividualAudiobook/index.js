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
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../store/slices/productSlice";
import { saveAs } from "file-saver";

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
  audio,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleButtonClick = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    const productInfo = {
      name,
      topics,
      price,
    };
    dispatch(setCurrentProduct(productInfo));
  };

  const handleDownload = async () => {
    try {
      const audioDownload = await fetch(audio).then(download => download.blob());
      saveAs(audioDownload, 'audiolibro.mp3');
      setOpenSnackbar(true);
    } catch(error) {
      console.error('Error descargando el archivo: ', error);
    }
  };

  return (
    <Container>
      <BasicInformationContainer>
        <div>
          <ImageContainer>
            <ImageStyled src={imgFront} alt="front"></ImageStyled>
            <HoverImage src={imgBack} alt="back"></HoverImage>
          </ImageContainer>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
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
              Temas:{" "}
              <span className="DetailStyled">
                {topics.join(", ").toLowerCase()}
              </span>
            </div>
          </BasicInformation>
          {price > 0.0 ? (
            <BuyContainer>
              <span className="DetailOptionStyled">$ {price}</span>
              <Link href="/academy/shopping-bag/payment-method">
                <CustomButton
                  buttonText="Comprar ahora"
                  type="button"
                  onClick={handleClick}
                />
              </Link>
            </BuyContainer>
          ) : (
            <BuyContainer>
              <IncludeContainer>
                <span className="DetailOptionStyled">
                  Incluido en la suscripción
                </span>
              </IncludeContainer>
              <CustomButton showIcon onClick={handleDownload} />
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
