import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "../components/CustomButton";
import { LandingContainer } from "../styles/demo.style";


export default function Landing() {
  return <>
    <LandingContainer>
      <Image src="/beam-woman-sitting-at-desk-and-programming.gif" alt="banner" height={500} width={500} />
      <div className="content">
        <div>
          <h1>Bienvenido a Maestro Enarm</h1>
          <p>Aprende divirtiendote, compite con amigos, encuentra recursos de estudio y mucho mas.</p>
        </div>
        <div className="button__container">
          <Link href="/demo">
            <CustomButton>probar demo</CustomButton>
          </Link>
          <Link href="/sesion">
            <CustomButton>crear cuenta</CustomButton>
          </Link>

        </div>
      </div>
    </LandingContainer>
  </>

}