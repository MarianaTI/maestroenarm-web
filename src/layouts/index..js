import Navbar from '../components/Navbar/index'
import { Container } from './index.style'

export default function RootLayout({ children }) {
    return <>
        <Navbar />
        <Container>
            {children}
        </Container>
    </>
}