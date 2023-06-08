import { Container } from "./index.style";



export default function VideoCard({ title, description, prize }) {
    return (
        <Container>
            {/* todo: replace to video tag html */}
            <div></div>
            <span>{title}</span>
            <p>{description}</p>
            <span>$ {prize}</span>
        </Container>
    )
}