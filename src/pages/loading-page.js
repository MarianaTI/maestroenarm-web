import Image from "next/image";
import { Container, BoxStyled } from "../styles/LoadingPage.style";

export default function LoadingPage() {
  return (
    <Container>
      <BoxStyled>
        <h1>Maestro ENARM Academy</h1>
        <Image src="/img/loading.svg" width={300} height={200} alt=""/>
        <div>
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
      </BoxStyled>
    </Container>
  );
}
