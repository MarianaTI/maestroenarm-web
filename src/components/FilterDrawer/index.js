import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListFilterDrawer from '../ListFilterDrawer';
import { closeDrawer } from '../../store/slices/filterDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DrawerBody, DrawerHeader, IconButtonStyled } from './index.style';

const drawerItems = [
    {
        id: 1, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad', isSelected: false },
            { id: 2, label: 'Sub - especialidad', isSelected: false },
            { id: 3, label: 'Sub - especialidad', isSelected: false },
            { id: 4, label: 'Sub - especialidad', isSelected: false }
        ]
    },
    {
        id: 2, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad', isSelected: false },
            { id: 2, label: 'Sub - especialidad', isSelected: false },
            { id: 3, label: 'Sub - especialidad', isSelected: false },
            { id: 4, label: 'Sub - especialidad', isSelected: false }
        ]
    },
    {
        id: 3, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad', isSelected: false },
            { id: 2, label: 'Sub - especialidad', isSelected: false },
            { id: 3, label: 'Sub - especialidad', isSelected: false },
            { id: 4, label: 'Sub - especialidad', isSelected: false }
        ]
    },
    {
        id: 4, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad', isSelected: false },
            { id: 2, label: 'Sub - especialidad', isSelected: false },
            { id: 3, label: 'Sub - especialidad', isSelected: false },
            { id: 4, label: 'Sub - especialidad', isSelected: false }
        ]
    },
]

export default function FilterDrawer() {
    const { isOpen } = useSelector(state => state.filterDrawer);
    return (
        <Drawer
            anchor="right"
            open={isOpen}
        >
            <DrawerBody role="presentation">
                <Container>
                    <DrawerHeader>Filtro</DrawerHeader>
                    <CloseButton />
                </Container>
                <List>
                    {drawerItems.map(({ id, label, subspecialties }) => <ListFilterDrawer
                        key={id}
                        label={label}
                        subspecialties={subspecialties} />)}
                </List>
            </DrawerBody>
        </Drawer >
    );
}

function CloseButton() {
    const dispatch = useDispatch();
    return (
        <IconButtonStyled onClick={() => dispatch(closeDrawer())}>
            <CloseIcon />
        </IconButtonStyled>
    )
}