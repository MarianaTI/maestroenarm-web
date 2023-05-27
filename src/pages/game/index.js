import { GameField } from "../../components/GameField";

const gameFields = [
    { label: 'Aleatorio', isSelected: false },
    { label: 'Por Categoría', isSelected: true },
];

export default function Game() {
    return <>
        {gameFields.map(({ label, isSelected }) => <GameField label={label} isSelected={isSelected} />)}
    </>
}
