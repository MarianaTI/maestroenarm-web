import { useRouter } from 'next/router';
import Navbar from '../components/Nab';
import { Container } from './index.style'

export default function Layout({ children }) {
    const route = useRouter()
    return <>
        {route.pathname.match(/session|register|demo/g) || <Navbar />}
        <Container>
            {children}
        </Container>
    </>
}