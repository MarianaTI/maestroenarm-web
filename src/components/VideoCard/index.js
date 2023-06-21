import Link from "next/link";
import { Container } from "./index.style";
import { AdvancedVideo } from "@cloudinary/react";

export default function VideoCard({ title, description, prize, isVertical = false, isBidCard, route, player }) {
    return (
        <Link href={route}>
            <Container isVertical={isVertical} isBidCard={isBidCard}>
                <AdvancedVideo cldVid={player}></AdvancedVideo>
                <div>
                    <span>{title}</span>
                    <p>{description}</p>
                    <span>$ {prize}</span>
                </div>
            </Container>
        </Link>
    )
}