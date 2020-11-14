import styled from 'styled-components';


const ModalWrapper = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`
const DetailWrapper = ({maskClosable,visible,children,onMaskClick}) => {
    return (
    <ModalWrapper onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}> 
        {children} 
    </ModalWrapper>)
}

export default DetailWrapper