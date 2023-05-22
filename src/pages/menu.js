import { Typography, Button } from "@mui/material";
import { MenuContainer, StyledButton } from "../styles/menu.style";
import Navigation from "../components/nabvar";

const Menu = () => {
  return (
    <MenuContainer>
      <Navigation></Navigation>
      <Typography>MODO PRACTICA</Typography>
        <span>Feedback despues de cada pregunta</span>

        <StyledButton variant="contained">Aleatorio</StyledButton>
        <StyledButton variant="contained" disabled>
          Por categoria
        </StyledButton>

        <div style={{ marginBottom: "30px" }} />

        <Typography>MODO MULTIJUGADOR</Typography>
        <span>Feedback al finalizar la pregunta</span>

        <StyledButton variant="contained">Aleatorio</StyledButton>
        <StyledButton variant="contained" disabled>
          Por categoria
        </StyledButton>

        <div style={{ marginBottom: "30px" }} />

        <Typography>MODO COMPETITIVO</Typography>
        <span>Feedback al finalizar la pregunta</span>

        <StyledButton variant="contained">Aleatorio</StyledButton>
        <StyledButton variant="contained" disabled>
          Por categoria
        </StyledButton>

    </MenuContainer>
  );
};

export default Menu;
