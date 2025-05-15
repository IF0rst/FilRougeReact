import { Button } from "@mui/material";
import { useAppDispatch } from "../store/Hooks.ts";
import { addPokemon } from "../store/stores/PokeSlice.ts";

type CatchButtonProps = {
    id: number;
};

const CatchButton: React.FC<CatchButtonProps> = ({ id }) => {
    const dispatch = useAppDispatch()

    const handleCapture = () => {
        console.log("Ajout de "+id)
        dispatch(addPokemon(id));
    };

    return (
        <Button onClick={handleCapture} variant="contained" color="primary" size="large">
            Catch
        </Button>
    );
};

export default CatchButton;
