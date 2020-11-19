import styled from 'styled-components';

const ModalInner = styled.div`
    box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.5);
    background: #141414;
    border-radius: 0.6em;
    width:100%;
    max-width: 85rem;
    min-width: 64.8rem;
    margin: 7.2rem auto;
    height:12313px;
    outline:0;
    overflow:hidden;
    @media only screen and (max-width: 880px) {
        width:95vw;
  }
`

const DetailInner = ({children}) => {
    return   <ModalInner tabIndex="0"> {children} </ModalInner>

}

export default DetailInner;