import Link from "next/link";
import { CardBody } from "./index.style";
import { AdvancedVideo } from "@cloudinary/react";

export default function CardVideo({ url = 'http://localhost:3000/academy/videos', title, description, price, isReponsive = false, player }) {
    return (
        <Link href={url}>
            <CardBody isResponsive={isReponsive}>
                <AdvancedVideo className="card__video" cldVid={player} />
                <div>
                    <div className="card__title">{title}</div>
                    <p className="card__description">{description}</p>
                    <span className="card__price">${price}</span>
                </div>
            </CardBody>
        </Link>
    )
}