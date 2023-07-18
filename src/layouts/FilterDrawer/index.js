import FilterDrawer from "../../components/FilterDrawer";

export default function FilterLayout({ children, setCheck }) {
    return <>
        {children}
        <FilterDrawer setCheck={setCheck} />
    </>
}