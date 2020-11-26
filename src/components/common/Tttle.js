import styled from 'styled-components';

const StyledTitle = styled.span`
    font-weight: bold;
    font-size: ${props=>props.DesktopFontSize}rem;
    text-align: center;
    color: #FFFFFF;
    @media only screen and (max-width: 768px) {
        font-size: ${props=>props.MobileFontSize}rem;
    }
`


const Title = ({DesktopFontSize,MobileFontSize,children}) => {
return <StyledTitle DesktopFontSize={DesktopFontSize} MobileFontSize={MobileFontSize}>{children}</StyledTitle>
}

export default Title;