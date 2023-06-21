import {
  AcceptPaymentContainer,
  CalculateTotalContainer,
  CardContainer,
  CompletePayment,
  Container,
  DetailContainer,
  FormStyled,
  IconStyled,
  Line,
  MainContainer,
  PayContainer,
  Row,
  RowInputs,
  TitleContainer,
} from "../../../../styles/PaymentMethod.style";
import CustomInput from "../../../../components/CustomInput";
import CustomButton from "../../../../components/CustomButtonAcademy";
import { useForm } from "react-hook-form";

export default function PaymentMethod({
  productName,
  productDetails,
  productPrice,
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

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
            <FormStyled>
              <CustomInput
                label="Nombre del propietario"
                name="name"
                control={control}
                placeholder="Nombre del propietario"
              />
              <CustomInput
                label="Número de tarjeta"
                name="card-number"
                control={control}
                placeholder="1234 5678 9110 2134"
              />
              <RowInputs>
                <CustomInput
                  label="Fecha de vencimiento"
                  name="name"
                  control={control}
                  placeholder="MM/AA"
                />
                <CustomInput
                  label="CVC/CVV"
                  name="card-number"
                  control={control}
                  placeholder="CVC"
                />
              </RowInputs>
            </FormStyled>
          </CardContainer>
        </PayContainer>
        <DetailContainer>
          <span>Detalles de la compra</span>
          <Row>
            <p className="ImportantText">{productName} Nombre del producto</p>
            <p className="ImportantText">$ {productPrice} 0.00</p>
          </Row>
          <p className="DetailText">
            {productDetails} Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </DetailContainer>
      </div>
      <CompletePayment>
        <AcceptPaymentContainer>
          <span>Resumen</span>
          <CalculateTotalContainer>
            <Row>
              <p>Precio original:</p>
              <p>$ 0.00 MX</p>
            </Row>
            <Row>
              <p>Descuento:</p>
              <p>- $ 0.00 MX</p>
            </Row>
            <Line></Line>
          <Row>
            <p className="ImportantText">Total:</p>
            <p className="ImportantText">$ 0.00 MX</p>
          </Row>
          <span className="DetailText">Al completar la compra, aceptas estas Condiciones de uso.</span>
          <CustomButton buttonText="Completar pago"/>
          </CalculateTotalContainer>
        </AcceptPaymentContainer>
      </CompletePayment>
    </Container>
  );
}
