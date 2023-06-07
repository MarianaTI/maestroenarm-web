import NavigationButton from "../components/NavigationButton";
import {
  MenuContainer,
  StyledContainerContent,
  StyledText,
} from "../styles/Home-page.style";
import Layout from "./layout";

const Home = () => {
  return (
    <Layout>
      <MenuContainer>
        <StyledContainerContent>

          <StyledText>
            <span>MODO PRACTICA</span>
            <span>Feedback despues de cada pregunta</span>
          </StyledText>
          
          <NavigationButton page={"/ranking-user"} text={"Por Categoria"} />
          <NavigationButton page={"/ranking-user"} text={"Aleatorio"} disabled/>

          <StyledText>
            <span>MODO MULTIJUGADOR</span>
            <span>Feedback al finalizar el examen</span>
          </StyledText>
          <NavigationButton page={"/ranking-user"} text={"Aleatorio"} />
          <NavigationButton page={"/ranking-user"} text={"Por categoria"} />

          <StyledText>
            <span>MODO PRACTICA</span>
            <span>Feedback despues de cada pregunta</span>
          </StyledText>
          <NavigationButton page={"/ranking-user"} text={"Aleatorio"} />
          <NavigationButton page={"/ranking-user"} text={"Aleatorio"} />

        </StyledContainerContent>
      </MenuContainer>
    </Layout>
  );
};

export default Home;
