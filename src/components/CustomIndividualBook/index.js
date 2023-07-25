import React, { useState } from "react";
import CustomButton from "../CustomButtonAcademy";

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
  imgFront,
  imgBack,
  name,
  author,
  topics,
  price,
  details,
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

  return (
    <Container>
      <BasicInformationContainer>
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
            <CustomButton showIcon onClick={handleButtonClick} />
          </BuyContainer>
        )}
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
