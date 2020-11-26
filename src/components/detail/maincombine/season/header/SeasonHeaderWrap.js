import styled from 'styled-components';

const StyleWrap = styled.header`
    display : flex;
    justify-content:space-between;
`

const SeasonHeadertWrap = ({children}) => {
    return <StyleWrap>{children}</StyleWrap>
}

export default SeasonHeadertWrap;