import Link from "next/link";
import { CardBody, CardBodyPlaceholder } from "./index.style";
import { AdvancedVideo } from "@cloudinary/react";

export const CardVideo = ({ url = 'http://localhost:3000/academy/videos', title, description, price, isReponsive = false, player }) => {
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

export const CardVideoPlaceholder = ({ isReponsive = false}) => {
    return (
        <CardBodyPlaceholder isResponsive={isReponsive}>
            <div className="card__player__placeholder" />
            <div className="card__content__placeholder">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </CardBodyPlaceholder>
    )
}