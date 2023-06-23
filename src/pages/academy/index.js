import {
  PrincipalContainer,
  StyledCard,
  GridForm,
  ButtonContainer,
  Container,
  CategoriesContainer,
  ImageStyled,
} from "../../styles/PrincipalPage.style";
import CustomButton from "../../components/CustomButtonAcademy";
import CustomCategories from "../../components/CustomCategories";
import Link from "next/link";

export default function Academy() {
  return (
    <Container>
      <PrincipalContainer>
        <GridForm>
          <StyledCard>
            <h1>ENARM Academy</h1>
            <span>
              Most fonts have a particular weight which corresponds. <br />{" "}
              However some fonts.
            </span>
            <p>
              However some fonts, called variable fonts, can support a range of
              weights with a more or less fine granularity, and this can give
              the designer a much closer degree of control over the chosen
              weight.
            </p>
            <ButtonContainer>
              <Link href="/academy/shopping-bag/payment-method">
                <CustomButton buttonText="¡Suscríbete ahora!" />
              </Link>
            </ButtonContainer>
          </StyledCard>
        </GridForm>
        <ImageStyled
          src="/img/medicine.svg"
          width={600}
          height={400}
          alt="academy-img"
        />
      </PrincipalContainer>
      <CategoriesContainer>
        <span>Most fonts have a particular weight which corresponds.</span>
        <CustomCategories />
      </CategoriesContainer>
    </Container>
  );
}
