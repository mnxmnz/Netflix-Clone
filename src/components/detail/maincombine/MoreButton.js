import styled from 'styled-components';
import {ReactComponent as More} from '../../../assets/seasonicon/bottomArrow.svg';

const StyleMoreButton = styled.button`
    background: rgba(42, 42, 42, 0.8);
    border: 1px solid #D6D6D6;
    border-radius: 0.6rem;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.6rem;
    text-align: center;
    outline:none;
    color: #FFFFFF;
    cursor:pointer;
    width:7.3rem;
    height:2.8rem;
`
const ButtonWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:-1.4rem;

`

const MoreButton = ({text}) => {
    return (
        <ButtonWrap>
             <StyleMoreButton>{text}<More/></StyleMoreButton>
        </ButtonWrap>
    )
}

export default MoreButton;