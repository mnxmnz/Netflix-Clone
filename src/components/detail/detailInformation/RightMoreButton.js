import React from "react";
import styled from 'styled-components'
import { ReactComponent as RightMore }  from '../../../assets/detailinformation/btn_rightmore.svg'

const RightMoreButton = () => {
    return (
        <StyledRightMoreButton>
            <RightMore />
        </StyledRightMoreButton>
    );
};

const StyledRightMoreButton = styled.button`
    position: absolute;
    right: 0%;
    bottom: 25%;
    z-index: 10;
    opacity: 0;
    background: none;
    border: none;
    outline: none;
    padding: 2%;

    &:hover {
        opacity: 1;
    }
`;

export default RightMoreButton;
