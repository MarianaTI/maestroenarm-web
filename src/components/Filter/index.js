import { CustomButton } from "../CustomButton";
import FilterListIcon from '@mui/icons-material/FilterList';
import { ButtonContent, FilterContainer, SearchInput } from "./index.style";
import { useRef } from "react";
import { openDrawer } from "../../store/slices/filterDrawerSlice";
import { useDispatch } from "react-redux";


export default function Filter() {
    const iconRef = useRef(null)
    const dispatch = useDispatch()
    function handleFocus() { iconRef.current.style.opacity = 0 }
    function handleBlur() { iconRef.current.style.opacity = 1 }

    return (
        <FilterContainer>
            <svg ref={iconRef}
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20"
                fill="#484A84"
                className="bi bi-search"
                viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <SearchInput type="search" onFocus={handleFocus} onBlur={handleBlur} />
            <CustomButton size="large" theme="secondary" onClick={() => dispatch(openDrawer())}>
                <ButtonContent>
                    <FilterListIcon />
                    <span>Filtro</span>
                </ButtonContent>
            </CustomButton>
        </FilterContainer>
    )
}