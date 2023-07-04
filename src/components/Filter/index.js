import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterButton, FilterContainer, SearchButton, SearchInput } from "./index.style";
import { openDrawer } from "../../store/slices/filterDrawerSlice";
import { useDispatch } from "react-redux";

export default function Filter({ setState }) {
    const dispatch = useDispatch()
    const handleChange = e => { setState(e.target.value) }
    return (
        <FilterContainer>
            <SearchInput type="search" placeholder='Buscar' onChange={handleChange} />
            <FilterButton onClick={() => dispatch(openDrawer())}>
                <FilterListIcon />
            </FilterButton>
        </FilterContainer>
    )
}