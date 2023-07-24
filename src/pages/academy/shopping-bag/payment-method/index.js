import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import {
  ButtonStyledPayment,
  CardContainer,
  CompletePayment,
  ContainerForm,
  FormStyled,
  IconStyled,
  MainContainer,
  PayContainer,
  PaymentContainer,
  TitleContainer,
} from "../../../../styles/PaymentMethod.style";
import CustomInput from "../../../../components/CustomInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import CustomShoppingDetails from "../../../../components/CustomShoppingDetails";
import CustomCalculateTotal from "../../../../components/CustomCalculateTotal";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import CustomModal from "../../../../components/CustomModal";
import { CustomButton } from "../../../../components/CustomButton";

const stripePromise = loadStripe(
  "pk_test_51NQEZFEgjOGrqMGrKaOwcNLpCuvostnvfCEvigbYUI8tFogD1Jv2PVoQfFaiD77tOhF1Zyh4vYoasX7bABG6QtOK00qDnV4jat"
);

const paymentSchema = yup.object().shape({
  cardName: yup.string().required("Este dato es requerido"),
});

const CheckoutForm = () => {
  const [openSnackbarSucceeded, setOpenSnackbarSucceeded] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [isOpenConditions, setIsOpenConditions] = useState(false);

  const toggleConditions = () => {
    setIsOpenConditions(true);
  };

  const stripe = useStripe();
  const elements = useElements();

  const product = useSelector((state) => state.product.currentProduct);

  const totalAmount = product.price;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardName: "",
    },
    resolver: yupResolver(paymentSchema),
  });

  const onSubmit = async (formData) => {
    if (!stripe || !elements) {
      return; // Retorna si Stripe no ha cargado aún.
    }
    localStorage.setItem("product", JSON.stringify(product));
    const CARD_ELEMENT_OPTIONS = {
      hidePostalCode: true, // Aquí puedes establecer opciones adicionales
    };

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement, CARD_ELEMENT_OPTIONS),
      billing_details: {
        name: formData.cardName,
      },
    });
    console.log("Payment Method:", paymentMethod);

    if (error) {
      console.log("Error al crear el método de pago:", error);
    } else {
      const { id } = paymentMethod;
      try {
        const response = await fetch("http://localhost:3001/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            amount: totalAmount * 100, //cents
          }),
        });

        if (response.ok) {
          if (
            response.headers.get("content-type")?.includes("application/json")
          ) {
            const data = await response.json();
            console.log(data);
            setOpenSnackbarSucceeded(true);
          } else {
            console.log("Pago exitoso, pero no se devolvió ningún contenido");
          }
        } else {
          const errorData = await response.json();
          console.log("Error en la solicitud:", response.status, errorData);
          setOpenSnackbarError(true);
        }
      } catch (error) {
        console.log("Error en la solicitud:", error);
        setOpenSnackbarError(true);
      }
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbarSucceeded(false);
    setOpenSnackbarError(false);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MainContainer>
          <h1>Continua con tu compra</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </MainContainer>
        <PayContainer>
          <span>Método de pago</span>
          <CardContainer>
            <TitleContainer>
              <IconStyled />
              <span>Tarjeta de crédito/débito</span>
            </TitleContainer>
            <FormStyled>
              <CustomInput
                label="Nombre del propietario"
                name="cardName"
                control={control}
                placeholder="Nombre del propietario"
                error={errors.cardName?.message}
              />
              <span>Agrega los datos de tu tarjeta</span>
              <CardElement className="card-number-styled" />
            </FormStyled>
          </CardContainer>
        </PayContainer>
        <CustomShoppingDetails
          productName={product.name}
          productTopics={product.topics}
          productPrice={product.price}
        />
      </div>
      <PaymentContainer>
        <CompletePayment>
          <CustomCalculateTotal
            originalPrice={product.price}
            totalPrice={product.price}
          />
          <span className="DetailText">
            Al completar la compra, aceptas estas{" "}
            <Link href="#" className="LinkText" onClick={toggleConditions}>
              Condiciones de uso.
            </Link>
          </span>
          <CustomButton theme="secondary" type="submit" disabled={!stripe}>
            Completar pago
          </CustomButton>
        </CompletePayment>
      </PaymentContainer>
      <Snackbar
        open={openSnackbarSucceeded}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
        >
          El pago se creó correctamente
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSnackbarError}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error" variant="filled">
          Error en el pago
        </Alert>
      </Snackbar>
      <CustomModal
        open={isOpenConditions}
        onClose={() => setIsOpenConditions(false)}
        title="Condiciones de uso"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </CustomModal>
    </ContainerForm>
  );
};

export default function PaymentMethod() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
