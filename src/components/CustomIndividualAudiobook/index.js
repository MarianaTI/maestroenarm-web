import React, { useState, useEffect } from "react";
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
import { saveAs } from "file-saver";
import { CustomButton } from "../CustomButton";
import { useAuth } from "../../context/AuthProvider";
import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore";
import { auth, db } from "../../services/firebase/config";
import { async } from "@firebase/util";


const CustomIndividualAudiobook = ({
  id,
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

  const user = useAuth();
  const [isPurchased, setIsPurchased] = useState(null);

  const dispatch = useDispatch();
  const handleClick = () => {
    const productInfo = {
      id,
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
    } catch (error) {
      console.error('Error descargando el archivo: ', error);
    }
  };

  useEffect(() => {
    if (user) {
      const checkPurchase = async () => {
        const purchasesCollection = collection(db, 'purchases');
        const purchaseQuery = query(purchasesCollection, where('authId', '==', user.user.uid), where('productId', '==', id));
        const querySnapshot = await getDocs(purchaseQuery);

        if (!querySnapshot.empty) {
          setIsPurchased(true);
        }
      }
      checkPurchase();
    }
  }, [user, id]);


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
            isPurchased ? (
              <BuyContainer>
                <CustomButton showIcon onClick={handleDownload} type="button"
                  theme="secondary"/>
              </BuyContainer>
            ) : (
            <BuyContainer>
              <span className="DetailOptionStyled">$ {price}</span>
              <Link href="/academy/shopping-bag/payment-method">
                <CustomButton
                  type="button"
                  theme="secondary"
                  onClick={handleClick}
                >Comprar ahora</CustomButton>
              </Link>
            </BuyContainer>
            )
          ) : (
            <BuyContainer>
              <IncludeContainer>
                <span className="DetailOptionStyled">
                  Incluido en la suscripción
                </span>
              </IncludeContainer>
              <CustomButton showIcon onClick={handleDownload} type="button"
                  theme="secondary"/>
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
