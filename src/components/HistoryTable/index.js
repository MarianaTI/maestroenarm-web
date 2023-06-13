import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CustomLi, CustomUl } from "./index.style";

function TableNav({ setType }) {
    const [listName, setListName] = useState('Productos')

    function handleClick(e) {
        if (e.target.tagName === 'UL') return;
        setListName(e.target.textContent)
        setType(e.target.textContent)
    }

    return (
        <CustomUl onClick={handleClick}>
            <CustomLi isSelected={listName === 'Productos'}>Productos</CustomLi>
            <CustomLi isSelected={listName === 'Planes'}>Planes</CustomLi>
            <CustomLi isSelected={listName === 'Reembolsos'}>Reembolsos</CustomLi>
        </CustomUl>
    )
}

export default function HistoryTable({ rows }) {
    const [type, setType] = useState('Productos')
    const items = rows.filter(item => item.type === type)
    return (
        <>
            <TableNav setType={setType} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="left">Artículo</TableCell>
                            <TableCell align="left">Fecha</TableCell>
                            <TableCell align="left">Precio total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(row =>
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <ShoppingCartOutlinedIcon />
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">$ {row.prize}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}