import styled from 'styled-components';
import {ReactComponent as Play}  from '../../assets/seasonicon/seasonPlayButton.svg'


const StyeldPlayButton =  styled(Play)`
    cursor: pointer;
    width:${props => props.desktopwidth||0}rem;
    height:${props => props.desktopwidth||0}rem;
    @media only screen and (max-width: 768px) {
    width: ${props=> props.mobilewidth||0}rem;
    height: ${props => props.mobileheight||0}rem;

  }
`


const SeasonPlayButton = ({desktopwidth, desktopheight,mobilewidth,mobileheight}) => {
    return <StyeldPlayButton desktopwidth={desktopwidth} desktopheight={desktopheight} mobilewidth={mobilewidth} mobileheight={mobileheight}/>
}

export default SeasonPlayButton;