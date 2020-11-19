import styled from 'styled-components';

const StyledHead = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;


`

const HeadWrap = ({children}) => {
    return <StyledHead >{children}</StyledHead>
}

export default HeadWrap;