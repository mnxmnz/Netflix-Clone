import styled from 'styled-components';

import PlusContainer from '../../../../containers/detail/player/footer/PlusContainer';
import DownContainer from '../../../../containers/detail/player/footer/DownContainer';
import UpContainer from '../../../../containers/detail/player/footer/UpContainer';


const StyledBottom = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 1rem;
`


const FooterLeftBottom = () => {

    return (
    <StyledBottom>     
        <PlusContainer />
        <UpContainer/>
        <DownContainer />
    </StyledBottom>)
}

export default FooterLeftBottom;