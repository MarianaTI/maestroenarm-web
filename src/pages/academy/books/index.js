import Image from "next/image";
import Filter from "../../../components/Filter";
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
import FilterLayout from "../../../layouts/FilterDrawer";
import { useSelector } from "react-redux";

export default function AudioBooks() {
	const { drawerItems } = useSelector(state => state.filterDrawer)
	let snapshot;

	const [filterItems, setFilterItems] = useState([])
	const [input, setInput] = useState('')

	async function getAudiobooks() {
		if (drawerItems.length > 0) { snapshot = await getDocs(
			query(collection(db, 'books'), where('sub_specialties', 'array-contains-any', drawerItems)))}
		else snapshot = await getDocs(query(collection(db, 'books')));
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
				<MainContainer>
					<MainInformation>
						<h1>Body Bold Extra Large.</h1>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</span>
					</MainInformation>
					<ImageStyled src="/img/read.svg" width={350} height={300} alt="podcast" />
				</MainContainer>
				<FilterContainer>
					<Filter setState={setInput} />
				</FilterContainer>
				{filterItems.length > 0 ? (
					<AudiobookContainer>
						{filterItems.map((item, index) => (
							<Link
								href="/academy/books/view/[id]"
								as={`/academy/books/view/${item.id}`}
								key={item.id}
							>
								<div>
									<CustomBook
										key={index}
										img={item.images.font}
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
