import Image from "next/image";
import Filter from "../../../components/Filter";
import {
	AudiobookContainer,
	Container,
	EmptyStateContainer
} from "../../../styles/PageAudiobooks.style";
import Link from "next/link";
import CustomBook from "../../../components/CustomBook";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../../services/firebase/config";
import FilterLayout from "../../../layouts/FilterDrawer";
import { useSelector } from "react-redux";
import { AcademyVideoBanner } from "../../../styles/Videos.style";

export default function AudioBooks() {
	const { drawerItems } = useSelector(state => state.filterDrawer)
	const [filterItems, setFilterItems] = useState([])
	const [input, setInput] = useState('')
	let snapshot;
	async function getAudiobooks() {
		if (drawerItems.length > 0) {
			snapshot = await getDocs(
				query(collection(db, 'audiobooks'), where('subEspecialidad', 'array-contains-any', drawerItems)))
		}
		else snapshot = await getDocs(query(collection(db, 'audiobooks')));
		const audiobooks = snapshot.docs.map(doc => doc.data());
		setFilterItems(audiobooks.filter(data => data.name.includes(input)))
	}

	useEffect(() => {
		const debouncing = setTimeout(() => { getAudiobooks() }, 500)
		return () => clearTimeout(debouncing)
	}, [input, drawerItems]);

	return (
		<FilterLayout setCheck={setInput}>
			<Container>
			<AcademyVideoBanner className="academy__container">
                    <div className="academy__info__group">
                        <h1 className="academy__title">
                            Most fonts have a particular weight which corresponds. However some fonts.
                        </h1>
                        <p className="academy__info">
                            However some fonts, called variable fonts,
                            can support a range of weights with a more or less fine granularity,
                            and this can give the designer a much closer degree of control over the chosen weight.
                        </p>
                    </div>
                    <Image
                        className="academy__main__image"
                        src="/img/podcast.svg"
                        width={600}
                        height={400}
                        alt="academy-audiobooks-img"
                    />
                </AcademyVideoBanner>
				<Filter setState={setInput} />
				{filterItems.length > 0 ? (
					<AudiobookContainer>
						{filterItems.map((item, index) => (
							<Link
								href="/academy/audiobooks/view/[id]"
								as={`/academy/audiobooks/view/${item.id}`}
								key={item.id}
							>
								<div>
									<CustomBook
										key={index}
										img={item.img}
										name={item.name}
										topics={item.author}
										price={item.price}
									/>
								</div>
							</Link>
						))}
					</AudiobookContainer>
				) : (
					<EmptyStateContainer>
						<Image src="/img/search.svg" width={150} height={150} alt="search" />
						<span>Aún no hay productos disponibles</span>
					</EmptyStateContainer>
				)}
			</Container>
		</FilterLayout>
	);
}
