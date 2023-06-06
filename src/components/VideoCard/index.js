import { Container } from "./index.style";



export default function VideoCard({ title, description, prize }) {
    return (
        <Container>
            {/* todo: replace to video tag html */}
            <div style={{ height: 139, width: 245, background: "#D9D9D9" }}></div>
            <span>Título</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>$ 0.00</span>
        </Container>
    )
}