import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect } from "react";
import {
  CardContainer,
  CompletePayment,
  ContainerForm,
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
import CustomShoppingDetails from "../../../../components/CustomShoppingDetails";
import CustomCalculateTotal from "../../../../components/CustomCalculateTotal";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NQEZFEgjOGrqMGrKaOwcNLpCuvostnvfCEvigbYUI8tFogD1Jv2PVoQfFaiD77tOhF1Zyh4vYoasX7bABG6QtOK00qDnV4jat');


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

  const onSubmit = async (values) => {
    if (!stripe || !elements) {
        return; // retorna si Stripe no ha cargado aún.
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
        console.log('[error]', error);
    } else {
        console.log('[PaymentMethod]', paymentMethod);
        // Aquí puedes enviar `paymentMethod.id` a tu servidor para procesar el pago.
    }
};


  const product = useSelector((state) => state.product.currentProduct);

  return (
    <Elements stripe={stripePromise}>
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
              <CardElement options={{
                  style: {
                    base: {
                      fontSize: '14px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }} />
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
            <Link href="#" className="LinkText">
              Condiciones de uso.
            </Link>
          </span>
          <CustomButtonAcademy buttonText="Completar pago" type="submit" />
        </CompletePayment>
      </PaymentContainer>
    </ContainerForm>
    </Elements>
  );
}
