import { Container } from "./index.style";



export default function VideoCard({ title, description, prize, isVertical = false, isBidCard }) {
    return (
        <Container isVertical={isVertical} isBidCard={isBidCard}>
            {/* todo: replace to video tag html */}
            <video></video>
            <div>
                <span>{title}</span>
                <p>{description}</p>
                <span>$ {prize}</span>
            </div>
        </Container>
    )
}