import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import {
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
import CustomButtonAcademy from "../../../../components/CustomButtonAcademy";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import CustomShoppingDetails from "../../../../components/CustomShoppingDetails";
import CustomCalculateTotal from "../../../../components/CustomCalculateTotal";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NQEZFEgjOGrqMGrKaOwcNLpCuvostnvfCEvigbYUI8tFogD1Jv2PVoQfFaiD77tOhF1Zyh4vYoasX7bABG6QtOK00qDnV4jat"
);

const paymentSchema = yup.object().shape({
  cardName: yup.string().required("Este dato es requerido"),
});


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Retorna si Stripe no ha cargado aún.
    }

    console.log("Form Values:", values); // Aquí imprimimos los datos del formulario.

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("Error al crear el método de pago:", error);
    } else {
      console.log("Método de pago creado:", paymentMethod);
      
        
    }
  };

  const product = useSelector((state) => state.product.currentProduct);
  

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
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "14px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
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
  );
}

export default function PaymentMethod() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}