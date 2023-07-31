import { CardBody, CardBodyPlaceholder } from "./index.style";
import { AdvancedVideo } from "@cloudinary/react";

export const CardVideo = ({
    url, title = 'title',
    description = 'description',
    isPurchased = false, price = '0.00',
    isReponsive = false, player }) => {
    return (
        <CardBody href={url} isResponsive={isReponsive} >
            <AdvancedVideo className="card__video" cldVid={player} />
            <div>
                <div className="card__title">{title}</div>
                <p className="card__description">{description}</p>
                {!isPurchased && <span className="card__price">${price}</span>}
            </div>
        </CardBody>
    )
}

export const CardVideoPlaceholder = ({ isReponsive = false }) => {
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