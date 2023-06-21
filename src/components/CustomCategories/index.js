import React from "react";
import { CardCategorie, Container, ImageStyled } from "./index.style";
import { Link } from "@mui/material";

const CustomCategories = () => {
  return (
    <Container>
      <Link href="/academy/videos" underline="none">
        <CardCategorie>
          <ImageStyled src="/img/videosoption.svg" width={200} height={200}/>
          <p>Videos</p>
        </CardCategorie>
      </Link>
      <Link href="/academy/audiobooks" underline="none">
        <CardCategorie>
          <ImageStyled src="/img/podcastoption.svg" width={130} height={200}/>
          <p>Audiolibros</p>
        </CardCategorie>
      </Link>
      <Link href="/academy/books" underline="none">
        <CardCategorie>
          <ImageStyled src="/img/booksoption.svg" width={150} height={200}/>
          <p>Libros</p>
        </CardCategorie>
      </Link>
    </Container>
  );
};

export default CustomCategories;
