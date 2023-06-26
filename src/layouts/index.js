import { useRouter } from "next/router";
import Navbar from "../components/Nab";
import { Container } from "./index.style";
import NavDrawer from "../components/NavDrawer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
    const { isAuthenticated } = useSelector(state => state.auth);
    const route = useRouter();
    const protectedRoutes = route.pathname.match(/academy|game|edit|payment|profile|ranking|statistic/g)
    const hasNavbar = !(
        route.pathname === "/" || route.pathname.match(/sesion|register|demo|test/g)
    );

    useEffect(() => {
        if (!isAuthenticated && protectedRoutes) { route.replace('/sesion') }
    }, [isAuthenticated, protectedRoutes, route])

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
