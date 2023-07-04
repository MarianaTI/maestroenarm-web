import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterButton, FilterContainer, SearchButton, SearchInput } from "./index.style";
import { openDrawer } from "../../store/slices/filterDrawerSlice";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@material-ui/icons";

export default function Filter() {
    const dispatch = useDispatch()
    return (
        <FilterContainer>
            <FilterButton onClick={() => dispatch(openDrawer())}>
                <FilterListIcon />
            </FilterButton>
            <SearchInput type="search" placeholder='Buscar'/>
            <SearchButton>
                <SearchOutlined />
            </SearchButton>
        </FilterContainer>
    )
}