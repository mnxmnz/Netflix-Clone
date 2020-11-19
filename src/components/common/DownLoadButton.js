import styled from 'styled-components'
import {ReactComponent as Download}  from '../../assets/download.svg'



const StyldButton = styled.div`
    width: ${props=> props.DesktopWidth}rem;
    height: ${props => props.DesktopHeight}rem;
    color : #FFFFFF;
    background-color : #353336;
    border-radius: 6px;
    font-size:1.8rem;
    display:flex;
    justify-content:center;
    align-items:center;

    &>svg>path{
        fill:white;
    }

    &:hover{
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

const DownLoadButton = ({DesktopWidth, DesktopHeight,MobileWidth,MobileHeight}) => {
    return <StyldButton DesktopWidth={DesktopWidth} DesktopHeight={DesktopHeight} MobileWidth={MobileWidth} MobileHeight={MobileHeight}><Download/>&nbsp;&nbsp;저장</StyldButton>
}

export default DownLoadButton;