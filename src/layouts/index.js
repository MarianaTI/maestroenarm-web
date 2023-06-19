import { useRouter } from 'next/router';
import Navbar from '../components/Nab';
import { Container } from './index.style'

export default function Layout({ children }) {
    const route = useRouter()
    return <>
        {route.pathname === '/' || !route.pathname.match(/sesion|register|demo|test/g) && <Navbar />}
        <Container>
            {children}
        </Container>
    </>
}