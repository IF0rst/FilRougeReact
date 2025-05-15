import { Button } from "@mui/material";
import { useAppDispatch } from "../store/Hooks.ts";
import { releasePokemon } from "../store/stores/PokeSlice.ts";

type CatchButtonProps = {
    id: number;
};

const CatchButton: React.FC<CatchButtonProps> = ({ id }) => {
    const dispatch = useAppDispatch()

    const handleCapture = () => {
        console.log("Release de "+id)
        dispatch(releasePokemon(id));
    };

    return (
        <Button onClick={handleCapture} variant="contained" size="large">
            Release
        </Button>
    );
};

export default CatchButton;
