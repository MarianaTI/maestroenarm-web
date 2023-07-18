import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Container } from './index.style';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Checkbox, Collapse } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCollapse, addSpecialty } from '../../store/slices/filterDrawerSlice';

export default function ListFilterDrawer({ subspecialties, label, children, value, collapseList }) {
    const dispatch = useDispatch()
    const isOpen = collapseList.includes(label)
    function handleChange(checkboxText) {
        if (!value.includes(checkboxText)) dispatch(addSpecialty([...value, checkboxText]))
        if (value.includes(checkboxText)) dispatch(addSpecialty(value.filter(subspecialty => subspecialty !== checkboxText)))
    }

    function handleExpanded() {
        if (!collapseList.includes(label)) dispatch(addCollapse([...collapseList, label]))
        if (collapseList.includes(label)) dispatch(addCollapse(collapseList.filter(collapseName => collapseName !== label)))
    }
    return (
        <>
            <ListItemButton onClick={handleExpanded}>
                {children}
                <ListItemText primary={label} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Container>
                    {subspecialties.map((subspecialty, index) => <FilterCheckbox
                        label={subspecialty}
                        key={subspecialty + index}
                        checked={value.includes(subspecialty)}
                        onChange={handleChange}
                    />)}
                </Container>
            </Collapse>
        </>
    )
}

function FilterCheckbox({ label, checked, onChange }) {
    function handleChange() { onChange(label) }
    return (
        <label style={{ marginLeft: 20 }} >
            <Checkbox checked={checked} onChange={handleChange} />
            {label}
        </label>
    )
}