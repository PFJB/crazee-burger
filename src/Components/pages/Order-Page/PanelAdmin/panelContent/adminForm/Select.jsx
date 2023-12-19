import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export default function Select({ className, IconeBeforeInput, option, id, onChange }) {

    return (
        <SelectStyled className={className}>
            <span className="icone">{IconeBeforeInput && IconeBeforeInput}</span>
            <select value={option.selected} className="select" onChange={(event) => onChange(event.target.value, id)}>
                {option.option.map((value) => {
                    return <option key={`${option.id}-${value}`} value={value}>{value}</option>
                })}
            </select>
        </SelectStyled>
    )
}

const SelectStyled = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    padding: 0 16px;
    gap: 13px;

    & > *, & { background-color: ${theme.colors.background_white}; }

    .icone{
        display: grid;
        place-items: center;
        font-size: 16px;
    }

    .select{
        font-size: ${theme.fonts.size.P0};
        border: none;
        width: 100%;

 
    }

`;
