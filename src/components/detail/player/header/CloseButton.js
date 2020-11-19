import styled from 'styled-components';
import {ReactComponent as MySvg}  from '../../../../assets/closebutton.svg'

const StyeldCloseButton =  styled(MySvg)`
    color:#ffffff;
    cursor: pointer;

`


const CloseButton = ({close}) => {
    return <StyeldCloseButton onClick={close} />

}

export default CloseButton;