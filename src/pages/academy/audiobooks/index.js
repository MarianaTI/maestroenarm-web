import Image from "next/image";
import Filter from "../../../components/Filter";
import FilterDrawer from "../../../components/FilterDrawer";
import {
	AudiobookContainer,
	Container,
	EmptyStateContainer,
	FilterContainer,
	ImageStyled,
	MainContainer,
	MainInformation,
} from "../../../styles/PageAudiobooks.style";
import Link from "next/link";
import CustomBook from "../../../components/CustomBook";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, limit } from "@firebase/firestore";
import { db } from "../../../services/firebase/config";

export default function AudioBooks() {
	const [audiobooks, setAudiobooks] = useState([]);
	const [input, setInput] = useState('');
	let audiobooksRef = null;
	async function getAudiobooks() {
		if (input === '') audiobooksRef = query(collection(db, 'audiobooks'), limit(24))
		else audiobooksRef = query(collection(db, 'audiobooks'), where('name', '>=', input), where('name', '<', input + '\uf8ff'))
		const snapshot = await getDocs(audiobooksRef);
		const data = snapshot.docs.map(doc => doc.data());
		setAudiobooks(data);
	}
	useEffect(() => {
		const debouncing = setTimeout(() => { getAudiobooks() }, 500)
		return () => clearTimeout(debouncing)
	}, [input]);

	return (
		<Container>
			<MainContainer>
				<MainInformation>
					<h1>Body Bold Extra Large.</h1>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</span>
				</MainInformation>
				<ImageStyled src="/img/podcast.svg" width={350} height={300} alt="podcast" />
			</MainContainer>
			<FilterContainer>
				<Filter setState={setInput} />
				<FilterDrawer />
			</FilterContainer>
			{audiobooks.length > 0 ? (
				<AudiobookContainer>
					{audiobooks.map((item, index) => (
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
	);
}
