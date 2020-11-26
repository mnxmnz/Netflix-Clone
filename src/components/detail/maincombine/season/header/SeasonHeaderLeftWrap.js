import styled from 'styled-components';

const StyleLeftWrap = styled.header`
    display : flex;
`

const SeasonHeaderLeftWrap = ({children}) => {
    return <StyleLeftWrap>{children}</StyleLeftWrap>
}

export default SeasonHeaderLeftWrap;