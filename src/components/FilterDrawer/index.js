import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListFilterDrawer from '../ListFilterDrawer';
import { closeDrawer } from '../../store/slices/filterDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DrawerBody, DrawerHeader, IconButtonStyled } from './index.style';

const specialties = [
    { id: 1, label: 'Especialidad 1', subspecialties: ['Opción 1', 'Opción 2', 'Opción 3'] },
    { id: 2, label: 'Especialidad 2', subspecialties: ['Opción 4', 'Opción 5', 'Opción 6'] },
    { id: 3, label: 'Especialidad 3', subspecialties: ['Opción 7', 'Opción 8', 'Opción 9'] },
    { id: 4, label: 'Especialidad 4', subspecialties: ['Opción 10', 'Opción 11', 'Opción 12'] },
]

export default function FilterDrawer() {
    const { isOpen, drawerItems, drawerCollapse } = useSelector(state => state.filterDrawer);
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
                    {specialties.map(({ id, label, subspecialties }) => <ListFilterDrawer
                        key={id}
                        value={drawerItems}
                        label={label}
                        collapseList={drawerCollapse}
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