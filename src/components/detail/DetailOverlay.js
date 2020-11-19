import styled from 'styled-components';


const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`


const DetailOverlay = ({visible}) => {
    return <ModalOverlay visible={visible} />
}

export default DetailOverlay;