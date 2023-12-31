import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Select({ className, IconeBeforeInput, option, onChange, onBlur, onFocus }) {

    return (
        <SelectStyled className={className}>
            <span className="icone">{IconeBeforeInput && IconeBeforeInput}</span>
            <select
                name={option.name}
                value={option.selected}
                className="select"
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
            >
                {option.option.map(({ value, label }) => {
                    return <option key={`${option.id}-${label}`} value={value}>{label}</option>
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
        color: ${theme.colors.greyDark};
    }

    .select{
        font-size: ${theme.fonts.size.XS};
        border: none;
        width: 100%;
        color: ${theme.colors.greyMedium};
        option{
        font-size: ${theme.fonts.size.P0};
        }
    }
`;
