import Navbar from '../components/Nab';
import { Container } from './index.style'

export default function Layout({ children }) {
    return <>
        <Navbar />
        <Container>
            {children}
        </Container>
    </>
}