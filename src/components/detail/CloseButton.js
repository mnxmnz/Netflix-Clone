import styled from 'styled-components';

const StyeldCloseButton = styled.button`

    color:#ffffff;

`


const CloseButton = ({close}) => {
    return <StyeldCloseButton onClick={close}> 닫기 </StyeldCloseButton>
}

export default CloseButton;