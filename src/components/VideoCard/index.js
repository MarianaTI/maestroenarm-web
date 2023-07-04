import Link from "next/link";
import { Container, PlaceholderContainer } from "./index.style";
import { AdvancedVideo } from "@cloudinary/react";

export default function VideoCard({ title, description, price, isVertical = false, isBidCard, route, player }) {
    return (
        <Link href={route}>
            <Container isVertical={isVertical} isBidCard={isBidCard}>
                <AdvancedVideo cldVid={player}></AdvancedVideo>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <span>$ {price}</span>
                </div>
            </Container>
        </Link>
    )
}

export const PlaceholderVideo = ({ isVertical = false, isBidCard }) => {
    return (
        <PlaceholderContainer isVertical={isVertical} isBidCard={isBidCard}>
            <div />
            <div>
                <div />
                <div />
                <div />
            </div>
        </PlaceholderContainer>
    )
}