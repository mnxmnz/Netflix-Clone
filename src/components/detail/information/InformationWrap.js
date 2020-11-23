import React from "react";
import styled from "styled-components";

const Information = ({ children, DesktopHeight, DesktopPadding, MobileHeight, MobilePadding }) => {
    return (
        <div>
            <StyledInformation DesktopPadding={DesktopPadding} DesktopHeight={DesktopHeight} MobileHeight={MobileHeight} MobilePadding={MobilePadding}>
                {children}
            </StyledInformation>
        </div>
    );
};

const StyledInformation = styled.div`
    color: white;
    width: 100%;
    height: ${(props) => props.DesktopHeight}rem;
    padding: ${(props) => props.DesktopPadding};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: ${(props) => props.MobileHeight}rem;
        padding: ${(props) => props.MobilePadding};
    }
`;

export default Information;
