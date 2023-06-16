import React from "react";
import { CardCategorie, Container } from "./index.style";

const CustomCategories = () => {
  return (
    <Container>
      <CardCategorie>
        <img src="./video.png"/>
        <p>Videos</p>
      </CardCategorie>
      <CardCategorie>
        <img src="./audiolibro.png"/>
        <p>Audiolibros</p>
      </CardCategorie>
      <CardCategorie>
        <img src="./libro.png"/>
        <p>Libros</p>
      </CardCategorie>
    </Container>
  );
};

export default CustomCategories;
