import styled from 'styled-components';

const StyledLabel = styled.label`
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    color:#777777;

`
const StyledCheckbox = styled.input`
    appearance: none;
    &:checked + label {
        color:#FFFFFF;
    }
`


const SeasonNav = ({SeasonNumber}) => {
    return(
        <>
            <StyledCheckbox type='radio' name='season' value={SeasonNumber} id={SeasonNumber} />
             <StyledLabel htmlFor={SeasonNumber}>시즌{SeasonNumber}</StyledLabel>
        </>
    )
}

export default SeasonNav;