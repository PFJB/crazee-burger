import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export default function Select({ className, IconeBeforeInput }) {
    return (
        <SelectStyled className={className}>
            <span className="icone">{IconeBeforeInput && IconeBeforeInput}</span>
            <select className="select">
                <option value="En stock">En stock</option>
                <option value="Rupture">Rupture</option>
            </select>
        </SelectStyled>
    )
}

const SelectStyled = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    padding: 9.75px 16px;
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
        flex: 1;
    }

`;
