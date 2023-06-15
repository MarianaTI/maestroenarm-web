import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import ListFilterDrawer from '../ListFilterDrawer';
import { closeDrawer } from '../../store/slices/filterDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DrawerBody, DrawerHeader, IconButtonStyled } from './index.style';


export default function FilterDrawer() {
    const dispatch = useDispatch();
    const { isOpen, drawerItems } = useSelector(state => state.filterDrawer);
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
                    {drawerItems.map(({ id, label, subspecialties }) => <ListFilterDrawer
                        key={id}
                        label={label}
                        subspecialties={subspecialties} />)}
                </List>
            </DrawerBody>
        </Drawer >
    );
}