import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ListFilterDrawer from '../ListFilterDrawer';
import { closeDrawer } from '../../store/slices/filterDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DrawerBody, DrawerHeader, IconButtonStyled } from './index.style';

const specialties = [
    {
        id: 1, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad' },
            { id: 2, label: 'Sub - especialidad' },
            { id: 3, label: 'Sub - especialidad' },
            { id: 4, label: 'Sub - especialidad' }
        ]
    },
    {
        id: 2, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad' },
            { id: 2, label: 'Sub - especialidad' },
            { id: 3, label: 'Sub - especialidad' },
            { id: 4, label: 'Sub - especialidad' }
        ]
    },
    {
        id: 3, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad' },
            { id: 2, label: 'Sub - especialidad' },
            { id: 3, label: 'Sub - especialidad' },
            { id: 4, label: 'Sub - especialidad' }
        ]
    },
    {
        id: 4, label: 'Especialidad', subspecialties: [
            { id: 1, label: 'Sub - especialidad' },
            { id: 2, label: 'Sub - especialidad' },
            { id: 3, label: 'Sub - especialidad' },
            { id: 4, label: 'Sub - especialidad' }
        ]
    },
]

export default function FilterDrawer() {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(state => state.filterDrawer);
    return (
        <Drawer
            anchor="right"
            open={isOpen}
        >
            <DrawerBody role="presentation">
                <Container>
                    <DrawerHeader>Filtro</DrawerHeader>
                    <IconButtonStyled onClick={() => dispatch(closeDrawer())}>
                        <CloseIcon />
                    </IconButtonStyled>
                </Container>
                <List>
                    {specialties.map(({ id, label, subspecialties }) => <ListFilterDrawer
                        key={id}
                        label={label}
                        subspecialties={subspecialties} />)}
                </List>
            </DrawerBody>
        </Drawer >
    );
}