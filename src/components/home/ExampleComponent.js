import styled from 'styled-components'

const StyledExampleComponent = styled.div`
    width: ${props => props.DesktopWidth}rem;
    height: ${props => props.DesktopHeight}rem;
    background: #838383;
    border-radius: 0.8rem;
    margin-left:${props => props.DesktopMargin || 0}rem;

    @media only screen and (max-width: 768px) {
    width: ${props => props.MobileWidth}rem;
    height: ${props => props.MobileHeight}rem;
    margin-left:${props => props.MobileMargin || 0}rem;

  }
`


const ExampleComponent = ({DesktopWidth,DesktopHeight,MobileWidth,MobileHeight,DesktopMargin,MobileMargin,openDetail}) => {
  
    return <StyledExampleComponent 
        DesktopWidth={DesktopWidth} DesktopHeight={DesktopHeight} 
        MobileWidth={MobileWidth} MobileHeight={MobileHeight} 
        DesktopMargin={DesktopMargin} MobileMargin={MobileMargin}        
        onClick={openDetail}/>
}

export default ExampleComponent;