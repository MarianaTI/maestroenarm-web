import { useRouter } from "next/router";
import Navbar from "../components/Nab";
import { Container } from "./index.style";
import NavDrawer from "../components/NavDrawer";

export default function Layout({ children }) {
    const route = useRouter();

    const hasNavbar = !(
        route.pathname === "/" || route.pathname.match(/sesion|register|demo|test/g)
    );

    return (
        <>
            {hasNavbar && (
                <>
                    <Navbar />
                    <NavDrawer />
                </>
            )}
            <Container hasNavbar={hasNavbar}>{children}</Container>
        </>
    );
}
