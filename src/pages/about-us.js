import {AboutContainer, Container, ImageStyle, AvatarsContainer, AboutCard} from "../styles/about-us.style"
import Avatar from "../components/Avatar";
import Layout from "../pages/layout"
const aboutUs = () => {
    return(
          <Container>
            <Layout/>
            <h1>Sobre nosotros</h1>
            <AboutContainer>
                <p>"Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <ImageStyle src="./sobrenosotros2.svg" width={500} height={500}/>
            </AboutContainer>    
            <h1>Sobre nuestro equipo</h1>
            <AvatarsContainer>
                <AboutCard>
                       <Avatar/>
                        <h3>Ing. Sugey Rosado</h3>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et
                        </p> 
                </AboutCard>
                <AboutCard>
                    <Avatar/>
                    <h3>Ing. Cynthia Verde</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </AboutCard>
                <AboutCard>
                    <Avatar/>
                    <h3>Ing. Mariana Trujillo</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </AboutCard>
                <AboutCard>
                    <Avatar/>
                    <h3>Ing. Rodrigo Moreno</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </AboutCard>
                <AboutCard>
                    <Avatar/>
                    <h3>Ing. Jeremi Medina</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </AboutCard>
                <AboutCard>
                    <Avatar/>
                    <h3>Ing. Adrian Mis</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et
                    </p>
                </AboutCard>
            </AvatarsContainer>
        </Container>  

    )
}
export default aboutUs; 