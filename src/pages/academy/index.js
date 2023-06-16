import {
  GridImage,
  PrincipalContainer,
  StyledCard,
  GridForm,
  ButtonContainer,
  Container,
  CategoriesContainer,
} from "../../styles/PrincipalPage.style";
import CustomButton from "../../components/CustomButtonAcademy";
import CustomCategories from "../../components/CustomCategories";

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
              <CustomButton buttonText="¡Suscríbete ahora!" />
            </ButtonContainer>
          </StyledCard>
        </GridForm>
        <GridImage />
      </PrincipalContainer>
      <CategoriesContainer>
        <span>Most fonts have a particular weight which corresponds.</span>
        <CustomCategories />
      </CategoriesContainer>
    </Container>
  );
}
