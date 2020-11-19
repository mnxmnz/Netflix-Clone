import styled from 'styled-components'
import {ReactComponent as Play}  from '../../assets/Play.svg'



const StyldButton = styled.div`
    width: ${props=> props.DesktopWidth}rem;
    height: ${props => props.DesktopHeight}rem;
    color : black;
    background-color : white;
    border-radius: 6px;
    font-size:1.8rem;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        color:white;
        background-color:#E50914;
    }
    &:hover>svg>path{
        fill:white;
    }
    @media only screen and (max-width: 768px) {
    width: ${props=> props.MobileWidth}rem;
    height: ${props => props.MobileHeight}rem;
    font-size:1.4rem;

  }
`

const PlayButton = ({DesktopWidth, DesktopHeight,MobileWidth,MobileHeight}) => {
    return <StyldButton DesktopWidth={DesktopWidth} DesktopHeight={DesktopHeight} MobileWidth={MobileWidth} MobileHeight={MobileHeight}><Play/>&nbsp;&nbsp;재생</StyldButton>
}

export default PlayButton;