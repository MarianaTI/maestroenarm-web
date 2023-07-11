import Image from "next/image";
import { AcademyBanner, ContentContainer } from "../../../styles/Academy.style";
import { CustomButton } from "../../../components/CustomButton";
import Link from "next/link";

export default function Academy() {
    return (
        <>
            <AcademyBanner className="academy__container">
                <div className="academy__info__group">
                    <h1 className="academy__title">
                        Most fonts have a particular weight which corresponds. However some fonts.
                    </h1>
                    <p className="academy__info">
                        However some fonts, called variable fonts,
                        can support a range of weights with a more or less fine granularity,
                        and this can give the designer a much closer degree of control over the chosen weight.
                    </p>
                    <div>
                        <CustomButton theme="secondary">Probar ahora</CustomButton>
                    </div>
                </div>
                <Image
                    src="/img/medicine.svg"
                    width={600}
                    height={400}
                    alt="academy-img"
                />
            </AcademyBanner>
            <ContentContainer>
                <h2>Most fonts have a particular weight which corresponds. </h2>
                <div className="academy__content__resources">
                    <Link href="/academy/books" alt="books">
                        <Image src="/academy/business-3d-stack-of-different-books.png" height={150} width={150} />
                        <h3>Books</h3>
                    </Link>
                    <Link href="/academy/audiobooks" alt="audiobooks">
                        <Image src="/academy/silky-accessibility-features.png" height={150} width={150} />
                        <h3>Audiobooks</h3>
                    </Link>
                    <Link href="/academy/videos" alt="videos">
                        <Image src="/academy/silky-tablet-with-video-player-interface.png" height={150} width={150} />
                        <h3>Videos</h3>
                    </Link>
                </div>
            </ContentContainer>
        </>
    )
} 