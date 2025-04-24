type PokeSelectProps = {
    generationChanged : (gen : string) => void;
}

const PokeSelect : React.FC<PokeSelectProps> = ( {generationChanged}) => {
    return (
        <div className="pokelist-select">
            <select
                onChange={(e) => {
                    generationChanged(e.target.value);
                }}
            >
                <option>
                    gen/1
                </option>
                <option>
                    gen/2
                </option>
                <option>
                    gen/3
                </option>
                <option>
                    gen/invalid
                </option>
            </select>
        </div>
    )
}

export default PokeSelect;