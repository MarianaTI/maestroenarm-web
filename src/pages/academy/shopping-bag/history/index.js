import HistoryTable from "../../../../components/HistoryTable";
import { Container } from "../../../../styles/History.style";

const rows = [
    { name: 'Producto1', type: 'Productos', prize: 299, date: '01/01/2023' },
    { name: 'Plan Premium', type: 'Planes', prize: 199, date: '01/01/2023' },
    { name: 'Producto2', type: 'Reembolsos', prize: 499, date: '01/01/2023' },
    { name: 'Plan estudiantil', type: 'Planes', prize: 99, date: '01/01/2023' },
];

export default function History() {
    return (
        <Container>
            <h1>Historial de compras</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <HistoryTable rows={rows}></HistoryTable>
        </Container>
    )
}   