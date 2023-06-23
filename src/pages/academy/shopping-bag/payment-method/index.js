import React, { useState, useEffect } from "react";
import {
  CardContainer,
  CompletePayment,
  Container,
  FormStyled,
  IconStyled,
  MainContainer,
  PayContainer,
  PaymentContainer,
  RowInputs,
  TitleContainer,
} from "../../../../styles/PaymentMethod.style";
import CustomInput from "../../../../components/CustomInput";
import CustomButtonAcademy from "../../../../components/CustomButtonAcademy";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomShoppingDetails from "../../../../components/CustomShoppingDetails";
import CustomCalculateTotal from "../../../../components/CustomCalculateTotal";

const paymentSchema = yup.object().shape({
  cardName: yup.string().required("Este dato es requerido"),
  cardNumber: yup
    .string()
    .required("Este dato es requerido")
    .matches(
      /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      "Ingresa el número con el formato correcto"
    )
    .max(19),
  expiration: yup
    .string()
    .required("Este dato es requerido")
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Ingresa el número con el formato correcto"
    )
    .max(5),
  cvc: yup
    .string()
    .required("Este dato es requerido")
    .matches(/^\d{3}$/, "Ingresa el número con el formato correcto")
    .min(3)
    .max(4),
});

const formatCardNumber = (value) => {
  return value
    .replace(/[^\d]/g, "")
    .substring(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

const formatExpirationDate = (value) => {
  return value
    .replace(/[^\d]/g, "")
    .substring(0, 4)
    .replace(/(.{2})/, "$1/");
};
export default function PaymentMethod() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleButtonClick = () => setOpenSnackbar(true);
  const handleSnackbarClose = () => setOpenSnackbar(false);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvc: "",
    },
    resolver: yupResolver(paymentSchema),
  });
  const cardNumber = watch("cardNumber");
  const expiration = watch("expiration");
  const cvc = watch("cvc");

  useEffect(() => {
    const formattedCardNumber = formatCardNumber(cardNumber);
    setValue("cardNumber", formattedCardNumber);
  }, [cardNumber, setValue]);

  useEffect(() => {
    const formattedExpirationDate = formatExpirationDate(expiration);
    setValue("expiration", formattedExpirationDate);
  }, [expiration, setValue]);

  useEffect(() => {
    const limitedCvc = cvc.substring(0, 3);
    setValue("cvc", limitedCvc);
  }, [cvc, setValue]);

  const onSubmit = (values) => {
    console.log(values);
  };

  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
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
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                label="Nombre del propietario"
                name="cardName"
                control={control}
                placeholder="Nombre del propietario"
                error={errors.cardName?.message}
              />
              <CustomInput
                label="Número de tarjeta"
                name="cardNumber"
                control={control}
                placeholder="1234 5678 9110 2134"
                error={errors.cardNumber?.message}
                onChange={(event) => {
                  event.target.value = formatCardNumber(event.target.value);
                }}
              />
              <RowInputs>
                <CustomInput
                  label="Fecha de vencimiento"
                  name="expiration"
                  control={control}
                  placeholder="MM/AA"
                  error={errors.expiration?.message}
                />
                <CustomInput
                  label="CVC/CVV"
                  name="cvc"
                  control={control}
                  placeholder="CVC"
                  error={errors.cvc?.message}
                />
              </RowInputs>
            </FormStyled>
          </CardContainer>
        </PayContainer>
        <CustomShoppingDetails
          productName="Nombre del producto"
          productTopics="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          productPrice="0.00"
        />
      </div>
      <PaymentContainer>
        <CompletePayment>
          <CustomCalculateTotal />
          <span className="DetailText">
            Al completar la compra, aceptas estas{" "}
            <Link href="#" className="LinkText">
              Condiciones de uso.
            </Link>
          </span>
          <CustomButtonAcademy
            buttonText="Completar pago"
            onClick={handleButtonClick} 
          />
        </CompletePayment>
      </PaymentContainer>
    </Container>
  );
}
