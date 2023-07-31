import React, { useState } from "react";
import CustomButton from "../CustomButtonAcademy";
import { saveAs } from "file-saver";

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
import Link from "next/link";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../store/slices/productSlice";

const CustomIndividualBook = ({
  id,
  type,
  imgFront,
  imgBack,
  name,
  author,
  topics,
  price,
  details,
  resource_type,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleButtonClick = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    const productInfo = {
      id,
      type,
      name,
      topics,
      price,
      imgFront,
      resource_type,
    };
    dispatch(setCurrentProduct(productInfo));
  };

  const handleDownload = async () => {
    try {
      const audioDownload = await fetch('https://profilebooks.com/wp-content/uploads/wpallimport/files/PDFs/9781847657862_preview.pdf').then((download) =>
        download.blob()
      );
      saveAs(audioDownload, "libro.pdf");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error descargando el archivo: ", error);
    }
  };


  return (
    <Container>
      <BasicInformationContainer>
        <containerImageAndSpan>
          <ImageContainer>
            <ImageStyled src={imgFront}></ImageStyled>
            <HoverImage src={imgBack}></HoverImage>
          </ImageContainer>
          {price > 0.0 ? (
            <BuyContainer>
              <span>$ {price}</span>
              <Link href="/academy/shopping-bag/payment-method">
                <CustomButton buttonText="Comprar ahora" type="button" onClick={handleClick} />
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
        </containerImageAndSpan>

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

export default CustomIndividualBook;
