import styled from 'styled-components';

const StyledInner = styled.div`
    width:100%;
    padding: 0 4.8rem;
    border-bottom: 1px;
    border-left: 0;
    border-right: 0;
    border-top : 0;
    border-style:solid;
    border-image: radial-gradient(ellipse at 50% 50%, #A0A0A0 40%, #6F6F6F 60%,#141414 100%);
    border-image-slice:1;
    padding-bottom:1.65rem;

    @media screen and (max-width:768px) {
        padding: 0 2.3rem;
    }
`


const SeasonInner = ({children}) => {
   return <StyledInner>{children}</StyledInner>
}

export default SeasonInner;