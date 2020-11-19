import {ReactComponent as NoMute}  from '../../assets/mute/btn_sndon.svg'
import {ReactComponent as Mute}  from '../../assets/mute/btn_sndoff.svg'


const MuteButton = ({checked,ClickHandler}) => {
    return checked ?
    <Mute onClick={ClickHandler}/>
    :
    <NoMute onClick={ClickHandler}/>
}

export default MuteButton;