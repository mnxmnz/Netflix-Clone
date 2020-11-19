import styled from 'styled-components';


const StyledFooterWrap = styled.footer`
    display:flex;
    justify-content:space-between;
    width:100%;
`

const FooterWrap = ({children}) => {
    return <StyledFooterWrap>{children}</StyledFooterWrap>
}

export default FooterWrap;