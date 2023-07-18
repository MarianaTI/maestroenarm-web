import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListFilterDrawer from '../ListFilterDrawer';
import { closeDrawer } from '../../store/slices/filterDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DrawerBody, DrawerHeader, IconButtonStyled } from './index.style';

const specialties = [
    { id: 1, label: 'Cardiología', subspecialties: ['cardiología clínica', 'cardiología pediátrica'] },
    { id: 2, label: 'Cirugia', subspecialties: ['cirgia general', 'cirugia pediatrica', 'cirugía bariátria', 'cirugia de trasplantes'] },
    { id: 3, label: 'Geriatria', subspecialties: ['cardio geriatria', 'orto geriatría', 'geriatría general'] },
    { id: 4, label: 'Ginecología', subspecialties: ['obstetricia', 'medicina materno fetal', 'urológica'] },
    { id: 5, label: 'Medicina', subspecialties: ['medicina iterna', 'medicina familiar'] },
    { id: 6, label: 'Odontología', subspecialties: ['endodoncia', 'ortodoncia', 'cirugia oral', 'prostodoncia'] },
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