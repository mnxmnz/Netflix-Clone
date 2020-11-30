import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftMore } from "../../../assets/detailinformation/btn_leftmore.svg";

const LeftMoreButton = () => {
    return (
        <StyledLeftMoreButton>
            <LeftMore />
        </StyledLeftMoreButton>
    );
};

const StyledLeftMoreButton = styled.button`
    position: absolute;
    left: 0%;
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

export default LeftMoreButton;
