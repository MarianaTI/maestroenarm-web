import { useRouter } from "next/router";
import Navbar from "../components/Nab";
import { Container } from "./index.style";
import NavDrawer from "../components/NavDrawer";
import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";

export default function Layout({ children }) {
    const { user } = useAuth();
    const route = useRouter();
    const protectedRoutes = route.pathname.match(/academy|game|edit|payment|profile|ranking|statistic/g)
    const hasNavbar = !(
        route.pathname === "/" || route.pathname.match(/sesion|register|demo|test/g)
    );

    useEffect(() => {
        if (!user && protectedRoutes) { route.replace('/sesion') }
    }, [user, protectedRoutes, route])

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
