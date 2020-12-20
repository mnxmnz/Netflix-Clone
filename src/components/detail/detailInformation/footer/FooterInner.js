import styled from 'styled-components';

const StyledFooterInner = styled.div`
    width:100%;
    padding: 0 4.8rem;
    border-bottom: 1px;
    border-left: 0;
    border-right: 0;
    border-top : 0;
    padding-bottom:1.65rem;

    @media screen and (max-width:768px) {
        padding: 0 2.3rem;
    }
`


const FooterInner = ({children}) => {
   return <StyledFooterInner>{children}</StyledFooterInner>
}

export default FooterInner;