import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import { Container } from './index.style';

export default function ListFilterDrawer({ subspecialties, label, children }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <ListItemButton onClick={() => setOpen(!open)}>
                {children}
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Container>
                    {subspecialties.map(({ id, label }) => <label key={id} style={{ marginLeft: 20 }}>
                        <input type='checkbox' style={{ marginRight: 16 }} />
                        {label}
                    </label>)}
                </Container>
            </Collapse>
        </>
    )
} 