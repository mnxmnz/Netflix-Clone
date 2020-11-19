import styled from 'styled-components';

const StyledPlayerWrap = styled.section`
    width : 100%;
    height : ${props => props.DesktopHeight}rem;
    padding: ${props => props.DesktopPadding};
    display: flex;
    flex-direction:column;
    justify-content:space-between;

    @media only screen and (max-width: 768px) {
    height: ${props => props.MobileHeight}rem;
    padding: ${props => props.MobilePadding};

  }
`


const PlayerWrap = ({children, DesktopHeight,DesktopPadding,MobileHeight,MobilePadding}) => {
return <StyledPlayerWrap DesktopPadding={DesktopPadding} DesktopHeight={DesktopHeight}  MobileHeight={MobileHeight}  MobilePadding ={MobilePadding} >{children}</StyledPlayerWrap>

}

export default PlayerWrap;